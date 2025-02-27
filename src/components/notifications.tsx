import Image from "next/image";
import React from "react";
import CustomAvatar from "./customAvatar";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

const Notifications = () => {
  return (
    <div className="py-8 flex flex-col gap-4">
      {/* <div className="flex items-center justify-center">
        <Image
          height={100}
          width={100}
          src={"/images/searchglass-removebg-preview.png"}
          alt=""
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Sorry, you have no new notifications yet</h1>
          <p></p>
        </div>
      </div> */}

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <p>View and respond to all your notifications</p>
      </div>

      <div className="pt-10 space-y-6">
        {days.map((d) => (
          <div key={d.id} className="pb-5 space-y-3">
            <p> {d.day}</p>
            {strips.map((strip) => (
              <div
                key={strip.id}
                className="flex items-center gap-4 bg-[#030712] dark:border text-white min-w-[900px] px-4 py-3 rounded-md justify-between"
              >
                <div className="flex gap-3 items-center">
                  {strip.avatar}
                  <div className="flex flex-col">
                    <h2 className="text-base font-bold">{strip.title}</h2>
                    <p className="text-xs">{strip.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button className="bg-white text-black hover:bg-white/50 hover:text-white">
                    View
                  </Button>
                  <Button variant={"destructive"} className="">
                    <Trash2 width={18} />
                    <span> Delete</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;

const days = [
  {
    id: 1,
    day: "Today",
  },
  {
    id: 2,
    day: "Yesterday",
  },
  {
    id: 3,
    day: "October 30th",
  },
  {
    id: 4,
    day: "October 31st",
  },
];

const strips = [
  {
    id: "a",
    title: "Notifications",
    desc: "View and respond to all your notifications",
    avatar: <CustomAvatar />,
  },
  {
    id: "b",
    title: "Notifications",
    desc: "View and respond to all your notifications",
    avatar: <CustomAvatar />,
  },
  {
    id: "c",
    title: "Notifications",
    desc: "View and respond to all your notifications",
    avatar: <CustomAvatar />,
  },
];
