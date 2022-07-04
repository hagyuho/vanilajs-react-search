import React, { useEffect, useState } from "react";
import storage from "../../storage/storage.js";

const List = ({ searchResultList }) => {
  return (
    <ul className="result">
      {searchResultList.map((item) => (
        <li key={item.id}>
          <img src={item.imageUrl} alt="" />
          <p> {item.name}</p>
        </li>
      ))}
    </ul>
  );
};

const SearchResultView = ({ keyword }) => {
  const [searchResultList, setSearchResultList] = useState([]);

  useEffect(() => {
    setSearchResultList(
      storage.productData.filter((item) => item.name.includes(keyword))
    );
  }, [keyword]);

  return (
    <div>
      {searchResultList.length > 0 ? (
        <List searchResultList={searchResultList} />
      ) : (
        <div className="empty-box"> 검색결과가 없습니다</div>
      )}
    </div>
  );
};

export default SearchResultView;
