import { Warning } from "../models/models.js";
import { Firebase } from "../dataAccess/fireabase.js";

const PATH = 'warnings/'

export class WarningService
{
    constructor(){
        this.firebase = new Firebase();
    }

    /**
     * Add a warning on an issue a stuend was warned about
     * @param {String} studentId Student number being checked
     * @param {String} criteria Criteria being warned on
     * @param {String} issue Message with the issue being addressed
     */
    add(studentId, criteria, issue){
        let path = `${PATH}${studentId}/${criteria}`;
        let warning = new Warning(issue);

        this.firebase.push(path, warning);
        this.#updateCriteriaWarning(studentId, criteria);
    }

    /**
     * Update the warning indicator to let reviewer know there are warnings
     * @param {String} studentId Student number
     * @param {String} criteria Criteria a student is being warned about
     */
    #updateCriteriaWarning(studentId, criteria){
        let path = `${PATH}${studentId}/scoring/${criteria}`;
        this.firebase.upsert(path, true);
    }

    /**
     * Edit a message for a warning 
     * @param {String} studentId Student ID
     * @param {String} warningId ID for warning
     * @param {String} criteria The issue being warned about
     * @param {String} issue New message
     */
    edit(studentId, warningId, criteria, issue){
        let path = `${PATH}${studentId}/${criteria}/${warningId}/issue`;   

        this.firebase.push(path, issue);
    }

    /**
     * Increment the number of strikes on a warning
     * @param {String} studentId StudentID
     * @param {String} warningId ID for the warning
     * @param {String} criteria Criteria being updated
     */
    incrementStrikes(studentId, warningId, criteria){
        let path = `${PATH}${studentId}/${criteria}/${warningId}/strike`;
        this.firebase.inc(path);

    }

}
