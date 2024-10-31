import {
  BellDot,
  BellRing,
  BriefcaseBusiness,
  Dot,
  HandCoins,
  LayoutDashboard,
  LogOut,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const MainMenu = () => {
  return (
    <div className="space-y-5 text-sm">
      <p className="text-sm">Main Menu</p>
      <Link
        href={"/dashboard"}
        className="flex text-white gap-2 items-center bg-white/10 p-1.5 rounded-md"
      >
        <LayoutDashboard width={18} />
        <p className="text-sm">Dashboard</p>
      </Link>
      <Link
        href={"/job-requests"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <BriefcaseBusiness className="text-purple-700" width={18} />
        <p>Jobs</p>
      </Link>
      <Link
        href={"/blogAdmin"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <Newspaper className="text-purple-700" width={18} />
        <p>Blogs</p>
      </Link>
      <Link
        href={"/donations"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <HandCoins className="text-purple-700" width={18} />
        <p>Donations</p>
      </Link>
      <div className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 ">
        <BellRing className="text-purple-700" width={18} />
        <Link href={"/notifications"} className="flex items-center gap-5 ">
          <p>Notifications</p>
          <div className="rounded-full bg-red-700 h-4 w-4 flex items-center justify-center">
            <span>1</span>
          </div>
        </Link>
      </div>
      <Link
        href={"/"}
        className="flex items-center rounded-md p-1.5 gap-4 hover:bg-white/10 "
      >
        <LogOut className="text-purple-700 " width={18} />
        <p>Logout</p>
      </Link>
    </div>
  );
};

export default MainMenu;
