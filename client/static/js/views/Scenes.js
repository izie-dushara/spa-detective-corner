import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Scenes");
  }

  async getHtml() {
    return `
    <h1>Scenes</h1>
    <p>This is a sentence</p>
    `
  }
}