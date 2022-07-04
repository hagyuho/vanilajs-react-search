import { useEffect, useState } from "react";
import "./App.css";
import {
  HistoryListView,
  KeywordListView,
  SearchFormView,
  SearchResultView,
  TabView,
} from "./components";
import { TabType } from "./components/TabView";
import storage from "./storage/storage";

function App() {
  //state
  const [keyword, setKeyword] = useState("");
  const [selectedTabType, setSelectedTabType] = useState(TabType.KEYWORD);
  const [historyData, setHistoryData] = useState(storage.historyData);

  // method
  const handleKeyword = (text) => {
    setKeyword(text);
  };
  const handleSelectedTabType = (value) => {
    setSelectedTabType(value);
  };
  const handleHistoryData = (newHistory) => {
    setHistoryData([...historyData, newHistory]);
  };

  return (
    <div>
      <header>
        <h2 className="container"> 검색</h2>
      </header>
      <div className="container">
        <SearchFormView
          handleKeyword={handleKeyword}
          keyword={keyword}
          handleHistoryData={handleHistoryData}
        />
      </div>
      <div className="content">
        {keyword.length > 0 ? (
          <SearchResultView keyword={keyword} />
        ) : (
          <>
            <TabView
              selectedTabType={selectedTabType}
              handleSelectedTabType={handleSelectedTabType}
            />
            {selectedTabType === "KEYWORD" ? (
              <KeywordListView handleKeyword={handleKeyword} />
            ) : (
              <HistoryListView
                handleKeyword={handleKeyword}
                historyData={historyData}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
