"use client";
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
      className: "text-purple-500 dark:text-purple-500 text-8xl font-extrabold",
    },
  ];
  return (
    <div className="w-">
      <TypewriterEffect
        className="text-left "
        cursorClassName="bg-white"
        words={[words[0]]}
      />
      <TypewriterEffect className="text-left " words={[...words.slice(1, 3)]} />
    </div>
  );
}
