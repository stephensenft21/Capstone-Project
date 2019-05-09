import htmlBuilder from "../HTMLBuilder";
import recipeHandler from "./recipeHandler"
import recipeCollection from "./recipeCollection"
const recipeForm = {
    buildRecipeForm() {
        // const recipeFragment = document.createDocumentFragment()
        const mainContainer = htmlBuilder.createElementWithText("section", undefined, "main--Container", "mainCont")
        const buttonDropDownContainer = htmlBuilder.createElementWithText("section", undefined, "buttonDropDownContainer")
        const recipeContainer = htmlBuilder.createElementWithText("section", undefined, "recipe--container", "recContainer")
        recipeContainer.classList.add("Card")

        const newRecipeH1 = htmlBuilder.createElementWithText("h1", "New Recipe", "new--recipe", "h1")
        // newRecipeH1.classList.add("Card")

        //Button to save recipe 
        const saveRecipeButton = htmlBuilder.createElementWithText("button", "SaveRecipe", "saveButton")
        saveRecipeButton.addEventListener("click", recipeHandler.saveRecipeHandler)


        // recipe button drop-down with four categories.
        const categoryDropDownSelector = htmlBuilder.createElementWithText("select", "Category", "categoryDropDown")
        //categoryDropDownSelector.classList.add("dropdown-menu")
        const listCategory = htmlBuilder.createElementWithText("option", "Category", undefined, "Category")
        listCategory.setAttribute("value", "")
        const listMexican = htmlBuilder.createElementWithText("option", "Mexican", "1")
        listMexican.setAttribute("value", 1)
        const listAmerican = htmlBuilder.createElementWithText("option", "American", "2")
        listAmerican.setAttribute("value", 2)
        const listItalian = htmlBuilder.createElementWithText("option", "Italian", "3")
        listItalian.setAttribute("value", 3)
        const listAsian = htmlBuilder.createElementWithText("option", "Asian", "4")
        listAsian.setAttribute("value", 4)

        categoryDropDownSelector.appendChild(listCategory)
        categoryDropDownSelector.appendChild(listMexican)
        categoryDropDownSelector.appendChild(listAmerican)
        categoryDropDownSelector.appendChild(listItalian)
        categoryDropDownSelector.appendChild(listAsian)


        // cost dropdown menu with four categories
        const costDropDownSelector = htmlBuilder.createElementWithText("select", "Cost", "costDropDown")
        //costDropDownUL.classList.add("dropdown-menu")
        const listNull = htmlBuilder.createElementWithText("option", "Cost", undefined, "null")
        listNull.setAttribute("value", "")
        const listPriceOne = htmlBuilder.createElementWithText("option", "$10.00", undefined, "price-one")
        listPriceOne.setAttribute("value", 1)
        const listPriceTwo = htmlBuilder.createElementWithText("option", "$15.00", undefined, "price-two")
        listPriceTwo.setAttribute("value", 2)
        const listPriceThree = htmlBuilder.createElementWithText("option", "$30.00", undefined, "price-three")
        listPriceThree.setAttribute("value", 3)
        costDropDownSelector.appendChild(listNull)
        costDropDownSelector.appendChild(listPriceOne)
        costDropDownSelector.appendChild(listPriceTwo)
        costDropDownSelector.appendChild(listPriceThree)





        const difficultyDropDown = htmlBuilder.createElementWithText("select", undefined, "diffDropDown")
        const diffNull = htmlBuilder.createElementWithText("option", "Difficulty", undefined, "diffNull")
        diffNull.setAttribute("value", "")
        const listEasy = htmlBuilder.createElementWithText("option", "Quick&Easy", "quickEasy", undefined)
        listEasy.setAttribute("value", 1)
        const listHard = htmlBuilder.createElementWithText("option", "Not-So-Easy", "notEasy", undefined)
        listHard.setAttribute("value", 2)
        difficultyDropDown.appendChild(diffNull)
        difficultyDropDown.appendChild(listEasy)
        difficultyDropDown.appendChild(listHard)


        //input fields for title, ingredients and instructions of a new recipe..
        const recipeFragment = document.createDocumentFragment()
        //input for Recipe title
        const recipeTitle = htmlBuilder.createElementWithText("input", undefined, "recipe--Title", "recipeTitle")
        recipeTitle.placeholder = "Title Recipe"
        //text area element for Recipe ingredients
        const ingredients = htmlBuilder.createElementWithText("textarea", undefined, "recipe--ingredients", undefined) //add class later for styling 
        ingredients.placeholder = "Enter Ingredients"
        //text area element for Recipe instructions 
        const instructions = htmlBuilder.createElementWithText("textarea", undefined, "recipe--instructions", undefined) //add class later for styling
        instructions.placeholder = "Enter Instructions"


        recipeCollection.getAllRecipes().then()





        recipeFragment.appendChild(recipeTitle)
        recipeFragment.appendChild(ingredients)
        recipeFragment.appendChild(instructions)
        buttonDropDownContainer.appendChild(categoryDropDownSelector)
        buttonDropDownContainer.appendChild(costDropDownSelector)
        // buttonDropDownContainer.appendChild(diffLabel)
        buttonDropDownContainer.appendChild(difficultyDropDown)
        //recipeContainer.appendChild(buttonDropDownContainer)
        recipeContainer.appendChild(recipeFragment)
        recipeContainer.appendChild(saveRecipeButton)
        mainContainer.appendChild(newRecipeH1)
        mainContainer.appendChild(buttonDropDownContainer)
        mainContainer.appendChild(recipeContainer)



        document.querySelector("#recipe-container").appendChild(mainContainer)


    }




}















export default recipeForm