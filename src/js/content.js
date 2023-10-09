import { ThreadTemplates } from "./pageTemplates.js";
import { ThreadService } from "../services/thread.service.js";
import { ThreadView } from "../views/thread.view.js";
import { ThreadController } from "../controllers/thread.controller.js";
import { WarningController } from "../controllers/warning.controller.js";
import { WarningService } from "../services/warning.service.js";


// Shared Variables 
const STUDENT_NUMBER = "STU18027103";
const REVIEWER_NAME = "Jimmy"

// UI components
let contentScreen = document.getElementById("contentScreen")

// Services 
// const threadController = new ThreadController(STUDENT_NUMBER, REVIEWER_NAME, contentScreen);
// threadController.loadPage();
const warningController = new WarningController(STUDENT_NUMBER, REVIEWER_NAME, "style", contentScreen);
warningController.loadPage();

