import React from "react";
import { FlipWords } from "../ui/flipWords";

export function Explore() {
  const words = ["Stories", "Insights", "Ideas", "News"];

  return (
    <div className="px-4 leading-6">
      <h1 className="text-7xl"> Welcome!</h1>
      <div className="text-7xl font-normal text-neutral-600 dark:text-neutral-400">
        Explore Trending
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
