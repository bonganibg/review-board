import { WarningController } from "./controllers/warning.controller.js";
import { ThreadController } from "./controllers/thread.controller.js";
import { AppDetails } from "./models/models.js";

// UI components
const CONTENT_SCREEN = document.getElementById("contentScreen");
const NAV_BUTTONS = document.getElementById("nav-bar").getElementsByTagName('button');
const API_URL = "https://hyperreviewerboard.onrender.com/";
const API_KEY = ""

// App data
const appDetails = new AppDetails("", "", "",  CONTENT_SCREEN, API_URL);


// Get the student details from chrome storage
chrome.storage.local.get('student', (result) => {
  let details = JSON.parse(result.student);

  if (details.source == 'content')
  {    
    appDetails.studentNumber = details.studentNumber;
    appDetails.reviewer = details.reviewer;
    appDetails.studentName = details.studentName;

    NAV_BUTTONS[0].innerText = `${appDetails.studentName}`
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
  NAV_BUTTONS[0].addEventListener('click', () => {    
    loadDefaultPage();
  });
    
  loadWarningButtonEventListerner(1, "efficiency");
  loadWarningButtonEventListerner(2, "style");
  loadWarningButtonEventListerner(3, "documentation");
}

function loadDefaultPage(){
  let threadController = new ThreadController(appDetails);
  threadController.loadPage();
  setActivePage(0);
}

/**
 * Load the event listener for a warning page
 * @param {number} index Index of the page button
 * @param {string} pageName name of the warning page
 */
function loadWarningButtonEventListerner(index, pageName){
  NAV_BUTTONS[index].addEventListener('click', () => {
      appDetails.criteria = pageName;      
      let warningController = new WarningController(appDetails);
      warningController.loadPage();
      setActivePage(index);
    });
}

/**
 * Change the color for the buttons to show the current page
 * @param {number} currentPage Current page being showns button ID
 */
function setActivePage(currentPage){
  for (let index = 0; index < NAV_BUTTONS.length; index++) {
    NAV_BUTTONS[index].style.background =  currentPage != index ? "#212529" : "#343A40";
  }
}

