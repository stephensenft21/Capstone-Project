import htmlBuilder from "./HTMLBuilder"
import loginForm from "./loginScripts/loginForm"
import recipeBuilder from "./createRecipeScripts/recipes"
import recipeForm from "./createRecipeScripts/recipeForm"
import clearSection from "./clearSections"
import searchObject from "./search"
// const login = document.querySelector("#")
const container = document.querySelector("#nav-container")
const recipeContainer = document.querySelector("#recipe-container")

// A function to build my NavBar

const buildNavBar = {

    buildList() {
        //navBar made out of  4 anchor tags with a div wrapper       
        const navWrapper = htmlBuilder.createElementWithText("div", undefined,undefined,"nav-wrapper")
        
        const navDiv = htmlBuilder.createElementWithText("div",undefined, "topNav")
        navDiv.classList.add("card-header","card-body","card-text")

        const searchAnchor = htmlBuilder.createAnchorElement("Search", "search-button", "searchBtn")
        searchAnchor.classList.add("card-text")
        searchAnchor.addEventListener("click",function() {
          clearSection.clearRecipe()
          recipeContainer.appendChild(searchObject.search())

        })
        const myRecipeAnchor = htmlBuilder.createAnchorElement("My Recipes", "My-Recipes", "myRecipeBtn")
        myRecipeAnchor.classList.add("card-text")

        myRecipeAnchor.addEventListener("click",function(){ 
          clearSection.clearRecipe()
          recipeBuilder.listRecipe()
      })
        const createRecipeButton = htmlBuilder.createAnchorElement("New Recipe", "New-Recipe", "newRecipeBtn")
        createRecipeButton.classList.add("card-text")
        createRecipeButton.addEventListener("click",function(){
           clearSection.clearRecipe()
          recipeForm.buildRecipeForm()
        })
        const logOutButton = htmlBuilder.createAnchorElement("Logout", "Log-out", "logoutBtn")
        logOutButton.classList.add("card-text")
       // logOutButton.addEventListener("click",)
        const welcomeHeader = htmlBuilder.createElementWithText("h1", "Quick& Cheesy", "Header")
         welcomeHeader.classList.add("card-header","app-title"); //bootstrap styling
        
// searchAnchor.addEventListener("click",)




{/* <section id="login-section"></section>

<div id="main-container">
  <nav id="nav-container"></nav>
  <div id="recipe-container"></div>
</div>
<div>
  <section id="users-section"></section> */}


        
        
        
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