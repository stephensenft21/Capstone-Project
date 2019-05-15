import htmlBuilder from "./HTMLBuilder";
const searchObject = {
   //this is the second view for the application
    search() {
        const searchResultsContainer = htmlBuilder.createElementWithText("article", undefined, undefined, undefined)
        const searchButton = htmlbuilder.createElementWithText("button", "Search Recipe", "search--recipe", "searchButton", )
    }
}
