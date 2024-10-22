"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight, Dot } from "lucide-react";
import { Element } from "react-scroll";
import { Badge } from "../ui/badge";
import { Explore } from "./explore";

const BlogPage = () => {
  return (
    <Element name="blogPage">
      <div>
        <div className="py-4 flex justify-center pt-36 text-center">
          <Explore />
        </div>
        <div id="blogpage" className="grid md:grid-cols-3 gap-4 p-3">
          {cardData.map((data) => (
            <Card className="h-full">
              <CardContent className="flex flex-col h-full p-3">
                <div className="h-[280px]">
                  <Image
                    src={data.image}
                    alt="image"
                    className="object-cover py-2 h-full w-full"
                    width={600}
                    height={90}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 py-1">
                  <div className="flex items-center text-sm">
                    <Badge className="bg-purple-300 hover:bg-purple-300 font-light text-black">
                      {data.category}
                    </Badge>
                    <Dot width={12} />
                    <p>{data.time}</p>
                  </div>

                  <div className="flex flex-col flex-1 h-full gap-4">
                    <h3 className="text-xl font-bold">{data.title}</h3>
                    <p className="">{data.desc}</p>
                  </div>

                  <Link href={""} className="flex justify-end my-4">
                    <Button className="flex bg-purple-800 rounded-full text-sm items-center gap-1 dark:text-white hover:bg-purple-900  hover:-translate-x-2 hover:transform duration-1000">
                      <span>Read more</span>
                      <ChevronRight width={12} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default BlogPage;
const cardData = [
  {
    id: 1,
    image: `/images/react.jpg`,
    category: "Technology",
    time: "4 mins ago",
    title:
      "Mastering React and TypeScript: A Beginner’s Guide to Building Scalable Apps",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam nemo totam illum nihil nesciunt perspiciatis corporis tenetur magnam?",
  },
  {
    id: 2,
    image: `/images/blogs1.jpg`,
    category: "Technology",
    time: "4 mins ago",
    title:
      "Why Tailwind CSS?: Speed Up Your Design Process with This Utility-First Framework",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam nemo totam illum nihil nesciunt perspiciatis corporis tenetur magnam?",
  },
  {
    id: 3,
    image: `/images/abstract-cybersecurity-concept-design (1).jpg`,
    category: "Technology",
    time: "4 mins ago",
    title:
      "Top Cybersecurity Practices: How to Keep Your Data Safe in a Digital Age",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aliquam nemo totam illum nihil nesciunt perspiciatis corporis tenetur magnam?",
  },
];
