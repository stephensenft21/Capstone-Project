import htmlBuilder from "./HTMLBuilder"
import searchObject from "./search"
import recipeCollection from "./createRecipeScripts/recipeCollection"
import listRecipes from "./createRecipeScripts/recipes"


const newSearch = {

    searchRecipe: () => {
      
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

        }else{
           
            return recipeCollection.getAllRecipes().then(recipes => {

                const filterAll = recipes.filter(recipe=>{
                    let isMatch = false 
                    if( Number(recipe.category.id) === Number(opt1) && Number(recipe.cost.id) === Number(opt2) && Number(recipe.difficulty.id) === Number(opt3))
                    {
                        isMatch = true
                    }
                     console.log(isMatch)
                    return isMatch
                    
                   
                })
                console.log(filterAll)
                return filterAll

            }).then((response) => listRecipes.listRecipe(response))     

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