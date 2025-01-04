"use client";

import Link from "next/link";
import { sidebarData } from "../../utils/sidebar";
import { Iitems, ISidebarItem } from "./sidebar.types";
import Image from "next/image";
import logo from "../../../public/assets/logo/logo.jpg";
import useSidebar from "./useSidebar";

const Sidebar = () => {
  const { openStates, isActiveParent, handleItemClick, pathname } =
    useSidebar();

  const RenderItems = (item: ISidebarItem, key: number) => {
    const isOpen = openStates[key];
    const isActive = isActiveParent(item);

    return (
      <li
        key={`sidebar-${key}`}
        onClick={() => item.children && handleItemClick(key)}
      >
        <button
          className={`block w-full text-left  px-4 hover:text-[#4153F0] ${
            isActive ? "text-[#4153F0]" : ""
          }`}
        >
          <Link
            href={item.parent.link ? item.parent.link : "#"}
            className={`block ${item.children ? "w-full" : ""}`}
          >
            {item.parent.label}
          </Link>
        </button>
        {item.children && (
          <ul
            className={`pl-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            {item.children.map((child: Iitems, childKey: number) => {
              const isChildActive = pathname.includes(child.link);

              return (
                <li key={`sidebar-child-${childKey}`}>
                  <Link
                    href={child.link}
                    className={`block py-2 px-4 hover:text-[#4153F0] ${
                      isChildActive ? "text-[#4153F0]" : ""
                    }`}
                  >
                    {child.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="w-64 bg-[#FFFFFF] text-black min-h-screen border-r border-[#E4E4E7]">
      <div className="p-4 flex justify-center">
        <Image src={logo} alt="logo" />
      </div>

      <ul className="space-y-2 font-normal flex flex-col gap-[10px]">
        {sidebarData.map(RenderItems)}
      </ul>
    </div>
  );
};

export default Sidebar;
