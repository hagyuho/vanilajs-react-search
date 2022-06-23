import { createPastDate } from "./helpers.js";
import { TabType } from "./views/TabView.js";

const tag = "[store]";

export default class Store {
  constructor(storage) {
    console.log(tag);
    if (!storage) throw "no storage";

    this.storage = storage;

    this.searchKeyword = "";
    this.searchResult = [];
    this.selectedTab = TabType.KEYWORD;
    this.id = 4;
  }

  search(keyword) {
    this.searchKeyword = keyword;
    this.searchResult = this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }

  getKeywordList() {
    return this.storage.keywordData;
  }

  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }

  _sortHistory(history1, history2) {
    return history1.date > history2.date;
  }

  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (item) => item.keyword !== keyword
    );
  }

  addHistory(keyword) {
    keyword = keyword.trim();
    if (!keyword) {
      return;
    }
    const hasHistory = this.storage.historyData.some(
      (history) => history.keyword === keyword
    );
    if (hasHistory) {
      this.removeHistory(keyword);
    }
    this.storage.historyData = [
      ...this.storage.historyData,
      {
        id: this.id,
        keyword: keyword,
        date: createPastDate(this.id),
      },
    ];
    this.plusId();
  }

  plusId() {
    this.id = this.id + 1;
  }
}
