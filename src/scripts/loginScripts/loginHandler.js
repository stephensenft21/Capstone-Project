import HTMLBuilder from "./../HTMLBuilder"
import loginAPI from "./loginAPI"
import htmlBuilder from "./../HTMLBuilder";
import load from "./loadPage"
//createNewUser is meant to be a factory function that is used by the post new user method.



//function to see if the userName is valid 
const validateUserName = (userArray, searchBy) => {
    let isMatch = userArray.find(user => user.userName === searchBy)
    if (isMatch !== undefined) { // The (“!”) symbol, sometimes called a “bang,” is the logical “not” operator. Placed in front of a boolean "isMatch" value it will reverse the value, returning the opposite. Just like a conditional if statement, a bang (“!”) creates a boolean context.
        sessionStorage.setItem("userId", isMatch.id)
        return true;
    } else {
        return false
    }
}

const loginHandler = {
    // Function to handle user clicking login button. Function clears page and loads dashboard
    login() {
    
        const section = document.querySelector("#login-section")
        const userName = document.getElementById("username--input").value
        const password = document.getElementById("password--input").value
        // let isMatch = validateUserName(username, password)
console.log(userName,password)
        loginAPI.getUser().then(users => {
            users.forEach(user => {

                if (userName === "" || password === "") {
                    alert("An input field is empty")
        
                } else if (userName === "" && password === "") {
                    alert("Both inputs are empty");
        
                } else if (userName.toLowerCase() === user.userName.toLowerCase() && password.toLowerCase() === user.password.toLowerCase()) {
                    sessionStorage.setItem("userId",user.id);
                    sessionStorage.setItem("userName", userName)
                    htmlBuilder.clearContainer(section)
                    console.log(sessionStorage.getItem("userId"))
                    // go to load page here
                    load.load()
                }else{
                    // alert(user is not in the database)
                }
            })
        });

    }
}






export default loginHandler