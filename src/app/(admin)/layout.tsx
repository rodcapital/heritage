"use client";
import Sidebar from "@/components/sidebar";
import { ModeToggle } from "@/components/ui/modeToggle";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Adminlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const userIsAdmin = true; // Set to false if you want to simulate a non-admin

  useEffect(() => {
    if (!userIsAdmin) {
      router.push("/signin"); // Redirect non-admins to the signin page
    }
  }, [userIsAdmin, router]);

  // Render nothing while redirecting non-admin users
  if (!userIsAdmin) return null;
  return (
    <div className="grid grid-cols-[20rem,auto]">
      <div>
        <Sidebar />
      </div>

      {/* splitting the adminpage */}
      <div className="flex justify-between">
        {children}
        <div className="p-5 pt-7 justify-end right-4 fixed ">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;
//write code to check if user is an admin or not
