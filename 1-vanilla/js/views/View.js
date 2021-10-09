const tag = "[View]";

export default {
  init(el) {
    if (!el) throw el;
    this.el = el;
    return this;
  },

  // 이벤트와 핸들러를 인자로 받아서 엘리먼트에서 이벤트가 발생했을때 핸들러 실행
  on(event, handler) {
    this.el.addEventListener(event, handler);
    return this;
  },

  // 스스로 이벤트를 방출함. 커스텀이벤트는 이름과 디테일 데이터 객체를 받아서 엘리먼트에 이벤트를 방출
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);
    return this;
  },

  hide() {
    this.el.style.display = "none";
    return this;
  },

  show() {
    this.el.style.display = "";
    return this;
  },
};
