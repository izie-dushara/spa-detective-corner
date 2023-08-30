import TemplateView from "./TemplateView.js";

export default class extends TemplateView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("Viewing Suspect");
  }

  async getHtml() {
    // const post = postsData[this.postId];
    // if (post) {
      // <h1>${post.title}</h1>
      // <p>You are viewing the post #${this.postId}</p>
      // <p>${post.content}</p>
      // <h1>${post.title}</h1>
    return `
    <p>You are viewing the post</p>
    <p>This is the post</p>
    
    `;
    // }else{
    //   return `<p> Post Not Found</p>`
    // }
  }
}