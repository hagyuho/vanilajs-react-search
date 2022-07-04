import React, { useState } from "react";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근검색어",
};

const TabItem = ({ item, selected, handleSelected }) => {
  return (
    <li
      className={item.tabType === selected ? "active" : ""}
      onClick={() => handleSelected(item.tabType)}
    >
      {item.tabLabel}
    </li>
  );
};

const TabView = ({ selectedTabType, handleSelectedTabType }) => {
  return (
    <div>
      <ul className="tabs">
        {Object.values(TabType)
          .map((tabType) => ({
            tabType: tabType,
            tabLabel: TabLabel[tabType],
          }))
          .map((item, index) => (
            <TabItem
              key={index}
              item={item}
              selected={selectedTabType}
              handleSelected={handleSelectedTabType}
            />
          ))}
      </ul>
    </div>
  );
};

export default TabView;
