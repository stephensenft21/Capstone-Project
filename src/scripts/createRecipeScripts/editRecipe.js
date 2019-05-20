import htmlBuilder from "../HTMLBuilder"
import newRecipe from "./recipeHandler";


const editForm = {
    recipeEditForm(recipeObject) {
        console.log(recipeObject)
        
        //creating a doc fragment to build an edit form 
        let editFormFragment = document.createDocumentFragment()
        //createElementWithText(elementType,textcontent,elementId,elementClass,elementValue)
        let category = htmlBuilder.createElementWithText("p", recipeObject.category.categoryName,`editCategoryId--${recipeObject.category.id}`, "editCat", recipeObject.category.id)
        // category.value = recipeObject.category.categoryName
        let cost = htmlBuilder.createElementWithText("p", recipeObject.cost.costValue, `editCostId--${recipeObject.cost.id}`, "editCost", recipeObject.cost.id)
        // cost.value = recipeObject.cost.costValue
        let difficulty = htmlBuilder.createElementWithText("p", recipeObject.difficulty.difficultyValue, `editDifficultyId--${recipeObject.difficulty.id}`, "editDiff", recipeObject.difficulty.id)
        // difficulty.value = recipeObject.difficulty.difficultyValue
       
       
       
        editFormFragment.appendChild(htmlBuilder.createElementWithText("h1", "Recipe to Edit", undefined, ""))
        editFormFragment.appendChild(category)
        editFormFragment.appendChild(cost)
        editFormFragment.appendChild(difficulty)
        
        
        
        console.log(recipeObject.category.categoryName)
        editFormFragment.appendChild(htmlBuilder.createElementWithText("label", "Title:", undefined))
        editFormFragment.appendChild(htmlBuilder.createElementWithText("input", undefined, `edit-recipe-title--${recipeObject.id}`, undefined, recipeObject.title))

        editFormFragment.appendChild(htmlBuilder.createElementWithText("label", "Ingredients:", undefined))
        editFormFragment.appendChild(htmlBuilder.createElementWithText("input", undefined, `edit-recipe-ingredients--${recipeObject.id}`, undefined, recipeObject.ingredients))
        editFormFragment.appendChild(htmlBuilder.createElementWithText("label", "Instructions:", undefined))
        editFormFragment.appendChild(htmlBuilder.createElementWithText("input", undefined, `edit-recipe-instructions--${recipeObject.id}`, undefined, recipeObject.instructions))

        let updateRecipeButton = htmlBuilder.createElementWithText("button", "Update", `update-recipe-button--${recipeObject.id}`, "updateRecipe")
        editFormFragment.appendChild(updateRecipeButton)
        updateRecipeButton.addEventListener("click", newRecipe.handleUpdateRecipe)


        // console.log(editFormFragment)
        // recipeDiv.appendChild(editFormFragment)
        return editFormFragment
    }

}

export default editForm