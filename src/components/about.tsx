"use client";
import React, { forwardRef } from "react";
import { Button } from "./ui/button";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="bg-black text-white pb-20">
        <div className=" flex justify-center p-9">
          <Button
            id="1"
            variant={"ghost"}
            className="rounded-full px-8 text-white border-2 text-xl"
          >
            About Me
          </Button>
        </div>

        <div className="mx-auto justify-center text-center p-1.5 text-xl leading-9">
          <p>
            I'm a dedicated writer with a passion for creating quality content,
            <br />
            uniquely tailored to engage readers, enhance brand presence and
            drive positive results. <br /> My approach involves ensuring that
            each piece resonates with your business goals and objectives.
            <br /> Whether you require engaging content for social media posts
            or advertisement purposes, <br /> I provide services clearly
            autographed with a touch of excellence and creativity.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
