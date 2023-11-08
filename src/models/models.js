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
}

export class Response
{
    constructor(message, isSuccess)
    {
        this.message = message;
        this.isSuccess = isSuccess
    }
}

export class AppDetails
{
    /**
     * 
     * @param {string} studentNumber current students student number
     * @param {string} studentName current students name
     * @param {string} reviewerName current reviewers name
     * @param {string} contentElement element where ouput will be displayed
     * @param {string} apiUrl url to the api
     * @param {string} criteria criteria being updated (for warnings only)
     */
    constructor(studentNumber, studentName,  reviewerName, contentElement, apiUrl, criteria = undefined)
    {
        this.studentNumber = studentNumber;
        this.reviewerName = reviewerName;
        this.criteria = criteria;
        this.contentElement = contentElement;       
        this.apiUrl = apiUrl;
        this.studentName = studentName;
    }
}