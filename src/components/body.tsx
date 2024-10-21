"use client";
import React from "react";
import { Button } from "./ui/button";
import { animate, motion } from "framer-motion";
import Text from "./text";
import { WelcomeText } from "./welcomeText";

const Body = () => {
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div id="top" className="flex flex-col p-16 h-full">
      <WelcomeText />
      <div className="my-7 flex gap-4">
        <Button
          data-aos="zoom-in-up"
          variant={"ghost"}
          className="transition dark:bg-purple-900 dark:text-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded-full border-2 border-black hover:bg-black hover:text-white"
        >
          Copywriter
        </Button>
        <Button
          data-aos="zoom-in-up"
          variant={"ghost"}
          className="transition dark:bg-purple-900 dark:text-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded-full border-2 border-black  hover:bg-black hover:text-white"
        >
          Ghostwriter
        </Button>
        <Button
          data-aos="zoom-in-up"
          variant={"ghost"}
          className="transition dark:bg-purple-900 dark:text-white ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded-full border-2 border-black  hover:bg-black hover:text-white"
        >
          Essay writer
        </Button>
      </div>
      <Text />
    </div>
  );
};

export default Body;
