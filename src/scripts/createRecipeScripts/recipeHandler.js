import htmlBuilder from "../HTMLBuilder";
import recipeForm from "./recipeForm";
import API from "./recipeCollection"
import recipeBuilder from "./recipes"
import editForm from "./editRecipe";
import clearSection from "../clearSections"
// let data = sessionStorage.getItem("userId")
let data = 2
const newRecipe = {
    saveRecipeHandler() {


        // const categoryId = document.getElementById("categoryDropDown").value
        // const costId = document.getElementById("costDropDown").value
        // const difficulty = document.getElementById("diffDropDown").value




        //grabbing the values from the elements 
        const title = document.getElementById("recipe--Title").value
        const ingredients = document.getElementById("recipe--ingredients").value
        const instructions = document.getElementById("recipe--instructions").value

        const selectValueCatergory = document.querySelector("#categoryDropDown")
        const selectValueCost = document.querySelector("#costDropDown")
        const selectValueDifficulty = document.querySelector("#diffDropDown")
        let opt1 = selectValueCatergory.options[selectValueCatergory.selectedIndex].value
        let opt2 = selectValueCost.options[selectValueCost.selectedIndex].value
        let opt3 = selectValueDifficulty.options[selectValueDifficulty.selectedIndex].value
        //conditional statement that alerts user if they dont choose a catergory
        if (opt1 === "") {
            alert("please choose category")
        } else if (opt2 === "") {
            alert("please select cost")
        } else if (opt3 === "") {
            alert("please select difficulty")

        } else {

            let makeRecipeObj = (title, ingredients, instructions, opt1, opt2, opt3) => {
                const postObject = {
                    userId: Number(data),
                    title: title,
                    ingredients: ingredients,
                    instructions: instructions,
                    categoryId: parseInt(opt1),
                    costId: parseInt(opt2),
                    difficultyId: parseInt(opt3)
                    //parsing the objects to return an integer value
                }
                return postObject
            }
            //fetch call to post a new recipe
            API.postNewRecipe(makeRecipeObj(title, ingredients, instructions, opt1, opt2, opt3))
                .then(() => {
                    const container = document.querySelector("#recipe--container")
                    //  console.log(container)
                    while (container.firstChild) {
                        container.removeChild(container.firstChild)
                    }

                })
                .then(() => recipeBuilder.listRecipe())
        }
    },



    removeRecipe(id) {
        // console.log(id)
        const container = document.querySelector("#recipe-container")
        let recipeId = Number(event.target.id.split("--")[1])
        // console.log(recipeId)

        return API.deleteRecipe(recipeId)

            .then(() => {

                // console.log(container)
                while (container.firstChild) {
                    container.removeChild(container.firstChild)
                }
            }).then(() => recipeBuilder.listRecipe())

          },
    
    
 //this event fires when the user clicks the edit button 
    handleEditRecipe() {
        let recipeId = parseInt(event.target.id.split("--")[1]);
        let parentNodeId = event.target.parentNode.id
        //  console.log(parentNodeId)
        
        
        const recipeDiv = document.querySelector(`#recipe-Id--${recipeId}`)
        //   console.log(recipeDiv)

        
        API.getOneRecipe(recipeId).then(recipeToEdit => {
            console.log("hi from edit handle")
            htmlBuilder.clearContainer(recipeDiv)
            //   console.log(recipeToEdit)
            const editFormForRecipe = editForm.recipeEditForm(recipeToEdit, recipeId)
            console.log(editFormForRecipe)
            recipeDiv.appendChild(editFormForRecipe)
        })
        //  console.log("")
    },


    //update recipe handler after the recipe has been edited
    handleUpdateRecipe(event) {
        
        event.preventDefault()
        // split the id to get the number value given to the edit button
        let recipeId = parseInt(event.target.id.split("--")[1])
        // console.log(recipeId)
        // console.log(event)
        
        
        
        const editedRecipeTitle = document.querySelector(`#edit-recipe-title--${recipeId}`).value
        const editedRecipeIngredients = document.querySelector(`#edit-recipe-ingredients--${recipeId}`).value
        const editesRecipeInstructions = document.querySelector(`#edit-recipe-instructions--${recipeId}`).value
        const editRecipeCategory = document.querySelector(".editCat")
        const editRecipeCost = document.querySelector(".editCost")
        const editRecipeDifficulty = document.querySelector(".editDiff")

        //var TextInsideLi = ctrl.getElementsByTagName('p')[0].innerHTML;
       
        console.log(editRecipeCategory.id.split("--")[1])
        // console.log(editedRecipeTitle.value, editedRecipeIngredients.value, editesRecipeInstructions.value)


        let editedRecipe = {
            userId: Number(sessionStorage.getItem("userId")),
            id: Number(recipeId),
            title: editedRecipeTitle,
            ingredients: editedRecipeIngredients,
            instructions: editesRecipeInstructions,
            categoryId: Number(editRecipeCategory.id.split("--")[1]),
            difficultyId: Number(editRecipeDifficulty.id.split("--")[1]),
            costId: Number(editRecipeCost.id.split("--")[1])
        };

        // {
        //     "userId": 1,
        //     "title": "New Recipe",
        //     "ingredients": "New Recipe",
        //     "instructions": "New Recipe",
        //     "categoryId": 2,
        //     "costId": 1,
        //     "difficultyId": 1,
        //     "id": 17
        //   }
        console.log(editedRecipe)
        return  API.updateRecipe(recipeId, editedRecipe)
         .then(() => clearSection.clearRecipe())
         .then(() => recipeBuilder.listRecipe())
    }
}



export default newRecipe

















// deleteTaskHandler: () => {

//     // const taskName = document.querySelector("#task")
//     // const taskDate = document.querySelector("#date")


//     //  console.log("delete button clicked", event.target.id())
//      let taskId = event.target.id

//     return apiManager.deleteTask(taskId)
//         .then(() => {
//             const displayContainer = document.querySelector("#task-container")
//             while (displayContainer.firstChild) {
//                 displayContainer.removeChild(displayContainer.firstChild)
//             }
//            return displayContainer

//         }).then(()=> apiManager.getTask).then(r => console.log(r))