"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { transform } from "next/dist/build/swc/generated-native";
import { ReactNode } from "react";



const FlyoutLink = ({ children, href, flyOutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyOut = open && flyOutContent;
  return (
    <div
      className="group relative h-fit w-fit"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={href} className="relative">
        {children}
        <span
          style={{ transform: showFlyOut ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute bg-cyan-500 transition-transform duration-300 -bottom-2 -left-2 -right-2 h-1 origin-left ease-out rounded-full"
        ></span>
      </Link>
      {showFlyOut && (
        <div className="absolute left-1/2 top-12 -translate-x-1/2 bg-white text-black">
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
          {flyOutContent}
        </div>
      )}
    </div>
  );
};

const aboutLinks = [
  { label: "History", href: "/" },
  { label: "School Anthem / Motto", href: "/" },
  { label: "Chairman's Message", href: "/" },
  { label: "Principal's Message", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "Contact Us", href: "/" },
];

const academicsLinks = [
  { label: "Early Childhood", href: "/" },
  { label: "Primary School", href: "/" },
  { label: "Secondary School", href: "/" },
  { label: "Learning Environment", href: "/" },
  { label: "Library", href: "/" },
];

const admissionsLinks = [
  { label: "Admission Policy", href: "/" },
  { label: "Fees & Deposits", href: "/" },
];

const studentLifeLinks = [
  { label: "Child Protection Policy", href: "/" },
  { label: "Student Life ", href: "/" },
];

const LinkContent = ({ links }) => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block hover:text-cyan-500 font-medium transition-all"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Link */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="SureBloom" width={50} height={50} />
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href={"/"}
            className="hover:text-cyan-500 font-medium transition-all"
          >
            Home{" "}
          </Link>

          <FlyoutLink
            href={"/"}
            flyOutContent={<LinkContent links={aboutLinks} />}
          >
            <span className="relative hover:text-cyan-500 font-medium transition-all">
              {" "}
              About Us
            </span>
          </FlyoutLink>

          <FlyoutLink
            href={"/"}
            flyOutContent={<LinkContent links={academicsLinks} />}
          >
            <span className="hover:text-cyan-500 font-medium transition-all">
              Academics
            </span>
          </FlyoutLink>
          <FlyoutLink
            href={"/"}
            flyOutContent={<LinkContent links={admissionsLinks} />}
          >
            <span className="relative hover:text-cyan-500 font-medium transition-all">
              {" "}
              Admissions
            </span>
          </FlyoutLink>

          <FlyoutLink
            href={"/"}
            flyOutContent={<LinkContent links={studentLifeLinks} />}
          >
            {" "}
            <span className="relative hover:text-cyan-500 font-medium transition-all">
              Student Life
            </span>
          </FlyoutLink>
        </nav>

        <div className="hidden md:block">
          <button className="bg-[#3697B8] hover:bg-cyan-800 text-white px-6 py-3 rounded flex items-center transition-all">
            Contact Us
          </button>
        </div>
        {/* Mobile Nav */}
        {/* <div className="">

        </div> */}
      </div>
    </div>
  );
}