// This is a server component
import React from "react";
import BlogHeader from "@/components/blog/blogHeader";
import BlogPage from "@/components/blog/blogPage";
import { CarouselDemo } from "@/components/blog/carousel";

type Blog = {
  id: number;
  title: string;
  desc: string;
  image: string;
  category: string;
  time: string;
};

// Fetch blogs directly within the component
const fetchBlogs = async () => {
  const response = await fetch("https://dummyjson.com/posts?per_page=30");
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await response.json();
  return data.posts?.map((p: any) => {
    return {
      id: p.id,
      title: p.title,
      des: p.body,
      image: "",
      category: p.tags,
    };
  });
};

const Page = async () => {
  const blogs = await fetchBlogs(); // Await the fetching directly
  return (
    <div>
      <BlogHeader />
      <CarouselDemo />
      <BlogPage blogs={blogs} />
    </div>
  );
};

export default Page;
