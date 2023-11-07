import { Warning } from "../models/models.js"
import { WarningTemplate } from "./templates/warning,template.js";
import { SharedTemplate } from './templates/shared.template.js'

export class WarningView
{
    constructor(content_screen){
        this.warningTemplate = new WarningTemplate();
        this.sharedTemplate = new SharedTemplate();
        this.contentElement = content_screen;        
    }

    loadPage(){
        this.contentElement.innerHTML = this.warningTemplate.getMainScreenTemplate();
        this.#loadScreenComponents();
        this.warningBoard.innerHTML = this.sharedTemplate.getLoadingAnimiation();

    }

    #loadScreenComponents(){
        this.warningBoard = document.getElementById("warningBoard");
        this.addWarningButton = document.getElementById("btnWarningMessage");
        this.warningMessageInput = document.getElementById("txtWarningInput");
    }

    displayWarnings(warnings){
        if (warnings == undefined){
            this.warningBoard.innerHTML = this.warningTemplate.getNoMessageScreen();
            return;
        }
        
        let warningItems = warnings.map(warning => 
            this.warningTemplate.getWarningMessage(warning)).join("");

        this.warningBoard.innerHTML = warningItems;

        // Store references to each button
        this.strikeContainers = document.getElementsByClassName("warningContainer");
    }    
}