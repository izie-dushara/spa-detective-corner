import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor(params) {
    super(params);
    this.setTitle("Suspects");
  }

  async getHtml() {
    return `
    <h1>Suspects</h1>
    <p>This is a sentence</p>
    <a href="/suspects/1" class="content__link" data-link>Suspect #1</a>
    `;
  }
}
