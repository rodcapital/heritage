import DashboardBody from "@/components/dashboardBody";
import { HomeChart } from "@/components/HomeChart";
import Stats from "@/components/stats";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col p-6 gap-9">
      <DashboardBody />
      <div className="flex">
        <Stats />
      </div>
    </div>
  );
};

export default page;
