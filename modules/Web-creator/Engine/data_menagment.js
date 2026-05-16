//*************************************
//********** IMPORT FUNKCJI  **********
//*************************************

import { state, style_css } from "data.js"

//*************************************
//******** ZAPIS LOCALSTORAGE  ********
//*************************************

function saveLocalStorage(state) {
    localStorage.setItem('HTML', JSON.stringify(state))  
}

//*************************************
//******* WCZYTANIE LOCALSTORAGE ******
//*************************************

function loadLocalStorage() {
    const loaded_save = JSON.parse(localStorage.getItem('HTML'))

    Object.assign(state, loaded_save)
}

//*************************************
//****** AUTOSAVE LOCALSTORAGE  *******
//*************************************

function autoSave () {
    clearTimeout(timer)
    let timer = setTimeout(() => {
        saveLocalStorage()
    }, 200)
}