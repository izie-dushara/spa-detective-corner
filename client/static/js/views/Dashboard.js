import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Kumar");
  }

  async getHtml() {
    return `
    <h1>Dashboard</h1>
    <p>This is a sentence</p>
    `;
  }
}
