//*************************************
//********* SZUKANIE INDEXU  **********
//*************************************

function findNodeContext (id, node, parent = null) {
    if (node.id === id) {
        return {
            node, 
            parent
        }
    }

    for (const child of node.children) {
        const found = findNodeContext(id, child, node)
            if (found) {
                return found
            }
    }
    return null;
}

//*************************************
//******** TWORZENIE ELEMENTU  ********
//*************************************

function createNode (config) {
    for(const key in config) {
        if(config[key] == null) {
            delete config[key]
        }
    }
    
    const schemaNode = {
        id: crypto.randomUUID(),
        children: [],
        type: null,
        sorce_link: null,
        content: null,
        class_CSS: null
    };

    return {
        ...schemaNode,
        ...config
    }

}

//*************************************
//**********   **********
//*************************************

function GenerateCSS () {
    const vars = Object.values(style_css).flat().filter(item => item.varName).map(s =>  `${s.varName}: ${s.value};`)
        .join("\n");

    
    const rules = Object.keys(style_css).map(selector => { const props = style_css[selector].map(item => item.varName === "" ? `${item.prop}: ${item.value};` : `${item.prop}: var(${item.varName});`).join("\n");
                                                        return `${selector} {\n${props}\n};`;})
        .join("\n\n");

   return `:root {\n${vars}\n\n\n${rules}\n}`;

}

function updater_css () {
    const css = GenerateCSS ();
    const iframedoc = document.getElementById('preview').contentDocument;

    iframedoc.getElementById('dynamic-style').textContent = css;
}