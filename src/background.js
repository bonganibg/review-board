import { WarningController } from "./controllers/warning.controller.js";
import { ThreadController } from "./controllers/thread.controller.js";

// Shared Variables 
const STUDENT_NUMBER = undefined;
const REVIEWER_NAME = undefined;
const STUDENT_NAME = undefined

// UI components
const contentScreen = document.getElementById("contentScreen");
const btnThread = document.getElementById("btnThreads");
const btnEfficiency = document.getElementById("btnEfficiency");
const btnStyle = document.getElementById("btnStyle");
const btnDocumentation = document.getElementById("btnDocumentation");

const setup = false;

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log(msg)
  if ((msg.source === 'content' && setup == false)) {
    STUDENT_NUMBER = msg.studentNumber;
    REVIEWER_NAME = msg.reviewer;
    STUDENT_NAME = msg.studentName;

    btnThread.textContent = STUDENT_NAME;
    setup = true;

    btnThread.addEventListener('click', () => {    
      let threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
      threadController.loadPage();
    });
    
    btnEfficiency.addEventListener('click', () => {
        let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "efficiency", contentScreen);
        warningController.loadPage();
    });
    
    btnStyle.addEventListener('click', () => {
        let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "style", contentScreen);
        warningController.loadPage();
    
    });
    
    btnDocumentation.addEventListener('click', () => {
        let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "documentation", contentScreen);
        warningController.loadPage();
    });

  }
});