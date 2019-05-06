import htmlBuilder from "./HTMLBuilder"
import loginForm from "./loginScripts/loginForm"




const container = document.querySelector("#nav-container")


// A function to build my NavBar

const buildNavBar = {

    buildList() {
        //navBar made out of  4 anchor tags with a div wrapper       
        const navWrapper = htmlBuilder.createElementWithText("div", undefined,undefined,"nav-wrapper")
        
        const navDiv = htmlBuilder.createElementWithText("div",undefined, "topNav")

        const searchAnchor = htmlBuilder.createAnchorElement("Search", "search-button", "searchBtn")
        searchAnchor.classList.add("card-text")
        searchAnchor.addEventListener("click", )
        const myRecipeAnchor = htmlBuilder.createAnchorElement("My Recipes", "My-Recipes", "myRecipeBtn")
        myRecipeAnchor.classList.add("card-text")
        myRecipeAnchor.addEventListener("click",)
        const createRecipeButton = htmlBuilder.createAnchorElement("New Recipe", "New-Recipe", "newRecipeBtn")
        createRecipeButton.classList.add("card-text")
        createRecipeButton.addEventListener("card-text")
        const logOutButton = htmlBuilder.createAnchorElement("Logout", "Log-out", "logoutBtn")
        logOutButton.classList.add("card-text")
        logOutButton.addEventListener("click",)
        const welcomeHeader = htmlBuilder.createElementWithText("h1", "Quick& Cheesy", "Header")
         welcomeHeader.classList.add("card-header","app-title"); //bootstrap styling
        
        
        
        
        // navWrapper.appendChild(welcomeHeader)
        navDiv.appendChild(searchAnchor)
        navDiv.appendChild(myRecipeAnchor)
        navDiv.appendChild(createRecipeButton)
        navDiv.appendChild(logOutButton)
        container.appendChild(welcomeHeader)
        container.appendChild(navDiv)
    }





}


























export default buildNavBar