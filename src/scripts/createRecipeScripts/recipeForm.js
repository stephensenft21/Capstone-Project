import htmlBuilder from "../HTMLBuilder";



const mainContainer = htmlBuilder.createElementWithText("section", undefined, "mainContainer")
const buttonDropDownContainer = html.createElementWithText("section", undefined, "buttonDropDownContainer")
const recipeContainer = htmlBuilder.createElementWithText("section", undefined, "recipeContainer")
recipeContainer.classList.add("Card")

const saveRecipeButton = htmlBuilder.createElementWithText("button", "Save Recipe", "saveButton")
const dropDownUL = htmlBuilder.createElementWithText("ul", undefined, "" )
dropDownUL.classList.add("dropdown-menu")
const listMexican = htmlBuilder.createElementWithText("li", "Mexican", "1" )
const listAmerican = htmlBuilder.createElementWithText("li", "American", "2" )
const listItalian = htmlBuilder.createElementWithText("li", "Italian", "3" )
const listAsian = htmlBuilder.createElementWithText("li", "Asian", "4" )
console.log(mainContainer)















mainContainer.appendChild(buttonDropDownContainer)
mainContainer.appendChild(recipeContainer)
recipeContainer.appendChild(saveRecipeButton)
dropDownUL.appendChild()
