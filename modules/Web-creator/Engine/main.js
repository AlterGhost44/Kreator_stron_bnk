import { render } from "./render.js";
import { addNewSection } from "./actions.js";
import { init } from "./init.js";

document.getElementById("addNewSection").addEventListener("click", addNewSection);
init(() => { render(); });
