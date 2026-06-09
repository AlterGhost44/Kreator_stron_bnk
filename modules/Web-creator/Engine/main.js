//*************************************
//********** IMPORT FUNKCJI  **********
//*************************************

import { init } from "./init.js";
import { autoSave } from "./data_menagment.js";
import { toggleMenu } from "../UI-UX/scripts/ui-controls.js";

//*************************************
//********** INITIALIZE WEBSITE **********
//*************************************

//init();
//autoSave();
//menuToggle();
//toolbarVisible();

//*************************************
//********** MENU FUNCTIONS ***********
//*************************************

document.querySelector('#menu-btn').addEventListener('click', () => toggleMenu('right'));
document.querySelector('#tool-btn').addEventListener('click', () => toggleMenu('left'));