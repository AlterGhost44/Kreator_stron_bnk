//*************************************
//********** DANE PROJEKTU  ***********
//*************************************
export const state = {
  body: [
    {
      id: "body_html",
      type: "body",
      children: [
        {
          id: crypto.randomUUID(),
          type: "header",
          sorce_link: null,
          content: null,
          class_CSS: null,
          style: null,
          children: [
            {
              id: crypto.randomUUID(),
              type: "button",
              sorce_link: null,
              content: 'Przycisk 2',
              class_CSS: null,
              style: "border: 1px solid red;",
              children: [],
            },
            {
              id: crypto.randomUUID(),
              type: "button",
              sorce_link: null,
              content: 'Przycisk 1',
              class_CSS: null,
              style: "border: 1px solid blue;",
              children: [],
            },
          ],
        },
        {
          id: crypto.randomUUID(),
          type: "main",
          sorce_link: null,
          content: null,
          class_CSS: null,
          style: null,
          children: [],
        },
      ],
    },
  ],
  styles: [],
  assets: [],
  settings: [],
};