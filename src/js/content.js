// import { WarningController } from "../controllers/warning.controller.js";
// import { ThreadController } from "../controllers/thread.controller.js";

// // Shared Variables 
// const STUDENT_NUMBER = "STU18027103";
// const REVIEWER_NAME = "Jimmy"

// // UI components
// const contentScreen = document.getElementById("contentScreen");
// const btnThread = document.getElementById("btnThreads");
// const btnEfficiency = document.getElementById("btnEfficiency");
// const btnStyle = document.getElementById("btnStyle");
// const btnDocumentation = document.getElementById("btnDocumentation");

// Services 
// const threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
// threadController.loadPage();
// const warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "style", contentScreen);
// warningController.loadPage();

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

import { StudentService } from "../services/student.service.js";

let studentService = new StudentService();
studentService.create("STU987654321", "Testing Jackson")