import { ThreadTemplate } from "./templates/thread.template.js";
import { SharedTemplate } from "./templates/shared.template.js"

export class ThreadView
{
    constructor(content_screen){
        this.threadTemplate = new ThreadTemplate();
        this.sharedTemplate = new SharedTemplate();
        this.contentElement = content_screen;
    }

    loadPage(){
        this.contentElement.innerHTML = this.threadTemplate.mainScreenTemplate()
        this.#loadMainScreenComponents();        
        this.threadList.innerHTML = this.sharedTemplate.getLoadingAnimiation();
    }    

    #loadMainScreenComponents(){
        this.threadList = document.getElementById("threadBoard");
        this.messageButton = document.getElementById("btnThreadMessage");
    }

    displayMessages(messages){
        if (messages == undefined){
            this.threadList.innerHTML = this.threadTemplate.getNoContentScreen();
            return;
        }


        let messageItems = messages.map(message => 
            this.threadTemplate.messageTemplate(message.reviewer, message.message, message.id)).join("");

        this.threadList.innerHTML = messageItems;
    }
}