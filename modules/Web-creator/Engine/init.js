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
	loadLocalStorage();
}

function renderInitialState(nodes) {
	nodes.forEach(node => {
		console.dir(node);
		if (node.children.length > 0) {
			renderInitialState(node.children);
		}
	});
}

renderInitialState(state.body);