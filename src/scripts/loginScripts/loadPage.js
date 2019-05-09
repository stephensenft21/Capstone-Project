import htmlBuilder from "../HTMLBuilder"
import clearSection from "../clearSections";
import buildNavBar from "../navBar";




const loadPage = {
load() {
let userId =sessionStorage.getItem("userId")
clearSection.clearAllSections();


buildNavBar.buildList();
}
















}






export default loadPage