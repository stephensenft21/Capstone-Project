import HTMLBuilder from "./../HTMLBuilder"
//createNewUser is meant to be a factory function that is used by the post new user method.

const createNewUser = (userName,password) => {
    return {
        userName: userName,
        password: password,
        
    }
}

//function to see if the userName is valid 
const validateUserName = (userArray, searchBy) => {
  let isMatch = userArray.find(user => user.userName === searchBy)
   if(!isMatch) { // The (“!”) symbol, sometimes called a “bang,” is the logical “not” operator. Placed in front of a boolean "isMatch" value it will reverse the value, returning the opposite. Just like a conditional if statement, a bang (“!”) creates a boolean context.
      return false;
   } else {
       return true
   }



}
const loginHandler = { 
     // Function to handle user clicking login button. Function clears page and loads dashboard

login() {

const section = document.querySelector("#login-section")
const userName = document.querySelector("userNameInput")

}
}