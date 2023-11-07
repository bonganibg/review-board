import { ThreadService } from "../services/thread.service.js";
import { ThreadView } from "../views/thread.view.js";
import { StudentService } from "../services/student.service.js";

export class ThreadController
{
    constructor(student_number, reviewer_name, contentElement){
        this.student_number = student_number;
        this.reviewer_name = reviewer_name;
        this.threadService = new ThreadService();
        this.studentService = new StudentService();
        this.threadView = new ThreadView(contentElement);        
    }    

    async loadPage(stdNumber, stdName){        
        this.threadView.loadPage();
        await this.registerStudent(stdNumber, stdName);
        this.threadView.displayMessages(await this.#getMessages());
        this.setEventListeners();        
    }

    async #getMessages(){
        let messages = await this.threadService.getAll(this.student_number);
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
            
            let result = await this.threadService.create(this.student_number, 
                                    this.reviewer_name, message.value);
            
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

            deleteButton.addEventListener('click', async () => {
                let result = await this.threadService.delete(this.student_number, threadId);

                if (result){
                    this.threadView.displayMessages(await this.#getMessages());
                    this.#setDeleteMessageEventListener();
                }
                else{
                    alert('Error trying to delete message')
                }
            })
        }
    }

}