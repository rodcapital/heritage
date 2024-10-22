import React, { useRef } from "react";
import { Button } from "./ui/button";
import Links from "./Links";
import { Connect } from "./connect";
import { ModeToggle } from "./ui/modeToggle";

const Header = () => {
  return (
    <div
      id="header"
      className="flex items-center gap-3 p-2 shadow-sm rounded-full w-[900px] mx-auto justify-between border-[1px] relative"
    >
      <div className="flex gap-2 items-center">
        <h1 className="text-xl font-bold px-3">Heritage</h1>
      </div>
      <div>
        <div className="space-x-9">
          <Links />
        </div>
      </div>
      <Connect />
    </div>
  );
};

export default Header;
