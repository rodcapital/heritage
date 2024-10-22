"use client";
import React, { forwardRef } from "react";
import { Button } from "./ui/button";
import { Element } from "react-scroll";
import { AboutCards } from "./aboutCards";

const About = () => {
  return (
    <Element name="about" className="">
      <div className="bg-black text-white flex flex-col items-center gap-8 py-16">
        <div>
          <Button
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            id="1"
            variant={"ghost"}
            className="rounded-full px-8 text-white border-2 text-xl"
          >
            About Me
          </Button>
        </div>

        <div className="text-center text-2xl">
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            I'm a dedicated writer driven by a passion for communication and
            creativity.
            <br /> I focus on crafting impactful content that resonate with
            readers. <br /> Whether it's copywriting, ghostwriting, essay
            writing, blog writing, <br /> social media content, SEO writing, or
            product descriptions, <br /> I strive to deliver quality and clarity
            in every project.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
