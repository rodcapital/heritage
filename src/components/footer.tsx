import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-black  text-white p-9 flex flex-col gap-11">
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="text-xl">
            Connect with me today! <br />
            Let's tell your story together.
          </span>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="font-bold">Contact</span>
              <Phone width={12} />
            </div>

            <div>
              <Link href={"#"} className="flex flex-col gap-1 text-sm">
                <span>iscribbledit@gmail.com</span>
                <span>Tel: +2347045287003</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold">Legal</span>

            <div className="flex flex-col gap-1 text-sm">
              <Link href={"#"}>
                <p>Terms Of Service</p>
                <p>Privacy Policy</p>
                <p>FAQ</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[0.2px] pt-4 border-white p-1 text-[12px] flex items-center justify-between">
        <p>© 2024 Heritage. All Rights Reserved.</p>
        <div className="flex gap-3">
          <FaFacebook />
          <RiInstagramFill />
          <FaXTwitter />
          <IoLogoWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
