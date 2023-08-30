import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Suspects");
  }

  async getHtml() {
    return `
    <h1>Suspects</h1>
    <p>This is a sentence</p>
    `;
  }
}
