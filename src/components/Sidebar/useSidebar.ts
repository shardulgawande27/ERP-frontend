import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ISidebarItem } from "./sidebar.types";
import { sidebarData } from "@/utils/sidebar";

const useSidebar = () => {
  const pathname = usePathname();
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});

  const isActiveParent = (item: ISidebarItem) =>
    pathname === item.parent.link ||
    (item.children?.some((child) => pathname.includes(child.link)) ?? false);

  useEffect(() => {
    const updatedOpenStates = sidebarData.reduce((acc, item, index) => {
      acc[index] = isActiveParent(item);
      return acc;
    }, {} as Record<number, boolean>);
    setOpenStates(updatedOpenStates);
  }, [pathname]);

  const handleItemClick = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return { openStates, handleItemClick, isActiveParent, pathname };
};

export default useSidebar;
