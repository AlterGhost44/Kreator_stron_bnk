//*************************************
//********** IMPORT FUNKCJI  **********
//*************************************

import { init } from "./init.js";
import { autoSave } from "./data_menagment.js";
import { toggleMenu } from "../UI-UX/scripts/ui-controls.js";
import { eventFocus } from "./utilities.js";

//*************************************
//********** INITIALIZE WEBSITE **********
//*************************************

init();
autoSave();

//*************************************
//********** MENU FUNCTIONS ***********
//*************************************

document.querySelector('#menu-btn').addEventListener('click', () => toggleMenu('right'));
document.querySelector('#tool-btn').addEventListener('click', () => toggleMenu('left'));


//*************************************
//********** CRUD FUNCTIONS ***********
//*************************************

app.contentDocument.addEventListener('click', (event) => {
    const target = event.target;

    eventFocus(target);
});
