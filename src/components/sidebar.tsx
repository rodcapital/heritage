import { Ellipsis, LayoutDashboard } from "lucide-react";
import React from "react";
import Find from "./ui/search";
import MainMenu from "./mainmenu";

const Sidebar = () => {
  return (
    <div className="fixed z-50 h-screen p-5 space-y-4 text-white bg-[#030712] shadow-2xl ">
      <div className="flex flex-col gap-5">
        <p className="text-lg pt-6">Welcome Back!</p>
        <Find />
      </div>
      <div className="text-white pt-10 ">
        <MainMenu />
      </div>
    </div>
  );
};

export default Sidebar;
