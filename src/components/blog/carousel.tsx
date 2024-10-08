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
import BlogHeader from "./carouselTitle";
import CarouselTitle from "./carouselTitle";

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
                className="w-full  object-cover absolute"
                alt=""
                src={images[i].url}
              />
              <div className=" relative z-10">
                <CarouselTitle />
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
    url: `/images/man-jump-through-gaps-hills.jpg`,
  },
  {
    id: 2,
    url: `/images/silhouette-standing-mountain-peak-sunrise-generated-by-ai.jpg`,
  },
  {
    id: 3,
    url: `/images/young-blonde-woman-sitting-top-hill.jpg`,
  },
  {
    id: 4,
    url: `/images/tourist-is-holding-through-binoculars-sunny-cloudy-sky-from-mountain-top.jpg`,
  },
  {
    id: 5,
    url: `/images/professional-photographer-takes-photos-with-camera-tripod-rocky-peak-sunset-dark-tone.jpg`,
  },
];
