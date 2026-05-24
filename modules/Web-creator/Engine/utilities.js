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
        class_CSS: null,
        style: null
    };
    
    return {
        ...schemaNode,
        ...config
    }

}

//*************************************
//**********   **********
//*************************************

function GenerateCSS () {}

function updater_css () {}