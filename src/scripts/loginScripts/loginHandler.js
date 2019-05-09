import HTMLBuilder from "./../HTMLBuilder"
import loginAPI from "./loginAPI"
import htmlBuilder from "./../HTMLBuilder";
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
        console.log(login)
        const section = document.querySelector("#login-section")
        const userName = document.getElementById("userNameInput").value
        const password = document.getElementById("passwordInput").value
        let isMatch = validateUserName(username, password)


        if (userName === "" || password === "") {
            alert("An input field is empty")


        } else if (userName === "" && password === "") {
            alert("Both inputs are empty");

        } else {
            loginAPI.getUser().then(users => {
                users.forEach(user => {
                    if (username === user.username.LowerCase() && password === user.password) {
                        sessionStorage.setItem("userId",user.id);
                        sessionStorage.setItem("userName", userName)
                         htmlBuilder.clearContainer(section)
                         
                    }

                });

            });
        }
    }
}






export default loginHandler