import { WarningService } from "../services/warning.service.js";
import { WarningView } from "../views/warning.view.js";


export class WarningController
{
    constructor(student_number, reviewer_name, criteria, contentElement){
        this.student_number = student_number;
        this.reviewer_name = reviewer_name;
        this.criteria = criteria;
        this.warningService = new WarningService();
        this.warningView = new WarningView(contentElement);
    }

    async loadPage(){
        this.warningView.loadPage();
        this.warningView.displayWarnings(await this.#getWarnings())
        this.setEventListeners();
    }

    async setEventListeners(){
        this.#setWarningButtonEventListener();
        this.#setIncreaseStrikeListerner();
    }

    #setWarningButtonEventListener(){
        this.warningView.addWarningButton.addEventListener('click', async () => {
            let warning = this.warningView.warningMessageInput.value

            if (warning.length < 20 || warning.length > 250){
                alert("The input should be between 20 - 250 characters")
                return;
            }

            this.warningService.add(this.student_number, this.criteria, warning, this.reviewer_name);

            this.warningView.warningMessageInput.value = "";
            this.warningView.displayWarnings(await this.#getWarnings()); 
        })
    }

    async #setIncreaseStrikeListerner(){
        for (let index = 0; index < this.warningView.strikeContainers.length; index++) {
            let container = this.warningView.strikeContainers[index];
            let warningId = container.getAttribute('data-warningId');
            let button = container.getElementsByTagName("button")[0];            
            let strikes = container.getElementsByTagName("p")[0];

            // Button on click listener
            button.addEventListener('click', async () =>{
                let isUpdated = await this.warningService.incrementStrikes(this.student_number, warningId, this.criteria)
                
                if (isUpdated){
                    strikes.innerText = parseInt(strikes.innerText) + 1;
                }
            })
        }
    }

    async #getWarnings(){
        let warnings = await this.warningService.get(this.student_number, this.criteria);
        return warnings;
    }

}