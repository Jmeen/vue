import FormView from "../views/FormView.js";
import ResultView from "../views/ResultView.js";
import SearchModel from "../models/SearchModel.js";
import TabView from "../views/tabView.js";

const tag = "[MainController]";

export default {
  init() {
    console.log(tag, "init()");
    FormView.setup(document.querySelector("form"))
      .on("@submit", (e) => this.onSubmit(e.detail.input))
      .on("@reset", (e) => this.onResetForm());

    TabView.setup(document.querySelector("#tabs"));
    ResultView.setup(document.querySelector("#search-result"));

    this.selectedTab = "추천 검색어";
    this.renderView();
  },

  search(query) {
    console.log(tag, "search()", query);
    SearchModel.list(query).then((data) => {
      this.onsearchResult(data);
    });
  },

  renderView() {
    console.log(tag, "renderView");
    TabView.setActionTab(this.selectedTab);
    ResultView.hide();
  },
  onSubmit(input) {
    console.log(tag, "onSubmit()", input);
    this.search(input);
  },

  onResetForm() {
    console.log(tag, "onResetForm()");
    ResultView.hide();
  },

  onsearchResult(data) {
    ResultView.render(data);
  },
};
