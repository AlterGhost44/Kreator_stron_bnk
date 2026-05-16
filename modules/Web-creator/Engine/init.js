//*************************************
//********** IMPORT FUNKCJI  **********
//*************************************

import { state } from "./data.js";
import { loadLocalStorage } from "./data_menagment.js";

//*************************************
//********** INITIALIZE WEBSITE **********
//*************************************

export function init() {
    loadLocalStorage();
}