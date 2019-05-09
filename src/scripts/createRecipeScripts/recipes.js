import htmlBuilder from "../HTMLBuilder";
import API from "../createRecipeScripts/recipeCollection"
import clearSections from "../clearSections"
import recipeHandler from "./recipeHandler"


// <div>
//   <h2>Recipe Title</h2>
//   <p>Recipe Ingredients</p>
//    <p>Recipe instructions</p>
//    <ul>
//     <li>category<li/>
//     <li>cost</li>
//     <li>difficulty</li>
//     </ul>
// </div>


const buildRecipeObject = {

    listRecipe() {
        // make fetch call to the recipes 
        // map over them 
        //.then()
        // query recipe-conta
        //append all elements to container


        const container = document.querySelector("#recipe-container")
        API.getAllRecipes()
            .then(recipes => {
                //console.log(listRecipe)
                clearSections.clearRecipe()
                recipes.map(recipe => {
                    const recipeDiv = htmlBuilder.createElementWithText("div", undefined, "recipe--div", "recipeDiv")
                    recipeDiv.classList.add("card")
                    const title = htmlBuilder.createElementWithText("h2", `${recipe.title}`, "recipe--title", "recipeTitle")
                    const instructions = htmlBuilder.createElementWithText("p", `${recipe.instructions}`, "recipe--instructions", )
                    const recipeUl = htmlBuilder.createElementWithText("ul", undefined, "recipe--ul", "recipeUl")
                    const category = htmlBuilder.createElementWithText("li", `${recipe.category.categoryName}`, "recipe--category", "recipeCategory")
                    const cost = htmlBuilder.createElementWithText("li", `${recipe.cost.costValue}`, "recipe--cost", "")
                    const ingredientsUl = htmlBuilder.createElementWithText("ul", undefined, "ingredients--ul", "ingredientsUl")
                    const ingredientSplit = recipe.ingredients.split(",")
                    const recipeFrag = document.createDocumentFragment()
                    let data = sessionStorage.getItem("userId")
                    if (recipe.userId === 0) {
                            console.log("hello")
                        const deleteButton = htmlBuilder.createElementWithText("button", "Delete", `deleteButton--${recipe.id}`, "deleteButton")
                            deleteButton.addEventListener("click", function (event) {
                            
                            recipeHandler.removeRecipe(event.target.id)

                        })
                        recipeDiv.appendChild(deleteButton)
                     }
                    if (ingredientSplit === undefined) {
                        alert("please use comma")
                    } else {
                        ingredientSplit.map(ingredient => {
                            recipeFrag.appendChild(htmlBuilder.createElementWithText("li", `${ingredient}`, undefined, "recipeIngredient"))


                        })
                    }


                    let difficulty = ""
                    if (recipe.difficultyId === 1) {
                        difficulty = htmlBuilder.createElementWithText("li", "Easy", "recipe--difficulty", "recipeDifficulty")
                    } else {
                        difficulty = htmlBuilder.createElementWithText("li", "Hard", "recipe--difficulty", "recipeDifficulty")

                    }

                    //Appending all my elements to the #recipe-container
                    recipeUl.appendChild(category)
                    recipeUl.appendChild(cost)
                    recipeUl.appendChild(difficulty)
                    recipeDiv.appendChild(title)
                    ingredientsUl.appendChild(recipeFrag)
                    recipeDiv.appendChild(ingredientsUl)
                    recipeDiv.appendChild(instructions)
                    recipeDiv.appendChild(recipeUl)
                    container.appendChild(recipeDiv)

                    // let data = sessionStorage.getItem("userId")
                    // if( recipe.userId === 0 ){

                    //     const deleteButton = htmlBuilder.createElementWithText("button", "Delete",`deleteButton--${recipe.id}`,"deleteButton")
                    //     deleteButton.addEventListener("click", function (event) {

                    //         recipeHandler.deleteRecipe(event.target.id)

                    //     })
                    //     container.appendChild(deleteButton)

                    //const editButton = htmlBuilder.createElementWithText("button","Edit", `editButton--${edit.Id}`, "editButton")
                    })

                console.log(container)
            })

    }


}


export default buildRecipeObject