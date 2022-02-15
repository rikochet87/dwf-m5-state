import { state } from "./state";

class Footer extends HTMLElement {
  shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    state.subscribe(() => {
      this.syncWithState();
    });
    this.syncWithState();
  }
  syncWithState() {
    const lastState = state.getState();
    this.render();
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
customElements.define("my-footer", Footer);
