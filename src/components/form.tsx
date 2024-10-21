import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const Form = () => {
  return (
    <form className="">
      <Card className=" border-none shadow-none">
        <CardHeader className="p">
          <h2 className="text-xl font-bold">Hello, Connect with me below 👇</h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label htmlFor="Input">Company Name</label>
                <Input
                  required
                  placeholder="Your Company Name..."
                  className="border dark:border-white border-black "
                />
              </div>
              <div className="">
                <label htmlFor="Input">Email</label>
                <Input
                  required
                  placeholder="You@company.com"
                  className="border dark:border-white border-black"
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="Input">Phone Number</label>
              <Input
                required
                placeholder="Phone number"
                className="border  dark:border-white border-black"
              />
            </div>
            <div className="">
              <label htmlFor="Input">Job description</label>
              <Textarea
                required
                placeholder="Please leave a brief description of the job here"
                className="border dark:border-white border-black"
              />
            </div>
            <Button className="bg-black dark:bg-purple-900  dark:text-white hover:bg-black">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default Form;
