import { schema_css } from "./state.js";

export function generate_css() {
    const vars = Object.values(schema_css)
        .flat()
        .map(s => `${s.varName}: ${s.value};`)
        .join("\n");

    const rules = Object.keys(schema_css)
        .map(selector => {
            const props = schema_css[selector]
                .map(item => `${item.prop}: var(${item.varName});`)
                .join("\n");

            return `${selector} {\n${props}\n}`;
        })
        .join("\n\n");

    return `:root {\n${vars}\n}\n\n${rules}`;
}

export function update_css() {

    const css = generate_css();
    const iframe = document.getElementById("app");
    const iframeDoc = iframe?.contentDocument;
    const styleTag = iframeDoc?.getElementById("style-tag");

    if (!styleTag) return;
    styleTag.textContent = css;
    console.log(css);
}

