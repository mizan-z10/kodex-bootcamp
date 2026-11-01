import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex gap-5 justify-center text-2xl">
      <Link href={"/"}>Home</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/product"}>Product</Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default Navbar;
