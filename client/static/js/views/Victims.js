import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Victims");
  }

  async getHtml() {
    return `
    <h1>Victims</h1>
    <p>This is a sentence</p>
    `;
  }
}
