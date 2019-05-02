import htmlBuilder from "../HTMLBuilder";
import loginHandler from "./loginHandler"

const loginForm = {
    buildLoginForm() {

        const loginFragment = document.createDocumentFragment()
        const outerLoginSection = htmlBuilder.createElementWithtext("div", "", "outerLoginSection")
        const welcomeHeader = htmlBuilder.createElementWithtext("h1", "Quick& Cheesy", "Header")
        welcomeHeader.classList.add("card-header"); //bootstrap styling
          
        const loginBody = outerLoginSection.appendChild(htmlBuilder.createElementWithtext("section"))
        loginBody.classList.add("card-body")

        const formElement = loginBody.appendChild(htmlBuilder.createElementWithtext("form"))
        const loginSection = loginBody.appendChild(htmlBuilder.createElementWithtext("section"))
        loginSection.classList.add("form-group")
        //creating userName label
        let userNameLabel = htmlBuilder.createElementWithtext("label", "UserName")
        // creating usernameInput
        let userNameInput = htmlBuilder.createElementWithtext("input", "userNameInput")
        userNameInput.classList.add("form-control")
        userNameInput.placeholder = "UserName"


        //Password label and Password Input
        let passwordLabel = htmlBuilder.createElementWithtext("label", "PassWord")
        let passwordInput = htmlBuilder.createElementWithtext("input", "PasswordInput")
        passwordInput.classList.add("form-control")
        passwordInput.placeholder = "Password"

        const loginButtonGroup = formElement.appendChild(htmlBuilder.createElementWithtext("div"))
        loginButtonGroup.classList.add("btn-group")
        //creating login button
        
        
        const loginButton = htmlBuilder.createElementWithtext("button", "Login", "loginButton")
        loginButton.className = "btn btn-primary"
        loginButton.type = "button"
        loginButton.textContent = "Login"

        //adding event listener to login user
        //loginButton.addEventlistener("click", loginHandler.login)


        //appending elements
        loginSection.appendChild(userNameLabel)
        loginSection.appendChild(userNameInput)
        formElement.appendChild(loginSection)
        loginSection.appendChild(passwordLabel)
        loginSection.appendChild(passwordInput)
        formElement.appendChild(loginButton)
        outerLoginSection.appendChild(welcomeHeader)
        outerLoginSection.appendChild(formElement)
        loginFragment.appendChild(outerLoginSection)
        document.querySelector("#nav-container").appendChild(loginFragment)






    }



}
export default loginForm