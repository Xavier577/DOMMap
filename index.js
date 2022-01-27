export default class DOMMap {
  constructor(container) {
    this.container = container;
  }

  insert() {
    if (arguments) {
      for (let idx in arguments) {
        this.container.append(arguments[idx]);
      }
    }
  }

  static createElem(tagName, property, children) {
    const elem = document.createElement(tagName);
    if (property) {
      for (let attribute in property) {
        elem.setAttribute(attribute, property[attribute]);
      }
    }
    for (let idx = 2; idx < arguments.length; idx++) {
      if (arguments[idx]) {
        elem.append(arguments[idx]);
      }
    }
    return elem;
  }
}
