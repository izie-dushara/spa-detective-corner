import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Witnesses");
  }

  async getHtml() {
    return `
    <h1>Witnesses</h1>
    <p>This is a sentence</p>
    `
  }
}