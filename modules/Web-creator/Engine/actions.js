import { state} from "./state.js";
import { render } from "./render.js";

const inputedType = document.getElementById("inputType");
const inputedContent = document.getElementById("inputContent");
const inputZone = document.getElementById("inputZone");

export function addNewSection() {
    state.push({id: Date.now(), type: inputedType.value, content: inputedContent.value, zone: inputZone.value});
    render();
}

export function deleteSection(id) {
    state = state.filter(item => item.id !== id);
}

export function editSection(id, newContent) {
    if (newContent.trim() === "") return;
    state = state.map(item => item.id === id ? {...item, content: newContent} : item);
    render();
}