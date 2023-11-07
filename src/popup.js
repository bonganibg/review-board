import { WarningController } from "./controllers/warning.controller.js";
import { ThreadController } from "./controllers/thread.controller.js";

// Shared Variables 
var STUDENT_NUMBER = "STU18027103";
var REVIEWER_NAME = "bonganig";
var STUDENT_NAME = "Jack";

// UI components
const contentScreen = document.getElementById("contentScreen");
const btnThread = document.getElementById("btnThreads");
const btnEfficiency = document.getElementById("btnEfficiency");
const btnStyle = document.getElementById("btnStyle");
const btnDocumentation = document.getElementById("btnDocumentation");

const navButtons = document.getElementById("nav-bar").getElementsByTagName('button');

// chrome.storage.local.get('student', (result) => {
//   let details = JSON.parse(result.student);

//   if (details.source == 'content')
//   {
//     STUDENT_NUMBER = details.studentNumber;
//     REVIEWER_NAME = details.reviewer;
//     STUDENT_NAME = details.studentName

//     btnThread.innerText = `${STUDENT_NAME}`
//     SetupEventLisetners();
//   }
//   else{
//     alert("Failed to load student details")
//   }  
// })

SetupEventLisetners()

function SetupEventLisetners()
{
  loadDefaultPage();

  // Thread Button
  navButtons[0].addEventListener('click', () => {    
    let threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
    threadController.loadPage(STUDENT_NUMBER, STUDENT_NAME);
  });
  
  // Efficiency button
  navButtons[1].addEventListener('click', () => {
      let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "efficiency", contentScreen);
      warningController.loadPage();
      setActivePage(1);
  });
  
  // Style Button
  navButtons[2].addEventListener('click', () => {
      let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "style", contentScreen);
      warningController.loadPage();
      setActivePage(2);
  
  });
  
  // Documentation Button
  navButtons[3].addEventListener('click', () => {
      let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "documentation", contentScreen);
      warningController.loadPage();
      setActivePage(3);
  });
}''

function loadDefaultPage(){
  let threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
  threadController.loadPage(STUDENT_NUMBER, STUDENT_NAME);
  setActivePage(0);
}

function setActivePage(currentPage){
  for (let index = 0; index < navButtons.length; index++) {
    navButtons[index].style.background =  currentPage != index ? "#212529" : "#343A40";
  }
}