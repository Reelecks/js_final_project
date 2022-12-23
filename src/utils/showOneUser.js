import { tabManager } from "../../main";

let valueId = 1
const showOneUser = (idUser) => {
   valueId=idUser
   tabManager.openTabById('page5')
}
export {valueId}

export default showOneUser