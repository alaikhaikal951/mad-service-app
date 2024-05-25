
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import logo from "../../public/img/MadServiceLogo.png"

export function Header() {
  return (
    <Navbar fluid className="w-full fixed rounded-b-2xl font-bold">
      <Navbar.Brand as={Link} href="">
        <img src={logo.src} style={{height: 40}} alt="Mad Service Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          HOME
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          ABOUT
        </Navbar.Link>
        <Navbar.Link href="#">SERVICE</Navbar.Link>
        <Navbar.Link href="#">SHOP</Navbar.Link>
        <Navbar.Link href="#">CONTACT</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
