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
    constructor(reviewer, message){
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

export class Reply
{
    constructor(reviewer, message){        
        this.reviewer = reviewer;
        this.message = message;
        this.createdAt = Date.now();
    }

    create(object, id){ 
        this.id = id
        this.reviewer = object.reviewer;
        this.message = object.message;
        this.createdAt = object.createdAt;
    }
}

export class Warning
{
    constructor(message){        
        this.strikes = 0;
        this.message = message;
    }

    create(object){        
        this.strikes = object.strikes;
        this.message = object.message;
    }
}