import { Warning } from "../models/models.js"

export class WarningView
{
    constructor(content_screen){
        this.contentElement = content_screen;        
    }

    loadPage(){
        this.contentElement.innerHTML = this.#getMainScreenTemplate();
        this.#loadScreenComponents();
    }

    #getMainScreenTemplate(){
        return `
            <div class="p-5 flex flex-col gap-2 h-[80vh] overflow-x-scroll" id="warningBoard">                
            </div>

            <div class="w-full h-[10vh] flex justify-center">
                <textarea name="" id="txtWarningInput" class="w-full h-full p-2 text-sm "></textarea>

                <button id="btnWarningMessage" class="bg-gray-500 p-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-white" width="16" height="16"
                        fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                </button>
            </div>
        `
    }

    #loadScreenComponents(){
        this.warningBoard = document.getElementById("warningBoard");
        this.addWarningButton = document.getElementById("btnWarningMessage");
        this.warningMessageInput = document.getElementById("txtWarningInput");
    }

    displayWarnings(warnings){
        if (warnings == undefined){
            this.warningBoard.innerHTML = this.#getNoMessageScreen();
            return;
        }
        
        let warningItems = warnings.map(warning => 
            this.#getWarningMessage(warning)).join("");

        this.warningBoard.innerHTML = warningItems;

        // Store references to each button
        this.strikeContainers = document.getElementsByClassName("btnAddStrike");
    }    

    /**
     * 
     * @param {Warning} warning 
     * @returns 
     */
    #getWarningMessage(warning){
        return `
            <div class="bg-gray-200 rounded-md px-5 shadow-md warningContainer">
                <h2 class="py-3 px-2">
                    ${warning.reviewer}
                </h2>
                <p class="px-2 text-sm">
                    ${warning.message}

                </p>

                <div class="flex justify-end gap-3 btnAddStrike" data-warningId="${warning.id}">
                    <p class="flex flex-col justify-center text-sm">
                        ${warning.strikes}
                    </p>
                    <button class="my-3 addStrike">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                        </svg>
                    </button>                        
                </div>

            </div>
        `
    }

    #getNoMessageScreen(){
        return `
        <div class="h-full w-full flex flex-col justify-center text-center">
            <h2>
                No Content
            </h2>
        </div>
        `
    }

}