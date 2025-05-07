"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();

  if (pathname === "/home") {
    return null;
  }

  return <Navbar />;
}