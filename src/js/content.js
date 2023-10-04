import { ThreadTemplates } from "./pageTemplates.js";
import { ThreadService } from "../services/thread.service.js";

// Shared Variables 
const STUDENT_NUMBER = "STU123456789";
const REVIEWER_NAME = "Jimmy"

// Services 
const threadTemplate = new ThreadTemplates();
const threadService = new ThreadService();

// UI components
let threadList = document.getElementById("threadBoard");
const messageButton = document.getElementById("sendMessage");

// Setup event listeners
messageButton.addEventListener("click", () => {
    let message = document.getElementById("message");
    
    if (message.value.length < 20 || message.value.length > 3000){
        return;
    }
    
    threadService.create(STUDENT_NUMBER, REVIEWER_NAME, message.value);

    // Clear output
    message.value = ""
    loadMessages();
});

async function main(){
    loadMessages();
}

async function loadMessages(){
    let messages = await threadService.getAll(STUDENT_NUMBER);

    let messageItems = messages.map(message => 
        threadTemplate.message(message.reviewer, message.message, message.id)).join("");

    threadList.innerHTML = messageItems;
}

// main();