export default {
  data: [
    { keyword: "검색기록2", date: "12.03" },
    { keyword: "검색기록1", date: "12.02" },
    { keyword: "검색기록0", date: "12.01" },
  ],

  // 그냥 데이터를 리턴한다. promise를 이용한 이유는 서버에서 비동기로 데이터를 가져와야하는 경우가 있기 때문.
  list() {
    return Promise.resolve(this.data);
  },

  // 추가될 검색어를 받아, 데이터의 유무를 체크하고, 날짜를 추가하여 등록

  add(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) return;
    if (this.data.some((item) => item.keyword === keyword)) {
      this.remove(keyword);
    }

    const date = "12.31";
    this.data = [{ keyword, date }, ...this.data];
  },

  // 키워드를 받아서 그 키워드인 것을 삭제
  remove(keyword) {
    this.data = this.data.filter((item) => item.keyword !== keyword);
  },
};
