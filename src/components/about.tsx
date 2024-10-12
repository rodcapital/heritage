"use client";
import React, { forwardRef } from "react";
import { Button } from "./ui/button";
import { Element } from "react-scroll";
import { AboutCarousel } from "./aboutCarousel";

const About = () => {
  return (
    <Element name="about" className="">
      <div className="bg-black text-white pb-16 text-center">
        <div className=" flex justify-center items-center py-9">
          <Button
            id="1"
            variant={"ghost"}
            className="rounded-full px-8 text-white border-2 text-xl"
          >
            About Me
          </Button>
        </div>

        <AboutCarousel />
      </div>
    </Element>
  );
};

export default About;
