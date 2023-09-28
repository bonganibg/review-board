import { Firebase } from "../dataAccess/fireabase.js";
import { Thread } from "../models/models.js";

const PATH = "students/"

export class ThreadService
{
    constructor(){
        this.fireabase = new Firebase();
    }

    /**
     * Create a new message thread for a student
     * @param {String} studentNumber Stuend number
     * @param {String} reviewer Reviewer creating the thread
     * @param {String} message The message to be added
     */
    create(studentNumber, reviewer, message){
        let thread = new Thread(reviewer, message);
        let path = `${PATH}${studentNumber}/threads/`

        this.fireabase.push(path, thread);
    }

    /**
     * Change the message on a thread
     * @param {String} studentNumber Student number
     * @param {String} threadId ID for the thread 
     * @param {String} message Message being added to the thread
     */
    edit(studentNumber, threadId, message){
        let path = `${PATH}${studentNumber}/threads/${threadId}/message`;
        this.fireabase.upsert(path, message);
    }

    /**
     * Get all threads for a student
     * @param {String} studentNumber Student number
     */
    async get(studentNumber){
        let path = `${PATH}${studentNumber}/threads`
        let output = await this.fireabase.get(path);

        console.log(output)
    }

    /**
     * Get a single thread
     * @param {String} studentNumber Student number
     * @param {String} threadId Get the id for the thread being checked
     * @returns 
     */
    async get(studentNumber, threadId){
        let path = `${PATH}${studentNumber}/threads/${threadId}`;
        let output = await this.fireabase.get(path);

        if (output == undefined || output === null)
            return;

        let thread = new Thread();
        thread.create(output);
        return thread;
    }
}