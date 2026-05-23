//*************************************
//********** IMPORT FUNKCJI  **********
//*************************************

import { state} from "./state.js";
import { render } from "./render.js";


//*************************************
//** POBIERANIE WARTOSCI UZYTKOWNIKA **
//*************************************

const config = {
  type: document.querySelector("#type").value,
  source_link: document.querySelector("#source_link").value,
  content: document.querySelector("#content-input").value,
}                                   
//*************************************
//**** DODAWANIE ELEMENTU DO STATE ****
//*************************************

export function add_Node(parentId, state){
    const child = createNode(config);
    const context = findNodeContext(parentId, state)
    if (!context) return
    context.node.children.push(child);
}

//*************************************
//**** USUWANIE ELEMENTU DO STATE *****
//*************************************

export function delete_Node(id, state) {
    const context = findNodeContext(id, state);

    if(!context) return
    if(!context.parent) return
    context.parent.children = context.parent.children.filter(el => el.id != id)
    
}

//*************************************
//**** EDYTOWANIE ELEMENTU W STATE ****
//*************************************

export function edit_Node(childId, state, changes) {
    const context = findNodeContext(childId, state)
    if(!context.node) return
    if(!context.parent) return

    const update = createNode(changes);
    for(const key in update) {
        if(update[key] == null || Array.isArray(update[key])) delete update[key]
    }
    if(context.node.id != null) delete update.id


    return {
        ...context.node,
        ...update
    }
}

//*************************************
//*** ZMIANA POZYCJI ELEMENTU HTML ****
//*************************************

function moveNode (targetID, newIndex, state) {

    const context = findNodeContext(targetID, state)

    const parent = context.parent

    const currentIndex = parent.children.findIndex(node => node.id === targetID)

    const move = parent.children.splice(currentIndex, 1)[0]

    if (newIndex >= 0 && newIndex <= parent.children.length){
        parent.children.splice(newIndex, 0, move)       
    }
}