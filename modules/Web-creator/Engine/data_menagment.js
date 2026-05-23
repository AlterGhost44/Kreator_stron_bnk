//*************************************
//********** IMPORT FUNKCJI  **********
//*************************************

import { state } from "./data.js"

//*************************************
//******** ZAPIS LOCALSTORAGE  ********
//*************************************

export function saveLocalStorage(state) {
    localStorage.setItem('HTML', JSON.stringify(state))  
}

//*************************************
//******* WCZYTANIE LOCALSTORAGE ******
//*************************************

export function loadLocalStorage() {
    const loaded_save = JSON.parse(localStorage.getItem('HTML'))

    Object.assign(state, loaded_save)
}

//*************************************
//****** AUTOSAVE LOCALSTORAGE  *******
//*************************************
let timer;
export function autoSave () {
    clearTimeout(timer)
    timer = setTimeout(() => {
        saveLocalStorage()
    }, 200)
}