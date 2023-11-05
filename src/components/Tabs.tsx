import React from "react";

import { TabsProps } from "@/types";

/**
 * Tabs component renders a list of tabs.
 *
 * @component
 * @example
 * const tabs = [{ id: '1', label: 'Tab 1' }, { id: '2', label: 'Tab 2' }];
 * const activeTab = { id: '1', label: 'Tab 1' };
 * <Tabs tabs={tabs} activeTab={activeTab} onTabClick={(tab) => console.log(tab)} />
 */
const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => (
  <div className="flex w-full">
    <ul role="tablist" className="flex-grow flex justify-between">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`tab ${tab.id === activeTab.id ? "tab-active" : ""}`}
          onClick={() => onTabClick(tab)}
          role="tab"
          aria-selected={tab.id === activeTab.id}
          tabIndex={tab.id === activeTab.id ? 0 : -1}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  </div>
);

export default Tabs;
