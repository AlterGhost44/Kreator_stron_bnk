//*************************************
//********** IMPORT FUNKCJI  **********
//*************************************

import { state } from "./data.js";
import { loadLocalStorage } from "./data_menagment.js";

//*************************************
//********** INITIALIZE WEBSITE **********
//*************************************
//const iframe = document.getElementById('preview').contentDocument;
export function init() {
	//loadLocalStorage();
	renderInitialState(state.body, document.getElementById('app').contentDocument.body);
}

export function renderInitialState(nodes, parent) {
	nodes.forEach(node => {

		const element = document.createElement(node.type);

		element.dataset.id = node.id;
		if(node.content) element.textContent = node.content;

		if(node.source_link) element.src = node.source_link;

		parent.appendChild(element);

		if (node.children.length > 0) {
			renderInitialState(node.children, element);
		}
	});
}