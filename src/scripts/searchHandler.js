import htmlBuilder from "./HTMLBuilder"
import searchObject from "./search"
import recipeCollection from "./createRecipeScripts/recipeCollection"
import listRecipes from "./createRecipeScripts/recipes"
import clearContainer from "./clearSections"

const newSearch = {

    searchRecipe: () => {
          //querying 
        const selectValueCatergory = document.querySelector("#categoryDropDown")
        const selectValueCost = document.querySelector("#costDropDown")
        const selectValueDifficulty = document.querySelector("#diffDropDown")
        //The selectedIndex property sets or returns the index of the selected option in a drop-down list.
        let opt1 = Number(selectValueCatergory.options[selectValueCatergory.selectedIndex].value)
        let opt2 = Number(selectValueCost.options[selectValueCost.selectedIndex].value)
        let opt3 = Number(selectValueDifficulty.options[selectValueDifficulty.selectedIndex].value)
                     
        
        // let category = selectValueCatergory.selectedIndex
        // let cost = selectValueCost.selectedIndex
        // let difficulty = selectValueDifficulty.selectedIndex
        // console.log(category, cost, difficulty)
        // console.log(opt1, opt2, opt3)

       //conditional statement that alerts user if they dont choose a catergory/cost/difficulty
        if (opt1 === 0) {
            return alert("please choose category")
        } else if (opt2 === 0) {
            return alert("please select cost")
        } else if (opt3 === 0) {
            return alert("please select difficulty")
        } else {

            return recipeCollection.getAllRecipes().then(recipes => {

                const filterAll = recipes.filter(recipe => {
                    let isMatch = false
                    if (Number(recipe.category.id) === Number(opt1) && Number(recipe.cost.id) === Number(opt2) && Number(recipe.difficulty.id) === Number(opt3)) {
                        isMatch = true
                    }
                    console.log(isMatch)
                    return isMatch


                })
                console.log(filterAll)
                // if recipes are found/ put into the filterAll array, return the value of the array.
                if (filterAll.length !== 0) {
                    return filterAll
                } else {

                    //if no recipes/ meaning the filter didn't match parameters return null

                    return null
                }
                // response either === null or filterAll and then lists recipe if it does === filterAll. if it does === null - alert user "No matches found"
            }).then((response) => {
                if (response !== null) {
                    clearContainer.clearRecipe()
                    listRecipes.listRecipe(response)
                    

                } else {
                    return alert("Im so sorry we dont have any recipes that match that search")
                    
                }
            })
            


            // recipeCollection.getAllRecipes().then(recipes => {
            //     console.log(opt1,opt2,opt3)
            //  const filterCategory = recipes.filter(recipe => {
            //         Number(recipe.category.id) === Number(opt1)
            //         return filterCategory
            //  })   
            //  console.log(filterCategory)
            //  const filterCost = filterCategory.filter(recipe => {
            //      Number(recipe.cost.id) === Number(opt2) 
            //  })

            //  const filterDifficulty = filterCost.filter(recipe => {
            //      Number(recipe.difficulty.id) === Number(opt3)

            //     })
            //     console.log(filterDifficulty)



        }

    }






}





export default newSearch