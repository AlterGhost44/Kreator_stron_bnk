export const zoneMap = {
    header: null,
    main: null,
    footer: null
};

export const preview = {
    iframe: null,
    iframeDoc: null
};

export function init(onReady) {
    const app = document.getElementById("app");

    function boot() {
        preview.iframe = document.getElementById("app");
        preview.iframeDoc = preview.iframe.contentDocument;
        zoneMap.header = preview.iframeDoc.getElementById("header");
        zoneMap.main = preview.iframeDoc.getElementById("main");
        zoneMap.footer = preview.iframeDoc.getElementById("footer");
        onReady?.();
    };

    if (app.contentDocument) {
        boot();
    } else {
        app.addEventListener("load", boot);
    }
}