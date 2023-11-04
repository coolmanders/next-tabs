export interface Tab {
  id: string;
  label: string;
  url: string;
}

export interface TabsProps {
  activeTab: Tab;
  onTabClick: (tab: Tab) => void;
  tabs: Tab[];
}

export type direction = "left" | "right";

export interface ArrowProps {
  direction: direction;
  isDisabled?: boolean;
  onClick: () => void;
}
