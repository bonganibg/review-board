import { Warning } from "../models/models.js";

const PATH = 'warning/'
const API_URL = "http://localhost:8080/"

export class WarningService
{
    constructor(){}

    /**
     * Add a warning on an issue a stuend was warned about
     * @param {String} studentId Student number being checked
     * @param {String} criteria Criteria being warned on
     * @param {String} issue Message with the issue being addressed
     */
    async add(studentId, criteria, issue, reviewer){
        let warningData = new Warning(studentId, criteria, issue, reviewer);

        let response = await (await fetch(API_URL + PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(warningData)
        })).json();

        console.log(response);
    }

    /**
     * Edit a message for a warning 
     * @param {String} studentId Student ID
     * @param {String} warningId ID for warning
     * @param {String} criteria The issue being warned about
     * @param {String} issue New message
     */
    async edit(studentId, warningId, criteria, issue){
        let warning = {
            criteria: criteria,
            issue: issue,
            warningId: warningId
        };

        let response = await (await fetch(API_URL + PATH + studentId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(warning)
        })).json();

        console.log(response);
    }

    /**
     * Get all of the warnings for a certain criteria
     * @param {String} studentId Student ID
     * @param {String} criteria Area being warned on
     * @returns List of past warning messages
     */
    async get(studentId, criteria){
        let response = await (await fetch(`${API_URL}${PATH}${studentId}?criteria=${criteria}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        console.log(response)

        // Turn this into an object
        return response.warnings;
    }

    /**
     * Increment the number of strikes on a warning
     * @param {String} studentId StudentID
     * @param {String} warningId ID for the warning
     * @param {String} criteria Criteria being updated
     */
    async incrementStrikes(studentId, warningId, criteria){
        let response = await (await fetch(`${API_URL}${PATH}${studentId}/${warningId}?criteria=${criteria}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        console.log(response)
    }

}
