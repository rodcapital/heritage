import BlogHeader from "@/components/blog/blogHeader";
import BlogPage from "@/components/blog/blogPage";
import { CarouselDemo } from "@/components/blog/carousel";
import React from "react";

const Page = () => {
  return (
    <div>
      <BlogHeader />
      <CarouselDemo />
      <BlogPage />
    </div>
  );
};

export default Page;
