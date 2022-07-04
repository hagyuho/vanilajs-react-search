import React from "react";
import storage from "../../storage/storage";

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

const KeywordListView = ({ handleKeyword }) => {
  const keywordList = storage.keywordData;
  return (
    <div>
      {keywordList.length > 0 ? (
        <List keywordList={keywordList} handleKeyword={handleKeyword} />
      ) : (
        <div className="empty-box"> 추천 검색어가 없습니다.</div>
      )}
    </div>
  );
};

export default KeywordListView;
