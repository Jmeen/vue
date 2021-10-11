import FormView from "../views/FormView.js";

const tag = "[MainController]";

export default {
  init() {
    console.log(tag, "init()");
    FormView.setup(document.querySelector("form"))
      .on("@submit", (e) => this.onSubmit(e.detail.input))
      .on("@reset", (e) => this.onResetForm());
  },

  onSubmit(event, input) {
    event.preventDefault();

    console.log(tag, "onsubmit", input);
  },

  onResetForm() {
    console.log(tag, "onREsetForm");
  },
};
