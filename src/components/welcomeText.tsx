"use client";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriterEffect";

export function WelcomeText() {
  const words = [
    {
      text: "HELLO",
      className: "dark:text-white text-8xl font-extrabold",
    },
    {
      text: "I'M",
      className: "dark:text-white text-8xl font-extrabold",
    },

    {
      text: "HERITAGE",
      className: "text-purple-900 dark:text-purple-500 text-8xl font-extrabold",
    },
  ];
  return (
    <div>
      <div>
        <TypewriterEffect
          className="text-left"
          cursorClassName="bg-white dark:bg-[#030712]"
          words={[words[0]]}
        />
        <TypewriterEffect
          className="text-left"
          cursorClassName="h-16 bg-purple dark:bg-purple"
          words={[...words.slice(1, 3)]}
        />
      </div>
    </div>
  );
}
