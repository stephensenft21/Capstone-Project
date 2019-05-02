import htmlBuilder from "../HTMLBuilder";



const mainContainer = htmlBuilder.createElementWithtext("section", undefined, "mainContainer")
const buttonDropDownContainer = html.createElementWithtext("section", undefined, "buttonDropDownContainer")
const recipeContainer = htmlBuilder.createElementWithtext("section", undefined, "recipeContainer")
recipeContainer.classList.add("Card")

const saveRecipeButton = htmlBuilder.createElementWithtext("button", "Save Recipe", "saveButton")
const dropDownUL = htmlBuilder.createElementWithtext("ul", undefined, "" )
dropDownUL.classList.add("dropdown-menu")
const listMexican = htmlBuilder.createElementWithtext("li", "Mexican", "1" )
const listAmerican = htmlBuilder.createElementWithtext("li", "American", "2" )
const listItalian = htmlBuilder.createElementWithtext("li", "Italian", "3" )
const listAsian = htmlBuilder.createElementWithtext("li", "Asian", "4" )
console.log(mainContainer)















mainContainer.appendChild(buttonDropDownContainer)
mainContainer.appendChild(recipeContainer)
recipeContainer.appendChild(saveRecipeButton)
dropDownUL.appendChild()
