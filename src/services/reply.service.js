import { Reply } from "../models/models.js";

const PATH = 'replies/'

export class ReplyService
{
    constructor(){
        this.firebase = new Firebase();
    }

    /**
     * Add a reply to a thread
     * @param {String} threadId ID for thread being replied to
     * @param {String} reviewer Reviewer name
     * @param {String} message Message being left
     */
    makeReply(threadId, reviewer, message)
    {
        let path = PATH + threadId;
        let reply = new Reply(reviewer, message);

        this.firebase.push(path, reply);
    }

    /**
     * Get the replies for a single thread
     * @param {String} threadId ID for a thread
     * @returns 
     */
    async get(threadId)
    {
        let path = PATH + threadId;
        let output = await this.firebase.get(path);


        if (output == undefined || output == null){
            return;
        }

        let replies = [];

        Object.keys(output).forEach((key) => {
            let reply = new Reply()
            reply.create(output[key], key)
            replies.push(reply);
        })

        return replies;
    }

    /**
     * Edit a reply message
     * @param {String} threadId ID for the thread
     * @param {String} replyId ID for the reply
     * @param {String} message New message
     */
    edit(threadId, replyId, message){
        let path = `${PATH}${threadId}/${replyId}/message`;
        this.firebase.upsert(path, message);
    }
}