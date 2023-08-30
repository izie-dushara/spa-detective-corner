import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor(params) {
    super(params);
    this.setTitle("Victims");
  }

  async getHtml() {
    return `
    <h1>Victims</h1>
    <p>This is a sentence</p>
    `;
  }
}
