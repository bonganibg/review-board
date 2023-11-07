import { WarningController } from "./controllers/warning.controller.js";
import { ThreadController } from "./controllers/thread.controller.js";

// Shared Variables 
var STUDENT_NUMBER = undefined;
var REVIEWER_NAME = undefined;
var STUDENT_NAME = undefined;

// UI components
const contentScreen = document.getElementById("contentScreen");
const navButtons = document.getElementById("nav-bar").getElementsByTagName('button');


// Get the student details from chrome storage
chrome.storage.local.get('student', (result) => {
  let details = JSON.parse(result.student);

  if (details.source == 'content')
  {
    STUDENT_NUMBER = details.studentNumber;
    REVIEWER_NAME = details.reviewer;
    STUDENT_NAME = details.studentName

    navButtons[0].innerText = `${STUDENT_NAME}`
    SetupEventLisetners();
  }
  else{
    alert("Failed to load student details")
  }  
})

/**
 * Set the event listeners for the main page
 */
function SetupEventLisetners()
{
  loadDefaultPage();

  // Thread Button
  navButtons[0].addEventListener('click', () => {    
    let threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
    threadController.loadPage(STUDENT_NUMBER, STUDENT_NAME);
    setActivePage(0)
  });
  
  // Efficiency button
  loadWarningButtonEventListerner(1, "efficiency");
  
  // Style Button
  loadWarningButtonEventListerner(2, "style");
  
  // Documentation Button
  loadWarningButtonEventListerner(3, "documentation");
}

function loadDefaultPage(){
  let threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
  threadController.loadPage(STUDENT_NUMBER, STUDENT_NAME);
  setActivePage(0);
}

/**
 * Load the event listener for a warning page
 * @param {number} index Index of the page button
 * @param {string} pageName name of the warning page
 */
function loadWarningButtonEventListerner(index, pageName){
  navButtons[index].addEventListener('click', () => {
      let warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, pageName, contentScreen);
      warningController.loadPage();
      setActivePage(index);
    });
}

/**
 * Change the color for the buttons to show the current page
 * @param {number} currentPage Current page being showns button ID
 */
function setActivePage(currentPage){
  for (let index = 0; index < navButtons.length; index++) {
    navButtons[index].style.background =  currentPage != index ? "#212529" : "#343A40";
  }
}

