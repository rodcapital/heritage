"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { animate, motion } from "framer-motion";
import Text from "./text";
import { WelcomeText } from "./welcomeText";
import { Connect } from "./connect";

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
    <div className="flex items-center">
      <div id="top" className="flex gap-4 flex-col p-16 h-full">
        <WelcomeText />
        <div>
          <Button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="bg-black text-white dark:bg-purple-900 rounded-full px-8"
          >
            <span className="text-lg">Writer</span>
          </Button>
        </div>
        <Text />
      </div>
      <img
        src={`/images/Look festive (1).png`}
        height={300}
        width={300}
        alt=""
        className="pb-28"
      />
    </div>
  );
};

export default Body;
