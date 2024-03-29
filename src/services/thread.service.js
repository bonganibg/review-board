import { Thread, Response } from "../models/models.js";

const PATH = "threads/"

export class ThreadService
{
    constructor(apiUrl){
        this.API_URL = apiUrl;
    }

    /**
     * Create a new message thread for a student
     * @param {String} studentNumber Stuend number
     * @param {String} reviewer Reviewer creating the thread
     * @param {String} message The message to be added
     */
    async create(studentNumber, reviewer, message){
        // Create the API object
        let thread = new Thread(studentNumber, reviewer, message);

        // Run the API query
        let response = await fetch(this.API_URL + PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thread)
        })

        // Check for successful operation
        if (response.status === 201)
            return new Response("Created", true)                
         

        // Check for client side error
        if (400 > response.status < 500)
            return new Response("Application Error", false)        

        // Check for server side error
        return new Response("Server Error", false)
    }

    /**
     * Change the message on a thread
     * @param {String} studentNumber Student number
     * @param {String} threadId ID for the thread 
     * @param {String} message Message being added to the thread
     */
    async edit(studentNumber, threadId, message){
        // Create query object
        let data = {
            threadId: threadId,
            message: message
        }

        // Perform API request
        let response = await fetch(this.API_URL + PATH + studentNumber, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        if (response.status === 200)
            return new Response("Successfully Uploaded", true);

        if (400 >= response.status < 500)
            return new Response("Application Error", false);

        return new Response("Server Error", false);

    }

    /**
     * Get all threads for a student
     * @param {String} studentNumber Student number
     */
    async getAll(studentNumber){
        // Run Request
        let response = await fetch(this.API_URL + PATH + studentNumber, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Return a list of the Thread obj if request was successful
        if (response.status === 200){
            let data = await response.json();
            let threads = [];

            data.thread.forEach(thread => {
                let threadObj = new Thread(studentNumber, "", "");
                threadObj.create(thread);

                threads.push(threadObj);                            
            });

            return threads;
        }
        
        return undefined;
    }

    /**
     * Get a single thread
     * @param {String} studentNumber Student number
     * @param {String} threadId Get the id for the thread being checked
     * @returns 
     */
    async get(studentNumber, threadId){
        // Perform the request
        let response = await fetch(this.API_URL + PATH + studentNumber + "/" + threadId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // If the item was found
        if (response.status === 200)
        {
            let data = await response.json();
            
            let thread = new Thread(studentNumber, "", "");
            thread.create(data.thread);

            return thread;
        }

        return undefined;
    }

    /**
     * Delete a message from the thread
     * @param {string} studentId Student number
     * @param {string} threadId Id for the thread
     * @returns true if the operation was successful
     */
    async delete(studentId, threadId    ){
        let response = await fetch(`${this.API_URL}${PATH}${studentId}?threadId=${threadId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200){
            return true
        }

        return false;
    }
}