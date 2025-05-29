"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const DropdownSubItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div
    className={`p-3 w-full sm:w-[278px] hover:bg-[#10A2C9]/[0.13] rounded-[10px]`}
  >
    <h4 className={`font-bold text-primary text-xl`}>{title}</h4>
    <p className={`text-xs text-primary mt-0.5 font-light text-[10px]`}>
      {description}
    </p>
  </div>
);

const ConferenceDropdownContent = () => {
  const subItemText =
    "MEICA EXPO 2025 Was The First Instrumentation Control And Automation Expo In";
  return (
    <div className="absolute top-full left-0 right-0 w-full bg-white shadow-xl rounded-b-lg p-6 z-40 mt-[1px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold text-primary mb-1.5">CONFERENCE</h3>
          <p className="text-sm font-light w-[290px] text-primary leading-snug">
            MEICA EXPO 2025 Was The First Instrumentation Control And Automation
            Expo In
          </p>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <DropdownSubItem title="CONFERENCE" description={subItemText} />
          <DropdownSubItem title="CONFERENCE" description={subItemText} />{" "}
          <DropdownSubItem title="CONFERENCE" description={subItemText} />{" "}
          <DropdownSubItem title="CONFERENCE" description={subItemText} />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  label,
  hasDropdownIcon,
  onMouseEnter,
  isPotentiallyHovered,
}: {
  label: string;
  hasDropdownIcon: boolean;
  onMouseEnter: () => void;
  isPotentiallyHovered: boolean;
}) => {
  return (
    <div className="h-full flex items-center" onMouseEnter={onMouseEnter}>
      <Button
        className="py-2 px-3 lg:px-4 h-full hover:bg-white/10 text-white hover:text-black !md:text-sm !text-xs font-semibold transition-colors duration-200 rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        variant="ghost"
      >
        {label}
        {hasDropdownIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-4 h-4 ml-1.5 transition-transform duration-200 ${
              isPotentiallyHovered ? "transform rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Button>
    </div>
  );
};
const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    {
      id: "conference",
      label: "CONFERENCE",
      // The component to render for the dropdown
      dropdownComponent: ConferenceDropdownContent,
    },
    { id: "about", label: "ABOUT EVENT" },
    { id: "participation", label: "PARTICIPATION" },
    { id: "exhibitions", label: "EXHIBITIONS" },
    { id: "awards", label: "AWARDS" },
    { id: "contact", label: "CONTACT US" },
  ];

  const ActiveDropdownComponent = navLinks.find(
    (link) => link.id === activeDropdown && link.dropdownComponent
  )?.dropdownComponent;

  return (
    <header className="relative border rounded-lg mx-4 my-4 px-8 lg:mx-6 h-[170px] pt-8 pb-10 transition-all duration-200">
      <div className="grid grid-cols-3 items-center ">
        <Image
          src="/medica-logo.png"
          alt="MEICA EXPO 2025 Logo"
          width={268.8}
          height={78.28}
          className="h-auto"
          priority
        />
        <div className="flex flex-col items-center justify-start  h-full gap-1.5 mt-5">
          <div className="text-center">
            <p className="text-sm text-primary font-semibold">HOSTED BY</p>
            <Image
              src="/csc-logo.png"
              alt="UAE Security Council"
              width={201.6}
              height={68}
              className="h-auto w-[211.6px] mt-1.5"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="flex gap-1 text-base font-semibold">
            <Button
              className="rounded-full border-[2.5px] border-secondary w-[37.5px] h-[37.5px] flex items-center justify-center bg-white text-secondary hover:bg-secondary/30 transition-colors duration-200"
              variant="outline"
              size="icon"
            >
              <span>عر</span>
            </Button>
            <Button
              className="rounded-full bg-secondary w-[37.5px] h-[37.5px] flex items-center justify-center text-white"
              variant="default"
              size="icon"
            >
              <span>EN</span>
            </Button>
          </div>
          <Button className=" text-white rounded-[10px] text-base font-semibold cursor-pointer h-9 px-5 bg-gradient-to-r from-[#10A2C9] to-secondary hover:bg-gradient-to-r hover:from-secondary/50 hover:to-secondary transition-colors duration-200">
            REGISTRATION
          </Button>
        </div>
      </div>

      <nav
        className="absolute bottom-[-20px] left-0 right-0 mx-8 h-10 bg-primary text-white rounded-md shadow-md"
        style={{ position: "relative" }}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <ul className="flex justify-around items-center h-full">
          {navLinks.map((link) => (
            <NavItem
              key={link.id}
              label={link.label}
              hasDropdownIcon={!!link.dropdownComponent}
              onMouseEnter={() => {
                if (link.dropdownComponent) {
                  setActiveDropdown(link.id);
                }
              }}
              isPotentiallyHovered={
                activeDropdown === link.id && !!link.dropdownComponent
              }
            />
          ))}
        </ul>

        {ActiveDropdownComponent && <ActiveDropdownComponent />}
      </nav>
    </header>
  );
};

export default Header;
