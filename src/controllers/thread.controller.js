import { ThreadService } from "../services/thread.service.js";
import { ThreadView } from "../views/thread.view.js";
import { StudentService } from "../services/student.service.js";
import { AppDetails } from "../models/models.js";

export class ThreadController
{
    /**
     * Setup the variables required for the controller
     * @param {AppDetails} appDetails Data required for the controller
     */
    constructor(appDetails){
        this.appDetails = appDetails;
        this.threadService = new ThreadService(appDetails.apiUrl);
        this.studentService = new StudentService(appDetails.apiUrl);
        this.threadView = new ThreadView(appDetails.contentElement);        
    }    

    async loadPage(){        
        this.threadView.loadPage();
        await this.registerStudent(this.appDetails.studentNumber, this.appDetails.studentName);
        this.threadView.displayMessages(await this.#getMessages());
        this.setEventListeners();        
    }

    async #getMessages(){
        let messages = await this.threadService.getAll(this.appDetails.studentNumber);
        return messages;
    }

    async setEventListeners(){
        await this.#setSendMessageEventListener();
        await this.#setDeleteMessageEventListener();
    }

    async registerStudent(studentNumber, studentName)
    {
        const studentExists = await this.studentService.studentExists(studentNumber);
        if (!studentExists){
            await this.studentService.create(studentNumber, studentName)
        }
    }
    

    async #setSendMessageEventListener(){
        this.threadView.messageButton.addEventListener('click', async () => {
            let message = document.getElementById("txtThreadMessage");

            if (message.value.length < 20 || message.value.length > 250){
                alert("The input should be between 20 - 250 characters")
                return;
            }            
            
            let result = await this.threadService.create(this.appDetails.studentNumber, 
                                    this.appDetails.reviewerName, message.value);
            
            if (result.isSuccess){
                message.value = "";
                this.threadView.displayMessages(await this.#getMessages());
            } else {
                alert(`${result.message} creating the thread`)
            }
        })
    }

    async #setDeleteMessageEventListener(){
        for (let index = 0; index < this.threadView.threadMessagesContainer.length; index++){
            let container = this.threadView.threadMessagesContainer[index];
            let threadId = container.getAttribute('data-threadId');
            let deleteButton = container.getElementsByTagName('button')[0]
            let reviewer = container.getElementsByTagName('h2')[0].innerText;

            // Set up the delete button for post creator
            if (this.appDetails.reviewerName === reviewer.trim()){
                deleteButton.addEventListener('click', async () => {
                    let result = await this.threadService.delete(this.appDetails.studentNumber, threadId);
    
                    if (result){
                        this.threadView.displayMessages(await this.#getMessages());
                        this.#setDeleteMessageEventListener();
                    }
                    else{
                        alert('Error trying to delete message')
                    }
                })
            }
            else{
                deleteButton.hidden = true
            }
        }
    }

}