import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set, get, push, increment } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";   

const firebaseConfig = {
    apiKey: "AIzaSyBtxxw9Rlo-ko-91wgxQrFG9CxXyxP7ckI",
    authDomain: "review-board-test.firebaseapp.com",
    projectId: "review-board-test",
    storageBucket: "review-board-test.appspot.com",
    messagingSenderId: "151415823235",
    appId: "1:151415823235:web:2293c69645474252feb4b6"
};

const app = initializeApp(firebaseConfig);
  
const db = getDatabase(app);    

export class Firebase
{
    constructor(){}

    /**
     * Update or create a new database object
     * @param {String} path Path to database object
     * @param {String} data The object being added
     */
    upsert(path, data){
        set(ref(db, path), data);
    }

    /**
     * Adds an object to a list of objects
     * @param {String} path Path to the database object
     * @param {*} data The object being added
     */
    push(path, data){
        push(ref(db, path), data);
    }

    /**
     * Get the database object
     * @param {String} path Path to database object
     * @returns 
     */
    async get(path){
        let output;

        await get(ref(db, path)).then((result) => {
            output = result.val();
        }).catch((error) => {
            console.log("something went wrong")
        })

        return output;
    }

    /**
     * Increment the value of a field
     * @param {String} path The path to the database field
     */
    inc(path){
        set(ref(db, path), increment(1)); 
    }
}