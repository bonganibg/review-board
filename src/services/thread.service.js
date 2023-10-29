import { Thread } from "../models/models.js";

const API_URL = "http://localhost:8080/"
const PATH = "threads/"

export class ThreadService
{
    constructor(){}

    /**
     * Create a new message thread for a student
     * @param {String} studentNumber Stuend number
     * @param {String} reviewer Reviewer creating the thread
     * @param {String} message The message to be added
     */
    async create(studentNumber, reviewer, message){
        let thread = new Thread(studentNumber, reviewer, message);

        let response = await (await fetch(API_URL + PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thread)
        })).json();

        console.log(response);
        // Return a success or failure message
    }

    /**
     * Change the message on a thread
     * @param {String} studentNumber Student number
     * @param {String} threadId ID for the thread 
     * @param {String} message Message being added to the thread
     */
    async edit(studentNumber, threadId, message){
        let data = {
            threadId: threadId,
            message: message
        }

        let response = await (await fetch(API_URL + PATH + studentNumber, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })).json();

        console.log(response);
        // Return a success or failed message
    }

    /**
     * Get all threads for a student
     * @param {String} studentNumber Student number
     */
    async getAll(studentNumber){
        let response = await (await fetch(API_URL + PATH + studentNumber, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        console.log(response);

        // Create a list of Thread objects before returning
        return response.thread;
    }

    /**
     * Get a single thread
     * @param {String} studentNumber Student number
     * @param {String} threadId Get the id for the thread being checked
     * @returns 
     */
    async get(studentNumber, threadId){
        let response = await (await fetch(API_URL + PATH + studentNumber + "/" + threadId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        console.log(response.status);

        // Create a Thread objects before returning
        return response.thread;

    }
}