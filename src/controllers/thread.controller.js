import { ThreadService } from "../services/thread.service.js";
import { ThreadView } from "../views/thread.view.js";

export class ThreadController
{
    constructor(student_number, reviewer_name, contentElement){
        this.student_number = student_number;
        this.reviewer_name = reviewer_name;
        this.threadService = new ThreadService();
        this.threadView = new ThreadView(contentElement);        
    }    

    async loadPage(){
        this.threadView.loadPage();
        this.threadView.displayMessages(await this.#getMessages());
        this.setEventListeners();
    }

    async setEventListeners(){
        await this.#setMessageButtonEventListener();
    }

    async #setMessageButtonEventListener(){
        this.threadView.messageButton.addEventListener('click', async () => {
            let message = document.getElementById("txtThreadMessage");

            if (message.value.length < 20 || message.value.length > 350){
                alert("Too long")
                return;
            }            
            
            this.threadService.create(this.student_number, this.reviewer_name, message.value);

            message.value = "";
            this.threadView.displayMessages(await this.#getMessages());
        })
    }

    async #getMessages(){
        let messages = await this.threadService.getAll(this.student_number);
        return messages;
    }
}