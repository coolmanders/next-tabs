import React, {
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useState,
} from "react";

import Tabs from "@/components/Tabs";
import Arrow from "@/components/Arrow";

import { Tab, direction } from "@/types";

const Page = () => {
  const tabs: Tab[] = useMemo(
    () => [
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
    ],
    []
  );

  const [isCanScrollLeft, setIsCanScrollLeft] = useState(false);
  const [isCanScrollRight, setIsCanScrollRight] = useState(false);

  const [firstVisibleTabIndex, setFirstVisibleTabIndex] = useState(0);

  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [visibleTabs, setVisibleTabs] = useState<Tab[]>([]);

  const tabsContainerRef = useRef<HTMLDivElement>(null);

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

  const updateVisibleTabs = useCallback(() => {
    if (!tabsContainerRef.current) return;
    const containerWidth = tabsContainerRef.current.clientWidth;
    const minTabWidthPercent = 0.15;

    const minTabWidth = containerWidth * minTabWidthPercent;
    const maxVisibleTabs = Math.floor(containerWidth / minTabWidth);

    setIsCanScrollLeft(firstVisibleTabIndex > 0);
    setIsCanScrollRight(firstVisibleTabIndex + maxVisibleTabs < tabs.length);
    setVisibleTabs(
      tabs.slice(firstVisibleTabIndex, maxVisibleTabs + firstVisibleTabIndex)
    );
  }, [tabs, firstVisibleTabIndex]);

  useEffect(() => {
    updateVisibleTabs();
    window.addEventListener("resize", updateVisibleTabs);

    return () => {
      window.removeEventListener("resize", updateVisibleTabs);
    };
  }, [updateVisibleTabs]);

  return (
    <div className="tabs">
      <Arrow
        direction="left"
        onClick={() => scrollTabs("left")}
        isDisabled={!isCanScrollLeft}
      />
      <div ref={tabsContainerRef} className="flex-grow">
        <Tabs
          tabs={visibleTabs}
          activeTab={activeTab}
          onTabClick={setActiveTab}
        />
      </div>
      <Arrow
        direction="right"
        onClick={() => scrollTabs("right")}
        isDisabled={!isCanScrollRight}
      />
    </div>
  );
};

export default Page;
