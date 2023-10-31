export class Student
{
    constructor(stdNumber, name){     
        this.stdNumber = stdNumber;
        this.name = name;
        this.threads = []; // Stores thread Ids
        this.scoring = {
            efficiency: false,
            style: false,
            documentation: false
        };
    }

    create(object){
        this.name = object.name,
        this.threads = object.threads || [],
        this.scoring = object.scoring
    }
}

export class Thread
{
    constructor(studentNumber, reviewer, message){
        this.studentNumber = studentNumber;
        this.reviewer = reviewer;
        this.message = message;        
        this.createdAt = Date.now();
    }    

    create(object, id){
        this.id = id;
        this.reviewer = object.reviewer;
        this.message = object.message;
        this.createdAt = object.createdAt;
    }
}

export class Warning
{
    constructor(studentId, criteria, issue, reviewer){
        this.studentId = studentId;
        this.criteria = criteria;
        this.issue = issue;
        this.reviewer = reviewer;
    }

    create(object, id){        
        this.studentId = object.studentId;
        this.criteria = object.criteria;
        this.issue = object.issue;
        this.reviewer = object.reviewer;
        this.id = id;
    }
}