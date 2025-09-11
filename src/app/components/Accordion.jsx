"use client"
import React from 'react'
import { FaChevronUp } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';


export default function Accordion({ items, header, headerText, setOpen }) {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
      const accordionLinks = items.map((item) => ({
        title: item.title,
        link: item.link,
        icon: item.icon,
        text: item.text,
      }));
  return (
    <div>
      <div
        className="flex gap-[10px] cursor-pointer"
        onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      >
        <h3 className="">{header}</h3>
        <FaChevronUp
          className={`${
            isAccordionOpen ? "rotate-0" : "rotate-180"
          } duration-300`}
        />
      </div>
      <div
        className={`${
          isAccordionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } w-full overflow-hidden grid duration-300`}
      >
        <div className="my-4 overflow-hidden flex flex-col">
          <p className="max-w-[500px] mb-4 pr-[35px] text-xs text-[#4D4A4A]">
            {headerText}
          </p>
          {accordionLinks.map((link, index) => (
            <Link
              href={link.link}
              className={`text-2xl py-4 flex gap-[10px] items-start border-solid border-[#F1E7E7] ${
                index !== 0 ? "border-t" : ""
              }`}
              key={link.title}
              onClick={() => {
                setIsAccordionOpen(!isAccordionOpen);
                setOpen(false);
              }}
            >
              <span className="pt-1.5">{link.icon}</span>{" "}
              {/* icon as component */}
              <div>
                <p className="text-sm">{link.title}</p>
                <p className="text-xs text-[#4D4A4A]">{link.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
