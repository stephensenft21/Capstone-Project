import htmlBuilder from "./HTMLBuilder";

const loginContainer = document.querySelector("#login-section");
const navBar = document.querySelector("#nav-container");
const recipeContainer = document.querySelector("#recipe-container");
const usersContainer = document.querySelector("#users-section");
//object that holds methods for clearing contents of elements
const clearSection = {
  clearNav() {
    htmlBuilder.clearContainer(navBar);
  },

  clearRecipe() {
    htmlBuilder.clearContainer(recipeContainer);
  },

  clearLogin() {
    htmlBuilder.clearContainer(loginContainer);
  },

  clearUser() {
    htmlBuilder.clearContainer(usersContainer);
  },

  //Method to clear all sections
  clearAllSections() {
    htmlBuilder.clearContainer(navBar);
    htmlBuilder.clearContainer(recipeContainer);
    htmlBuilder.clearContainer(loginContainer);
    htmlBuilder.clearContainer(usersContainer);
  }
};



export default clearSection