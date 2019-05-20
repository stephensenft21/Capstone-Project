import htmlBuilder from "../HTMLBuilder"
import clearSection from "../clearSections";
import buildNavBar from "../navBar";
import recipeForm from "../createRecipeScripts/recipeForm"
import callSearch from "../search"


const loadPage = {
    load() {
         let userId =sessionStorage.getItem("userId")
        clearSection.clearAllSections();
       
        buildNavBar.buildList();
        callSearch.search()
        //next view will be search page 
    // 3rd view will be 
        recipeForm.buildRecipeForm()
    }

}

export default loadPage