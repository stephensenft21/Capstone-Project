import htmlBuilder from "./HTMLBuilder";
import searchHandler from "./searchHandler"

let recipeContainer = document.querySelector("recipe-container")
const searchDiv = htmlBuilder.createElementWithText("div", undefined,"search--div")
const searchObject = {
   //this is the second view for the application
    search() {

        const searchHeader = htmlBuilder.createElementWithText("h2","Search Recipe", "Search--Recipe", "searchRecipe")
        searchHeader.classList.add("card-header", "card-text", "card-body")
        const searchResultsContainer = htmlBuilder.createElementWithText("article", undefined, undefined, "c")
        const searchButton = htmlBuilder.createElementWithText("button", "Search Recipe", "search--recipe", "searchButton", )
        searchButton.type = "button"
        searchButton.className = "btn btn-warning"
        searchButton.addEventListener("click", searchHandler.searchRecipe)
        
        const searchDropDownContainer = htmlBuilder.createElementWithText("section", undefined, "search-dropDown-container", "searchDropDown")
              
        
        
        
        
        // categoryDropDownSelector.classList.add("btn-group dropright")
       
       
        const searchCategorySelector = htmlBuilder.createElementWithText("select", "Category", "categoryDropDown")
        
        
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

        
        searchCategorySelector.appendChild(listCategory)
        searchCategorySelector.appendChild(listMexican)
        searchCategorySelector.appendChild(listAmerican)
        searchCategorySelector.appendChild(listItalian)
        searchCategorySelector.appendChild(listAsian)


         // cost dropdown menu with four categories
         const searchCostSelector = htmlBuilder.createElementWithText("select", "Cost", "costDropDown")
         
         
         const listNull = htmlBuilder.createElementWithText("option", "Cost", undefined, "null")
         listNull.setAttribute("value", "")
         const listPriceOne = htmlBuilder.createElementWithText("option", "$10.00", undefined, "price-one")
         listPriceOne.setAttribute("value", 1)
         const listPriceTwo = htmlBuilder.createElementWithText("option", "$15.00", undefined, "price-two")
         listPriceTwo.setAttribute("value", 2)
         const listPriceThree = htmlBuilder.createElementWithText("option", "$30.00", undefined, "price-three")
         listPriceThree.setAttribute("value", 3)
         
         
         searchCostSelector.appendChild(listNull)
         searchCostSelector.appendChild(listPriceOne)
         searchCostSelector.appendChild(listPriceTwo)
         searchCostSelector.appendChild(listPriceThree)


         const searchDiffSelector = htmlBuilder.createElementWithText("select", undefined, "diffDropDown")
         const diffNull = htmlBuilder.createElementWithText("option", "Difficulty", undefined, "diffNull")
         diffNull.setAttribute("value", "")
         const listEasy = htmlBuilder.createElementWithText("option", "Quick&Easy", "quickEasy", undefined)
         listEasy.setAttribute("value", 1)
         const listHard = htmlBuilder.createElementWithText("option", "Not-So-Easy", "notEasy", undefined)
         listHard.setAttribute("value", 2)
         searchDiffSelector.appendChild(diffNull)
         searchDiffSelector.appendChild(listEasy)
         searchDiffSelector.appendChild(listHard)

         
         searchDropDownContainer.appendChild(searchCategorySelector)
         searchDropDownContainer.appendChild(searchCostSelector)
         searchDropDownContainer.appendChild(searchDiffSelector)
         searchResultsContainer.appendChild(searchHeader)
         searchResultsContainer.appendChild(searchDropDownContainer)
         searchResultsContainer.appendChild(searchButton)
         




         return searchResultsContainer
    }

} 






export default searchObject 
