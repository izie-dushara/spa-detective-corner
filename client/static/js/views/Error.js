import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Error");
  }

  async getHtml() {
    return `
    <h1>This is an error</h1>
    <p>This is a paragraph</p>
    `;
  }
}
