import { WarningController } from "./controllers/warning.controller.js";
import { ThreadController } from "./controllers/thread.controller.js";

// Shared Variables 
const STUDENT_NUMBER = "STU18027103";
const REVIEWER_NAME = "Jimmy"

// UI components
const contentScreen = document.getElementById("contentScreen");
const btnThread = document.getElementById("btnThreads");
const btnEfficiency = document.getElementById("btnEfficiency");
const btnStyle = document.getElementById("btnStyle");
const btnDocumentation = document.getElementById("btnDocumentation");

const testing = document.getElementById("testing")

console.log("Hello World");

// popup.js
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // Validate the message's structure.
    if ((msg.from === 'content')) {
      testing.innerText = msg.subject;
    }
  });

// btnThread.addEventListener('click', () => {    
//     let threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
//     threadController.loadPage();
// });

// btnEfficiency.addEventListener('click', () => {
//     let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "efficiency", contentScreen);
//     warningController.loadPage();
// });

// btnStyle.addEventListener('click', () => {
//     let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "style", contentScreen);
//     warningController.loadPage();

// });

// btnDocumentation.addEventListener('click', () => {
//     let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "documentation", contentScreen);
//     warningController.loadPage();
// });