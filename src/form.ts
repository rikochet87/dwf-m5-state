import { state } from "./state";

class Myform extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.render();
  }
  connectedCallback(){
    const form = this.shadow.querySelector(".form")
    console.log(form);
  }
  render() {
    this.shadow.innerHTML = `
        <form class ="form">
        <input name="text"/>
        <button>+<button>
        </form>
        `;
  }
}
customElements.define("my-form", Myform);
