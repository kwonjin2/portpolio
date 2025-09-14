"use client";
import { useState } from "react";

export default function HamburgerButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="메뉴 열기"
        aria-expanded={open}
        className="group inline-flex items-center gap-2 p-2 rounded-2xl 
                   hover:bg-slate-100 active:bg-slate-200 focus:outline-none
                   focus-visible:ring-2 focus-visible:ring-slate-400"
      >
        <span className="relative w-6 h-6">
          <span
            className={`absolute left-0 top-1 block h-[2px] w-6 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-[2px] w-6 -translate-y-1/2 bg-current transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 bottom-1 block h-[2px] w-6 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
        <span className="text-slate-500">메뉴</span>
      </button>
      {open && (
        <div className="absolute top-full right-0 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg w-[150px] z-50">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-[20px] text-[#1F2937] cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-[20px] text-[#1F2937] cursor-pointer"
            >
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
              className="text-[20px] text-[#1F2937] cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[20px] text-[#1F2937] cursor-pointer"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-6 px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700"
          >
            닫기
          </button>
        </div>
      )}
    </>
  );
}
