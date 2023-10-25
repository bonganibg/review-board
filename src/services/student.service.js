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

        let response = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                studentNumber: studentNumber,
                name: name
            }
        });

        console.log(response);
    }

    // /**
    //  * Get a student object from the database
    //  * @param {String} studentNumber The student number
    //  * @returns Student Model
    //  */
    // async get(studentNumber){
    //     let output = await this.firebase.get(PATH + studentNumber);

    //     if (output == undefined || output === null)
    //         return;

    //     let student = new Student(studentNumber);
    //     student.create(output);
    //     return student;
    // }

    // /**
    //  * Update a students details
    //  * @param {Student} student student details
    //  */
    // update(student){
    //     this.firebase.upsert(PATH + student.stdNumber, student);
    // }
}