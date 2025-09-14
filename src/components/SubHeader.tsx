"use client";

import { useState } from "react";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import Link from "next/link";

export default function SubHeader() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className=" sticky top-0 z-50 w-full h-[80px] flex justify-between items-center bg-white supports-[backdrop-filter]:bg-white/70 backdrop-blur py-2 pl-[10px] md:pl-[20px] lg:pl-[30px] border-b border-slate-200/70">
      <Link
        href="/"
        className="flex space-x-[12px] items-center cursor-pointer"
      >
        <div className="w-[32px] h-[30px] relative">
          <Image
            src="/profile.jpeg"
            alt="profile-image"
            fill
            className="rounded-[100px]"
          ></Image>
        </div>
        <div className="font-bold text-[#1F2937] text-[20px] md:text-[24px]">
          kwonjin
        </div>
      </Link>
      <div className="lg:hidden ml-2">
        <HamburgerButton />
      </div>
      <div className="space-x-[50px] hidden lg:flex">
        <a href="#about" className="text-[20px] text-[#1F2937] cursor-pointer">
          About
        </a>
        <a href="#skills" className="text-[20px] text-[#1F2937] cursor-pointer">
          Skills
        </a>
        <a
          href="#experience"
          className="text-[20px] text-[#1F2937] cursor-pointer"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-[20px] text-[#DC2626] cursor-pointer"
        >
          Projects
        </a>
      </div>
      <a
        href="#contact"
        className="w-[200px] h-[80px] relative cursor-pointer hidden lg:flex"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Contact button"
        role="button"
      >
        <Image
          src={hovered ? "/contact-hover.png" : "/contact.png"}
          alt="contact-image"
          fill
        ></Image>
      </a>
    </div>
  );
}
