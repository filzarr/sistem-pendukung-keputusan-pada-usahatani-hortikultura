"use client";
import React from "react";
import { Navbar as Nav,NavbarBrand } from "flowbite-react"; 
import Link from "next/link"; 
import navbarItems from "../menu";
import { usePathname } from "next/navigation";
import Image from "next/image"; 

const Navbar = () => {
  const navitem =
    "font-semibold text-[16px] text-[#C1F2B0] transition-all ease-in-out delay-150 duration-75 hover:text-[#65B741] hover:py-[8px]  hover:border-b-2 hover:border-[#65B741]";
  const navitemactive =
    "font-semibold text-[16px] text-[#65B741] py-[8px] border-b-2 border-[#65B741] ";
  const pathName = usePathname();
  return (
    <>
      <Nav
        className="lg:hidden sm:px-[32px] items-center shadow  justify-between py-[16px] md:px-[64px]"
        fluid
        rounded
      >
        <Nav.Brand as={Link} href="https://flowbite-react.com">
          <Image src={"/logo.jpeg"} width={75} height={75} alt="Logo" />
        </Nav.Brand>
        <Nav.Toggle />
        <Nav.Collapse>
          {navbarItems.map((val, index) => (
            <Nav.Link key={index} className={pathName == val.url ? navitemactive : navitem} href={val.url}>{val.label}</Nav.Link>
          ))} 
        </Nav.Collapse>
      </Nav>
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
              <li key={index} className={pathName == val.url ? navitemactive : navitem}>
                <Link href={val.url}>{val.label}</Link>
              </li>
            ))}
          </ul> 
        </div>
      </div>
    </>
  );
};

export default Navbar;
