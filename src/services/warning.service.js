import { Warning, Response } from "../models/models.js";

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
        // Create request body
        let warningData = new Warning(studentId, criteria, issue, reviewer);

        // Perform Request
        let response = await fetch(API_URL + PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(warningData)
        })

        // Check if request was successfull
        if (response.status < 300)
            return new Response("Successfully Created", true);

        // Check application sent bad data
        if (response.status < 500)
            return new Response("Application Error", false);

        // Check if server had an error
        return new Response("Server Error", false);
    }

    /**
     * Edit a message for a warning 
     * @param {String} studentId Student ID
     * @param {String} warningId ID for warning
     * @param {String} criteria The issue being warned about
     * @param {String} issue New message
     */
    async edit(studentId, warningId, criteria, issue){
        // Create request body
        let warning = {
            criteria: criteria,
            issue: issue,
            warningId: warningId
        };

        // Perform request
        let response = await fetch(API_URL + PATH + studentId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(warning)
        })

        if (response.status < 300)
            return new Response("Success", true);

        // Check application sent bad data
        if (response.status < 500)
            return new Response("Application Error", false);

        // Check if server had an error
        return new Response("Server Error", false);
    }

    /**
     * Get all of the warnings for a certain criteria
     * @param {String} studentId Student ID
     * @param {String} criteria Area being warned on
     * @returns List of past warning messages
     */
    async get(studentId, criteria){
        // Request
        let response = await fetch(`${API_URL}${PATH}${studentId}?criteria=${criteria}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // Check successful and create list of Warnings
        if (response.status < 300){
            let data = await response.json();   
            let warnings = []

            data.warnings.forEach(warningItem => {
                let warning = new Warning(studentId, criteria, "", "");
                warning.create(warningItem);

                warnings.push(warning);               
            });

            return warnings;
        }

        // It failed
        return undefined;
    }

    /**
     * Increment the number of strikes on a warning
     * @param {String} studentId StudentID
     * @param {String} warningId ID for the warning
     * @param {String} criteria Criteria being updated
     */
    async incrementStrikes(studentId, warningId, criteria){
        console.log(studentId, warningId, criteria);
        let response = await fetch(`${API_URL}${PATH}strike/${studentId}/${warningId}?criteria=${criteria}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200){
            return true;
        }        

        return false;
    }

    /**
     * Delete a warning message
     * @param {string} studentId Students number
     * @param {string} warningId Id for the warning message
     * @param {string} criteria The criteria the warning is for
     * @returns True if the operation was successful
     */
    async delete(studentId, warningId, criteria){
        let data = {
            criteria: criteria,
            warningId: warningId
        }

        let response = await fetch(`${API_URL}${PATH}/${studentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 200){
            return true
        }

        return false;
    }
}
