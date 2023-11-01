import { WarningController } from "./controllers/warning.controller.js";
import { ThreadController } from "./controllers/thread.controller.js";

// Shared Variables 
var STUDENT_NUMBER = undefined;
var REVIEWER_NAME = undefined;
var STUDENT_NAME = undefined

// UI components
const contentScreen = document.getElementById("contentScreen");
const btnThread = document.getElementById("btnThreads");
const btnEfficiency = document.getElementById("btnEfficiency");
const btnStyle = document.getElementById("btnStyle");
const btnDocumentation = document.getElementById("btnDocumentation");

var setup = false;

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  console.log(setup)
  if ((msg.source === 'content' && setup === false)) {
    setup = true;   
    STUDENT_NUMBER = msg.studentNumber;
    REVIEWER_NAME = msg.reviewer;
    STUDENT_NAME = msg.studentName;
    btnThread.innerText = `${STUDENT_NAME} Dashboard`

    SetupEventLisetners();
  }
});

function SetupEventLisetners()
{
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