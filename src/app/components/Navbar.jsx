"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { MdWorkHistory } from "react-icons/md";
import { GiAnthem } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import Accordion from "./Accordion";
import { FaQuestion } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { GiPodiumSecond } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { FaMoneyBills } from "react-icons/fa6";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";

/* Mobile Nav Resources */
const aboutUs = [
  {
    icon: <MdWorkHistory size={24} color="#3697B8" />,
    title: "History",
    link: "/history",
    text: "Our heritage and growth",
  },
  {
    icon: <GiAnthem size={20} color="#3697B8" />,
    title: "School Anthem / Motto",
    link: "/school-anthem",
    text: "Our enduring values",
  },
  {
    icon: <MdMessage size={20} color="#3697B8" />,
    title: "Chairman's Message",
    link: "/chairman-message",
    text: "Our enduring values",
  },
  {
    icon: <FaChalkboardTeacher size={20} color="#3697B8" />,
    title: "Principal's Message",
    link: "/principal-message",
    text: "Our enduring values",
  },
  {
    icon: <FaQuestion size={20} color="#3697B8" />,
    title: "FAQ",
    link: "/faq",
    text: "Our enduring values",
  },
  {
    icon: <MdContacts size={20} color="#3697B8" />,
    title: "Contact US",
    link: "/contact-us",
    text: "Our enduring values",
  },
];

const academics = [
  {
    icon: <FaChild size={20} color="#3697B8" />,
    title: "Early Childhood",
    link: "/early-childhood",
    text: "Nurturing curiosity from the start",
  },
    {
    icon: <MdSchool size={20} color="#3697B8" />,
    title: "Primary Education",
    link: "/primary-education",
    text: "Strong foundations for future success",
  },
    {
    icon: <GiPodiumSecond size={20} color="#3697B8" />,
    title: "Secondary School",
    link: "/secondary-school",
    text: "Shaping leaders of tomorrow",
  },
    {
    icon: <SiGoogleclassroom size={20} color="#3697B8" />,
    title: "Learning Environment",
    link: "/learning-environment",
    text: "Balanced, engaging, and inclusive learning spaces",
  },
    {
    icon: <IoLibrary size={20} color="#3697B8" />,
    title: "Library",
    link: "/library",
    text: "A world of knowledge at your fingertips",
  },
];

const admissions = [
  {
    icon: <RiAdminFill size={20} color="#3697B8" />,
    title: "Admission Policy",
    link: "/admission-policy",
    text: "Your pathway to enrollment",
  },
  {
    icon: <FaMoneyBills size={20} color="#3697B8" />,
    title: "Fees & Deposits",
    link: "/fees-deposits",
    text: "Understanding our fee structure",
  },
  
];

const studentLife = [
    {
    icon: <FaHandsHoldingChild size={20} color="#3697B8" />,
    title: "Child Protection Policy",
    link: "/child-protection-policy",
    text: "Committed to student safety",
  },
    {
    icon: < PiStudentFill  size={20} color="#3697B8"/>,
    title: "Student Life",
    link: "/student-life",
    text: "Beyond the classroom experience",
  },

]

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
  { label: "History", href: "/history" },
  { label: "School Anthem / Motto", href: "/school-anthem" },
  { label: "Chairman's Message", href: "/chairman-message" },
  { label: "Principal's Message", href: "/principal-message" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
];

const academicsLinks = [
  { label: "Early Childhood", href: "/early-childhood" },
  { label: "Primary Education", href: "/primary-education" },
  { label: "Secondary School", href: "/secondary-school" },
  { label: "Learning Environment", href: "/learning-environment" },
  { label: "Library", href: "/library" },
];

const admissionsLinks = [
  { label: "Admission Policy", href: "/admission-policy" },
  { label: "Fees & Deposits", href: "/fees-deposits" },
];

const studentLifeLinks = [
  { label: "Child Protection Policy", href: "/child-protection-policy" },
  { label: "Student Life ", href: "/student-life" },
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
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="hidden xl:flex items-center justify-between">
        {/* Logo Link */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="SureBloom" width={50} height={50} />
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 z-50">
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
        
      </div>
      {/* Mobile Nav */}

      <div className="relative px-5 h-10 flex justify-between items-center bg-white xl:hidden z-50">
        <div className="">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="routelink"
              className="h-full w-full"
              width={33}
              height={33}
            />
           
          </Link>
          
        </div>

        {/* Open Mobile button */}
        <button
          type="button"
          onClick={toggleNav}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleNav();
            }
          }}
          tabIndex={0}
          className="block xl:hidden"
          aria-label="Toggle navigation"
        >
          <HiOutlineBars3 size={33} color="#3697B8" />
        </button>
        <div
          className={`fixed overflow-y-auto top-0 pt-[18px] left-0 w-full h-full bg-white text-black transition-transform duration-500 ${
            open ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          {/*Close Mobile Menu */}
          <div className="px-4 flex items-center justify-between">
            <Image src={"/logo.png"} alt="routelink" width={33} height={33} />
            <button
              type="button"
              className="pr-2"
              onClick={toggleNav}
              aria-label="Close navigation"
            >
              <AiOutlineClose size={30} color="#3697B8" />
            </button>
          </div>
          {/*  */}
          <ul className="px-7 flex flex-col gap-[10px]">
            <li className="border-b border-solid border-[#F1E7E7] pt-[38px]">
              <Accordion
                items={aboutUs}
                header="About Us"
                headerText="Our school was founded with a vision to provide a nurturing environment where young minds are inspired to learn, grow, and achieve their full potential. Over the years, we have remained committed to academic excellence, moral integrity, and the holistic development of every student."
                setOpen={setOpen}
              />
            </li>
             <li className="border-b border-solid border-[#F1E7E7] pt-[38px]">
              <Accordion
                items={academics}
                header="Academics"
                headerText="At the core of our school is a commitment to academic excellence. We provide a well-structured curriculum that balances rigorous study with creativity, innovation, and practical application. Our teaching methods are designed to inspire curiosity, critical thinking, and a lifelong love for learning."
                setOpen={setOpen}
              />
            </li>
             <li className="border-b border-solid border-[#F1E7E7] pt-[38px]">
              <Accordion
                items={admissions}
                header="Admissions"
                headerText="From the first inquiry to the final enrollment, our admissions team is available to guide parents and guardians through each step of the process. We carefully review applications to ensure that every student admitted is placed in the right learning environment where they can thrive academically and socially."
                setOpen={setOpen}
              />
            </li>
            <li className="border-b border-solid border-[#F1E7E7] pt-[38px]">
              <Accordion
                items={studentLife}
                header="Student Life"
                headerText="We strive to create a vibrant and inclusive environment where every student can feel a sense of belonging. By balancing academics with extracurricular activities, we prepare our learners to become well-rounded individuals who are ready to take on future challenges with courage and resilience."
                setOpen={setOpen}
              />
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
