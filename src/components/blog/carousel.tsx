"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "../ui/button";
import { animate, motion } from "framer-motion";

export function CarouselDemo() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <Carousel className=" w-full mx-auto">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem
              key={i + "a"}
              className="relative flex h-screen items-center justify-center"
            >
              <img
                className="w-full  object-cover absolute brightness-50"
                alt=""
                src={images[i].url}
              />
              <div className="absolute flex flex-col items-center gap-5">
                <motion.h1
                  initial={{ y: -10000 }}
                  animate={{ y: [900, 0] }}
                  transition={{
                    duration: "3",
                    delay: 1,
                  }}
                  whileHover={{ scale: 0.9, opacity: 0.2 }}
                  className="text-6xl text-white font-bold text-center"
                  dangerouslySetInnerHTML={{ __html: images[i].text }}
                />

                {/* the h1 above is written like that so my br tag below can work */}

                <div>
                  <Button className="translate-y-6 bg-white/10 backdrop-blur-sm shadow-sm border border-white hover:bg-white/20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
                    View Blogs
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8" />
        <CarouselNext className="right-8" />
      </Carousel>
    </div>
  );
}

const images = [
  {
    id: 1,
    url: `/images/open-book-beautiful-setting.jpg`,
    text: `Immerse Yourself in a Vast World <br/> Where Stories Reside`,
  },
  {
    id: 2,
    url: `/images/book-library-with-open-textbook.jpg`,
    text: `Discover a Comprehensive <br/> Collection of Educative Materials`,
  },
  {
    id: 3,
    url: `/images/lovely-friends-looking-laptop-indoors.jpg`,
    text: `Easily Access Latest News <br/> And Trending Updates`,
  },
  {
    id: 4,
    url: `/images/businessman-video-conference-call-while-working-from-home-coronavirus-pandemic.jpg`,
    text: `Learn More About Effective <br/> And Life Saving Tips and Tricks`,
  },
  {
    id: 5,
    url: `/images/medium-shot-happy-people-meeting.jpg`,
    text: `Express Your Thoughts <br/> As Part of a Large Community`,
  },
];
