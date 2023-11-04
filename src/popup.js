import { WarningController } from "./controllers/warning.controller.js";
import { ThreadController } from "./controllers/thread.controller.js";

// Shared Variables 
var STUDENT_NUMBER = undefined;
var REVIEWER_NAME = undefined;
var STUDENT_NAME = undefined;

// UI components
const contentScreen = document.getElementById("contentScreen");
const btnThread = document.getElementById("btnThreads");
const btnEfficiency = document.getElementById("btnEfficiency");
const btnStyle = document.getElementById("btnStyle");
const btnDocumentation = document.getElementById("btnDocumentation");

chrome.storage.local.get('student', (result) => {
  let details = JSON.parse(result.student);

  if (details.source == 'content')
  {
    STUDENT_NUMBER = details.studentNumber;
    REVIEWER_NAME = details.reviewer;
    STUDENT_NAME = details.studentName

    btnThread.innerText = `${STUDENT_NAME}`
    SetupEventLisetners();
  }
  else{
    alert("Failed to load student details")
  }  
})

function SetupEventLisetners()
{
  btnThread.addEventListener('click', () => {    
    let threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
    threadController.loadPage(STUDENT_NUMBER, STUDENT_NAME);
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