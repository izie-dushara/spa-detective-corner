import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("Viewing Scenes");
  }

  async getHtml() {
    // const post = postsData[this.postId];
    // if (post) {
    return `
    <h1>${post.title}</h1>
    <p>You are viewing the post #${this.postId}</p>
    <p>${post.content}</p>
    
    `;
    // }else{
    //   return `<p> Post Not Found</p>`
    // }
  }
}