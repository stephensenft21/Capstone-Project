 const URL = "http://localhost:8088"

 const API = {
     getOneRecipe(id) {
         return fetch(`${URL}/recipes/${id}?_expand=difficulty&_expand=cost&_expand=category`).then(response =>
             response.json()
         );
     },
     getAllRecipes() {
         return fetch(`${URL}/recipes?_expand=difficulty&_expand=cost&_expand=category`).then(response =>
             response.json()
         );
     },
     // api call to save new user recipee
     postNewRecipe(recipe) {
         return fetch(`${URL}/recipes`, {
             method: "POST",
             headers: {
                 "content-type": "application/json"
             },
             body: JSON.stringify(recipe)
         }).then(response => response.json());
     },
     deleteRecipe(id) {
         return fetch(`${URL}/recipes/${id}`, {
             method: "DELETE"

         }).then(r => r.json());

     },
     updateRecipe(id, recipe) {
         return fetch(`${URL}/recipes/${id}`, {
             method: "PATCH",
             header: {
                 "Content-Type": "application/json"

             },
             body: JSON.stringify(recipe)

         }).then(r => r.json())
     },


 };





 export default API