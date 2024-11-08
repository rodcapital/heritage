import { account } from "@/actions/appwrite";
import DashboardBody from "@/components/dashboardBody";
import Stats from "@/components/stats";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await account.list();
  console.log(user);
  // if (!user) return redirect("/login");
  // const users = await Users();
  // console.log(users);
  return (
    <div className="flex flex-col p-6 gap-9">
      <DashboardBody name={user.users[0].email} />
      <div className="flex">
        <Stats />
      </div>
    </div>
  );
};

export default page;
