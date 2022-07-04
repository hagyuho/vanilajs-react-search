import React, { useRef } from "react";
import { createPastDate } from "../../storage/helpers";

const SearchFormView = ({ handleKeyword, handleHistoryData }) => {
  const textRef = useRef(null);
  // const id = useRef(4);

  const handleSubmitWithRef = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const text = textRef.current.value;
    handleKeyword(text);
    const newHistory = {
      id: 4,
      keyword: text,
      data: createPastDate(4),
    };
    // id++;
    handleHistoryData(newHistory);
  };

  // const handleChange = (e) => {
  //   handleKeyword(e.target.value);
  // };

  const handleReset = () => {
    handleKeyword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitWithRef}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          autoFocus
          ref={textRef}
          // onChange={handleChange}
        />
        <button
          type="reset"
          className="btn-reset"
          onClick={handleReset}
        ></button>
      </form>
    </div>
  );
};

export default SearchFormView;
