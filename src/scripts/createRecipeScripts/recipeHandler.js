import htmlBuilder from "../HTMLBuilder";
import recipeForm from "./recipeForm";
import API from "./recipeCollection"
import recipeBuilder from "./recipes"


let data = sessionStorage.getItem("userId")

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
            recipeCollection.postNewRecipe(makeRecipeObj(title, ingredients, instructions, opt1, opt2, opt3))
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



    removeRecipe(id){
        console.log(id)
        const container = document.querySelector("#recipe-container")
        let recipeId = parseInt(id.split("--")[1])
        console.log(recipeId)
        debugger
        return API.deleteRecipe(recipeId)

            .then(() => {

                // console.log(container)
                while (container.firstChild) {
                    container.removeChild(container.firstChild)
                }
            }).then(() => recipeBuilder.listRecipe())



    },

    // updateRecipe() {
    //     let recipeId = parseInt(event.target.id.split("--")[1])
    //     recipeCollection.updateRecipe(recipeId)

    // }
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