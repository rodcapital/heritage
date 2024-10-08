"use client";
import React from "react";
import { Button } from "./ui/button";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <div>
      <Element name="services">
        <div className="py-6">
          <div className="flex flex-col items-center justify-center p-9 gap-5">
            <Button className="text-center px-8 text-xl rounded-full bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black">
              Services
            </Button>

            <p className="text-center text-2xl">
              Experience a world of seamless writing services designed to
              elevate your brand, <br /> captivate your audience, and bring your
              vision to life with a hallmark of excellence.
            </p>

            <div className="flex flex-col items-center gap-5 p-9">
              <div className="space-x-4">
                <Button className="bg-white text-black border-2 border-black rounded-full px-10 hover:text-white hover:bg-black">
                  Copywriting
                </Button>
                <Button className="bg-white text-black border-2 border-black rounded-full px-10 hover:text-white hover:bg-black">
                  Ghostwriting
                </Button>
                <Button className="bg-white text-black border-2 border-black rounded-full px-10 hover:text-white hover:bg-black">
                  Essay Writing
                </Button>
                <Button className="bg-white text-black border-2 border-black rounded-full px-10 hover:text-white hover:bg-black">
                  Blog Writing
                </Button>
              </div>

              <div className="space-x-3">
                <Button className="bg-white text-black border-2 border-black rounded-full px-10 hover:text-white hover:bg-black">
                  Social Media Content
                </Button>
                <Button className="bg-white text-black border-2 border-black rounded-full px-10 hover:text-white hover:bg-black">
                  SEO Writing
                </Button>
                <Button className="bg-white text-black border-2 border-black rounded-full px-10 hover:text-white hover:bg-black">
                  Product Description
                </Button>
              </div>

              <div className="text-center py-24">
                <div className="flex gap-3">
                  <div className="bg-black h-8 flex items-center justify-center w-8 rounded-full text-white text-center hover:bg-white hover:text-black hover:border-[1px] hover:border-black">
                    <span>1</span>
                  </div>
                  <div className="bg-black h-8 flex items-center justify-center w-8 rounded-full text-white text-center hover:bg-white hover:text-black hover:border-[1px] hover:border-black">
                    <span>2</span>
                  </div>
                  <div className="bg-black h-8 flex items-center justify-center w-8 rounded-full text-white text-center hover:bg-white hover:text-black hover:border-[1px] hover:border-black">
                    <span>3</span>
                  </div>
                  <div className="bg-black h-8 flex items-center justify-center w-8 rounded-full text-white text-center hover:bg-white hover:text-black hover:border-[1px] hover:border-black">
                    <span>4</span>
                  </div>
                </div>
                <span>Pages</span>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Services;
