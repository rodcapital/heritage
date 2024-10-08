"use client";
import { ChevronUp } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { animateScroll } from "react-scroll";

const BackTop = () => {
  return (
    <div className="flex justify-end my-2 mx-1 right-4 fixed bottom-2 animate-bounce ">
      <Button
        onClick={() => {
          animateScroll.scrollToTop({
            duration: 2000,
            smooth: true,
          });
        }}
        className="bg-white text-black p-1 rounded-full h-full hover:bg-black hover:text-white"
      >
        <ChevronUp />
      </Button>
    </div>
  );
};

export default BackTop;
