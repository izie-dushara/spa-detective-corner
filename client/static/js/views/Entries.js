import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor() {
    super();
    this.setTitle("Entries");
  }

  async getHtml() {
    return `
    <h1>Entries</h1>
    <p>This is a sentence</p>
    `
  }
}