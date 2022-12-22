import { getLocationFromApi } from "./Api";
import { tabManager } from "../../main";
let searchInput = []
const searchElement = () =>{
    searchInput = [document.getElementById('searchInput').value, document.getElementById('selectType').value, document.getElementById('selectSecond').value];
    tabManager.openTabById('page4')
    
}
export {searchInput}

export default searchElement