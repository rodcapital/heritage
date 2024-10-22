"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infiniteMovingCards";

export function AboutCards() {
  return (
    <div className="rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi? Sed cumque tempora quaerat temporibus quia neque itaque sapiente praesentium qui dolores. Ex corporis temporibus eum fuga in expedita harum?",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi? Sed cumque tempora quaerat temporibus quia neque itaque sapiente praesentium qui dolores. Ex corporis temporibus eum fuga in expedita harum?",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi? Sed cumque tempora quaerat temporibus quia neque itaque sapiente praesentium qui dolores. Ex corporis temporibus eum fuga in expedita harum?",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi? Sed cumque tempora quaerat temporibus quia neque itaque sapiente praesentium qui dolores. Ex corporis temporibus eum fuga in expedita harum?",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, excepturi? Sed cumque tempora quaerat temporibus quia neque itaque sapiente praesentium qui dolores. Ex corporis temporibus eum fuga in expedita harum?",
  },
];
