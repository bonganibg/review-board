import { Student } from "../models/models.js";

const PATH = "student/"
const API_URL = "http://localhost:8080/"

export class StudentService
{
    constructor(){}

    /**
     * Create a new student object in the database
     * @param {String} studentNumber THe student number
     * @param {String} name The students name
     */
    async create(studentNumber, name){
        let path = API_URL + PATH;

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

    /**
     * Get a student object from the database
     * @param {String} studentNumber The student number
     * @returns Student Model
     */
    async get(studentNumber){
        let response = await fetch(API_URL + PATH + studentNumber, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }            
        });
        let output = await response.json();        

        // Conver to student object before returning
        return output;
    }

    /**
     * Update a students details
     * @param {Student} student student details
     */
    async update(student){

        let response = await fetch(API_URL + PATH, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        });
        
        console.log(response);
        // Return a success message or something
    }
}