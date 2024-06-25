"use client";
import Link from "next/link";
import React from "react";
import navbarItems from "../menu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Navbar as Nv } from "flowbite-react";

const Navbar = () => {
  const navitem =
    "font-semibold text-[16px] text-[#C1F2B0] transition-all ease-in-out delay-150 duration-75 hover:text-[#65B741] hover:py-[8px]  hover:border-b-2 hover:border-[#65B741]";
  const navitemactive =
    "font-semibold text-[16px] text-[#65B741] py-[8px] border-b-2 border-[#65B741]";
  const pathName = usePathname();
  return (
    <>
      <Nv
        className="lg:hidden sm:px-[32px] items-center shadow  justify-between py-[16px] md:px-[64px]"
        fluid
        rounded
      >
        <Nv.Brand as={Link} href="https://flowbite-react.com">
          <Image src={"/logo.jpeg"} width={75} height={75} alt="Logo" />
        </Nv.Brand>
        <Nv.Toggle />
        <Nv.Collapse>
          {navbarItems.map((val, index) => (
            <Nv.Link className={pathName == val.url ? navitemactive : navitem} href={val.url}>{val.label}</Nv.Link>
          ))} 
        </Nv.Collapse>
      </Nv>
      <div className=" sm:px-[32px] md:px-[64px] lg:px-[128px] items-center shadow hidden lg:flex justify-between py-[16px]">
        <div className="">
          <Image src={"/logo.jpeg"} width={75} height={75} alt="Logo" />
        </div>

        <div
          className=" hidden lg:flex items-center gap-[64px]"
          id="navbar-hamburger"
        >
          <ul className="flex gap-[32px] align-middle items-center">
            {navbarItems.map((val, index) => (
              <li className={pathName == val.url ? navitemactive : navitem}>
                <Link href={val.url}>{val.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <button className="h-fit flex gap-2 rounded-lg items-center px-2 py-4 bg-[#9BCF53]">
              <Icon
                className="text-[#FFFFFF] text-[16px]"
                icon="ic:baseline-email"
              ></Icon>
              <span className="text-[#FFFFFF] text-[12px] font-semibold ">
                cvhidropolik@gmail.com
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
