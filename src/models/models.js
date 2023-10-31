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

    create(object){
        this.id = object.id;
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

    create(object){                        
        this.message = object.message;
        this.reviewer = object.reviewer;
        this.strikes = object.strikes;
        this.id = object.id;
    }

    /*
        {
            studentId,
            criteria,
            issue/message,
            reviewer,
            id,
            strikes
        }
     */
}

export class Response
{
    constructor(message, isSuccess)
    {
        this.message = message;
        this.isSuccess = isSuccess
    }
}