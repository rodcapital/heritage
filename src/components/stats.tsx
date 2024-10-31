import React from "react";
import { Card, CardContent } from "./ui/card";
import { BlogChart } from "./blogChart";
import { HomeChart } from "./HomeChart";
import { Donations } from "./donations";
import { Visitors } from "./visitors";

const Stats = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6">
        <BlogChart />
        <HomeChart />
        <Donations />
      </div>

      <Visitors />

      <p className="mt-6 text-sm text-right">
        © 2024 Heritage. All rights reserved.
      </p>
    </div>
  );
};

export default Stats;
