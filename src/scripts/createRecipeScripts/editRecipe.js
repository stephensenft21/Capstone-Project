import htmlBuilder from "../HTMLBuilder"
import newRecipe from "./recipeHandler";


const editForm = {
    recipeEditForm(recipeObject){
         console.log(recipeObject)
        let editFormFragment = document.createDocumentFragment()
        //  const recipeDiv = document.querySelector(`#recipe-Id--${recipeId}`)
        //createElementWithText(elementType,textcontent,elementId,elementClass,elementValue)

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