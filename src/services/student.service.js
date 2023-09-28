import { Firebase } from "../dataAccess/fireabase.js";
import { Student } from "../models/models.js";

const PATH = "students/"

export class StudentService
{
    constructor(){
        this.firebase = new Firebase();
    }

    /**
     * Create a new student object in the database
     * @param {String} studentNumber THe student number
     * @param {String} name The students name
     */
    create(studentNumber, name){
        let student = new Student(studentNumber, name);
        this.firebase.upsert(PATH + studentNumber, student);
    }

    /**
     * Get a student object from the database
     * @param {String} studentNumber The student number
     * @returns Student Model
     */
    async get(studentNumber){
        let output = await this.firebase.get(PATH + studentNumber);

        if (output == undefined || output === null)
            return;

        let student = new Student(studentNumber);
        student.create(output);
        return student;
    }

    /**
     * Update a students details
     * @param {Student} student student details
     */
    update(student){
        this.firebase.upsert(PATH + student.stdNumber, student);
    }
}