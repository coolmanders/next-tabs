import React from "react";

import { TabsProps } from "@/types";

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => (
  <nav className="flex w-full">
    <ul className="flex-grow flex justify-between">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`tab ${tab.id === activeTab.id ? "tab-active" : ""}`}
          onClick={() => onTabClick(tab)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  </nav>
);

export default Tabs;
