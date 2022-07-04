import React from "react";

const List = ({ keywordList, handleKeyword }) => {
  return (
    <ul className="list">
      {keywordList.map((item) => (
        <li key={item.id} onClick={() => handleKeyword(item.keyword)}>
          <span className="number">{item.id}</span>
          {item.keyword}
        </li>
      ))}
    </ul>
  );
};

const HistoryListView = ({ handleKeyword, historyData }) => {
  return (
    <div>
      {historyData.length > 0 ? (
        <List keywordList={historyData} handleKeyword={handleKeyword} />
      ) : (
        <div className="empty-box"> 최근 검색어가 없습니다.</div>
      )}
    </div>
  );
};

export default HistoryListView;
