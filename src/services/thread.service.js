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
    create(studentNumber, reviewer, message){
        let thread = new Thread(studentNumber, reviewer, message);

        let response = fetch(API_URL + PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thread)
        })

        console.log(response);
        // Return a success or failure message
    }

    /**
     * Change the message on a thread
     * @param {String} studentNumber Student number
     * @param {String} threadId ID for the thread 
     * @param {String} message Message being added to the thread
     */
    edit(studentNumber, threadId, message){
        let data = {
            threadId: threadId,
            message: message
        }

        let response = fetch(API_URL + PATH + studentNumber, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        console.log(response);
        // Return a success or failed message
    }

    /**
     * Get all threads for a student
     * @param {String} studentNumber Student number
     */
    async getAll(studentNumber){
        let response = fetch(API_URL + PATH + studentNumber, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);

        // Create a list of Thread objects before returning
        return response;
    }

    /**
     * Get a single thread
     * @param {String} studentNumber Student number
     * @param {String} threadId Get the id for the thread being checked
     * @returns 
     */
    async get(studentNumber, threadId){
        let response = fetch(API_URL + PATH + studentNumber + "/" + threadId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);

        // Create a Thread objects before returning
        return response;

    }
}