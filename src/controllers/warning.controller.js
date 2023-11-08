import { AppDetails } from "../models/models.js";
import { WarningService } from "../services/warning.service.js";
import { WarningView } from "../views/warning.view.js";


export class WarningController {

    /**
     * Set up the variables required for the controller
     * @param {AppDetails} appDetails data required for the controller
     */
    constructor(appDetails) {
        this.appDetails = appDetails;
        this.warningService = new WarningService(appDetails.apiUrl);
        this.warningView = new WarningView(appDetails.contentElement);
    }

    async loadPage() {
        this.warningView.loadPage();
        this.warningView.displayWarnings(await this.#getWarnings())
        this.setEventListeners();
    }

    async setEventListeners() {
        this.#setWarningButtonEventListener();
        this.#setIncreaseStrikeListerner();
    }

    #setWarningButtonEventListener() {
        this.warningView.addWarningButton.addEventListener('click', async () => {
            let warning = this.warningView.warningMessageInput.value

            if (warning.length < 20 || warning.length > 250) {
                alert("The input should be between 20 - 250 characters")
                return;
            }

            let result = await this.warningService.add(this.appDetails.studentNumber, this.appDetails.criteria, warning, this.appDetails.reviewerName);

            if (result.isSuccess) {
                this.warningView.warningMessageInput.value = "";
                this.warningView.displayWarnings(await this.#getWarnings());
            } else {
                alert(`${result.message} while trying to create warning`);
            }
        })
    }

    async #setIncreaseStrikeListerner() {        
        for (let index = 0; index < this.warningView.warningMessagesContainer.length; index++) {
            let container = this.warningView.warningMessagesContainer[index];
            let warningId = container.getAttribute('data-warningId');           
            let strikeButton = container.getElementsByTagName("a")[0];
            let strikes = container.getElementsByTagName("p")[1];     
            let deleteButton = container.getElementsByTagName('button')[0]; 
            let reviewer = container.getElementsByTagName('h2')[0].innerText;
            
            // Button on click listener
            strikeButton.addEventListener('click', async () => {
                let isUpdated = await this.warningService.incrementStrikes(this.appDetails.studentNumber, warningId, this.appDetails.criteria)

                if (isUpdated) {
                    strikes.innerText = parseInt(strikes.innerText) + 1;
                }
            });

            // Delete button 
            if (reviewer === this.appDetails.reviewerName){
                deleteButton.addEventListener('click', async () => {
                    let wasDeleted = await this.warningService.delete(this.appDetails.studentNumber, warningId, this.appDetails.criteria);
    
                    if (wasDeleted){
                        this.warningView.displayWarnings(await this.#getWarnings());
                        this.#setIncreaseStrikeListerner();
                    }
                    else{
                        alert('Error trying to delete message')
                    }
                });
            }
            else{
                deleteButton.hidden = true;
            }
        }
    }

    async #getWarnings() {
        let warnings = await this.warningService.get(this.appDetails.studentNumber, this.appDetails.criteria);        
        return warnings;
    }

}