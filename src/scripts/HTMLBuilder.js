//Page contains an object with three different functions to build Html, clear a container, and create list element


const htmlBuilder = {
    //Function to build and return an element taking in element, text, and id as arguments.
createElementWithtext(element, text, id) {
    const newElement = document.createElement(element)
    if (text) {
        newElement.textContent = text
    }
    if (id) {
        newElement.id = id
    
    }
   return newElement
},


clearContainer(elementToClear){
    while(elementToClear.firstChild){
        elementToClear.removeChild(elementToClear.firstChild)
    }
}









} 


export default htmlBuilder