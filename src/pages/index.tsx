import React, { useEffect, useState } from "react";

import Tabs from "@/components/Tabs";
import Arrow from "@/components/Arrow";

import { Tab, direction } from "@/types";

const tabs: Tab[] = [
  { label: "My Details", url: "/my-details", id: "my-details" },
  { label: "Profile", url: "/profile", id: "profile" },
  { label: "Password", url: "/password", id: "password" },
  { label: "Team", url: "/team", id: "team" },
  { label: "Plan", url: "/plan", id: "plan" },
  { label: "Billing", url: "/billing", id: "billing" },
  { label: "Email", url: "/email", id: "email" },
  { label: "Notifications", url: "/notifications", id: "notifications" },
  { label: "Integrations", url: "/integrations", id: "integrations" },
  { label: "API", url: "/api", id: "api" },
  { label: "Wallet", url: "/wallet", id: "wallet" },
  { label: "VIP", url: "/vip", id: "vip" },
];

const Page = () => {
  const [firstVisibleTabIndex, setFirstVisibleTabIndex] = useState(0);

  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [visibleTabs, setVisibleTabs] = useState<Tab[]>([]);

  const scrollTabs = (direction: direction) => {
    if (direction === "left") {
      setFirstVisibleTabIndex((prevValue) => Math.max(0, prevValue - 1));
    }
    if (direction === "right") {
      setFirstVisibleTabIndex((prevValue) =>
        Math.min(tabs.length - visibleTabs.length, prevValue + 1)
      );
    }
  };

  useEffect(() => {
    const maxVisibleTabs = 6;

    setVisibleTabs(
      tabs.slice(firstVisibleTabIndex, maxVisibleTabs + firstVisibleTabIndex)
    );
  }, [firstVisibleTabIndex]);

  return (
    <nav className="tabs">
      <Arrow
        direction="left"
        onClick={() => scrollTabs("left")}
        isDisabled={firstVisibleTabIndex === 0}
      />
      <div className="flex-grow">
        <Tabs
          tabs={visibleTabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>
      <Arrow
        direction="right"
        onClick={() => scrollTabs("right")}
        isDisabled={firstVisibleTabIndex + visibleTabs.length >= tabs.length}
      />
    </nav>
  );
};

export default Page;
