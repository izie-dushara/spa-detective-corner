export default class {
  // For sub-route
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
