import Link from "next/link";
import React from "react";
import SideBarMenu from "./SideBarMenu";

const Sidebar = () => {
  return (
    <aside className="pt-5 flex-2 md:block hidden flex-col overflow-hidden md:min-w-64 w-64 min-h-screen h-screen sticky top-0 bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col p-3 flex-1 justify-between">
        <nav className="space-y-6">
          <div className="flex flex-col gap-4">
            <SideBarMenu />
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
