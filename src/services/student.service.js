import { Student } from "../models/models.js";

const PATH = "student/"

export class StudentService
{
    constructor(apiUrl){
        this.API_URL = apiUrl;
    }

    /**
     * Create a new student object in the database
     * @param {String} studentNumber THe student number
     * @param {String} name The students name
     */
    async create(studentNumber, name){
        let path = this.API_URL + PATH;

        const studentData = {
            studentNumber: studentNumber,
            name: name
        }

        let response = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(studentData)
        });

        console.log(response);
        // Return a success message or something
    }

    async studentExists(studentNumber){
        let path = this.API_URL + PATH + studentNumber;
        let response = await fetch(path, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        return response.status == 200;            
    }
}