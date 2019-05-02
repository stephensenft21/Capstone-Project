 const URL = "http://localhost:8088/"

 const API = {
     getOneRecipe(id) {
         return fetch(`${URL}/recipes${id}`).then(response =>
             response.json()
         );
     },
     getAllRecipes() {
         return fetch(`${URL}/recipes`).then(response =>
             response.json()
         );
     },
      // api call to save new user recipee
     postNewRecipe(recipe) {
         return fetch(`${URL}`, {
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify(recipe)
         }).then(response => response.json());
     },
     deleteRecipe() {
         return fetch(`${URL}recipes`, {
             method: "DELETE",

         })

     },
     updateRecipe(recipe) {
         return fetch(`${URL}/recipe`, {
             method: "PATCH",
             header: {
                 "Content-Type": "application/json"

             },
             body: JSON.stringify(recipe)

         })
     },

 
 };

 



 export default API