import htmlBuilder from "../HTMLBuilder";
import recipeForm from "./recipeForm";
import recipeCollection from "./recipeCollection"
import recipeBuilder from "./recipes"
const newRecipe = {
    saveRecipeHandler() {
        //doNothing
        // console.log(event.target.value)



        //
        let data = sessionStorage.getItem("userId")
        // const categoryId = document.getElementById("categoryDropDown").value
        // const costId = document.getElementById("costDropDown").value
        // const difficulty = document.getElementById("diffDropDown").value
        const title = document.getElementById("recipe--Title").value
        const ingredients = document.getElementById("recipe--ingredients").value
        const instructions = document.getElementById("recipe--instructions").value
        const selectValueCatergory = document.querySelector("#categoryDropDown")
        const selectValueCost = document.querySelector("#costDropDown")
        const selectValueDifficulty = document.querySelector("#diffDropDown")
        let opt1 = selectValueCatergory.options[selectValueCatergory.selectedIndex].value
        let opt2 = selectValueCost.options[selectValueCost.selectedIndex].value
        let opt3 = selectValueDifficulty.options[selectValueDifficulty.selectedIndex].value

        if (opt1 === "") {
            alert("please choose category")
        } else if (opt2 === "") {
            alert("please select cost")
        } else if (opt3 === "") {
            alert("please select difficulty")

        } else {

            let makeRecipeObj = (title,ingredients, instructions,  opt1,opt2,opt3) => {
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
               
            recipeCollection.postNewRecipe(makeRecipeObj(title, ingredients, instructions, opt1, opt2, opt3))
                .then(() => {
                    const container = document.querySelector("#recipe--container")
                    //  console.log(container)
                    while (container.firstChild) {
                        container.removeChild(container.firstChild)
                    }
                    // title.value = ""
                    
                    // instructions.value = ""
                    // categoryId.value = ""
                    // costId.value = ""
                    // quickEasy.value = false

                })
                .then(() => recipeBuilder.listRecipe())
                
        }


        console.log("opt3")

        //getting references to  different dropdowns in recipeForm.js





        // console.log(category, cost, difficulty)
    }
}



export default newRecipe


// let newContact = {
//     name: contactName.value,
//     phone: contactNumber.value,
//     address: contactAddress.value
// }
// console.log(newContact)
// contactCollection.POSTcontact(newContact)
//  .then(() => {
//      const displayContainer = document.querySelector("#display-container")
//      while(displayContainer.firstChild){
//          displayContainer.removeChild(displayContainer.firstChild)
//      }
//      contactName.value = ""
//      contactNumber.value = ""
//      contactAddress.value = ""
//  })
//  .then(Contactlist.listAllContacts)

// },