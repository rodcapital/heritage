import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";

export function AboutCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="w-full relative"
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, i) => (
          <CarouselItem key={i + "a"} className="h-64">
            <div className="">
              <Card className="bg-black   border-none">
                <CardContent className="flex flex-col gap-7 aspect-square py ">
                  <h3 className="text-4xl  text-white">
                    {description[i].text}
                  </h3>

                  <a
                    href={`/myPDF/Niger-Delta-Conflict-Tracker-2024-Q2-3 (2).pdf`}
                    download={"my resume"}
                  >
                    <Button className="bg-white text-black">
                      Download Resume
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-between w-full px-4">
        <CarouselPrevious className=" left-1/2 bg-transparent" />
        <CarouselNext className="right-1/2 bg-transparent" />
      </div>
    </Carousel>
  );
}

const description = [
  {
    id: 1,
    text: `Passionate writer with [X] years of experience in content creation, specializing in engaging storytelling and brand communication`,
  },

  {
    id: 2,
    text: "Expertise in social media content, SEO writing, and copywriting, ensuring every word resonates with your audience.",
  },
  {
    id: 3,
    text: "Strong background in crafting content for websites, blogs, and advertisements, tailored to meet specific business goals.",
  },
  {
    id: 4,
    text: "Creative thinker with a knack for turning complex ideas into relatable and compelling content.",
  },
  {
    id: 4,
    text: "My approach involves ensuring that each piece resonates with your business goals and objectives.",
  },
];
