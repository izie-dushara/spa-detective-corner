import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor(params) {
    super(params);
    this.setTitle("Kumar");
  }

  async getHtml() {
    return `
    <h1>Dashboard</h1>
    <p>This is a sentence</p>
    `;
  }
}
