import DOMMap from "../index.js";

const domMap = new DOMMap(document.getElementById("root"));

domMap.insert(
  DOMMap.createElem(
    "div",
    {
      style: `
    width: max-content; 
    heigth: 200px; 
    padding: .5rem;
    background: teal;
    color: white;
    display: flex;
    justify-content: center;
    `,
    },
    DOMMap.createElem("h1", null, "DOMMapp")
  )
);
domMap.insert(DOMMap.createElem("h2", null, "Why use DOMMap"));
domMap.insert(
  DOMMap.createElem(
    "ul",
    null,
    DOMMap.createElem("li", null, "it's simple"),
    DOMMap.createElem("li", null, "it's flexible"),
    DOMMap.createElem("li", null, "it's highly robust"),
    DOMMap.createElem("li", null, "it is an object oriented solution ")
  )
);
