import { state, type_list } from "./state.js";
import { preview, zoneMap } from "./init.js";

export function render() {
    Object.values(zoneMap).forEach((zone) => {
        zone.replaceChildren();
    });

    state.forEach(item => {
        const zone = zoneMap[item.zone];
        const type = type_list[item.type];

        const section = preview.iframeDoc.createElement(type);

    section.textContent = item.content;
    zone.appendChild(section);
    });
}
