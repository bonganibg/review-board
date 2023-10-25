import { Warning } from "../models/models.js";

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
    add(studentId, criteria, issue, reviewer){
        let path = `${PATH}${studentId}/${criteria}`;
        let warning = new Warning(issue, reviewer);

        this.firebase.push(path, warning);
        this.#updateCriteriaWarning(studentId, criteria);
    }

    /**
     * Update the warning indicator to let reviewer know there are warnings
     * @param {String} studentId Student number
     * @param {String} criteria Criteria a student is being warned about
     */
    #updateCriteriaWarning(studentId, criteria){
        let path = `students/${studentId}/scoring/${criteria}`;
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
     * Get all of the warnings for a certain criteria
     * @param {String} studentId Student ID
     * @param {String} criteria Area being warned on
     * @returns List of past warning messages
     */
    async get(studentId, criteria){
        let path = `${PATH}${studentId}/${criteria}`;

        let output = await this.firebase.get(path);

        if (output == undefined || output == null){
            return;
        }

        let warnings = [];

        Object.keys(output).forEach((key) => {
            let warning = new Warning();
            warning.create(output[key], key);

            warnings.push(warning);
        })

        return warnings;
    }

    /**
     * Increment the number of strikes on a warning
     * @param {String} studentId StudentID
     * @param {String} warningId ID for the warning
     * @param {String} criteria Criteria being updated
     */
    incrementStrikes(studentId, warningId, criteria){
        let path = `${PATH}${studentId}/${criteria}/${warningId}/strikes`;
        this.firebase.inc(path);

    }

}
