"use client";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MobileNav from "./MobileNav";

type NavigationProps = {
  background: string;
};

export default function Navigation({ background }: NavigationProps) {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const path = usePathname();

  return (
    <div
      className={`flex justify-between  items-center px-8 md:px-20 sticky top-[0%] z-30  py-2  ${background}`}
    >
      <Link
        className="relative flex justify-center items-center gap-2"
        href="/"
      >
        <Image
          src="/logo.png"
          className="w-[2.5rem]"
          width={60}
          height={60}
          alt="logo"
        />
        <p className="text-xl md:text-3xl">stopOver</p>
      </Link>

      <button
        onClick={() => setShowMobileNav((curr) => !curr)}
        className="block md:hidden"
      >
        <IoMenu className="text-cyan-600 text-3xl" />
      </button>
      <div className="hidden md:flex items-center gap-8">
        <NavLink path={path} name="Product" href="/Product" />
        <NavLink path={path} name="Pricing" href="/Price" />
        <Link
          className="bg-cyan-800 px-6 py-1 font-semibold rounded-lg hover:bg-cyan-600 transition-all"
          href="/Login"
        >
          Log in
        </Link>
      </div>
      {showMobileNav && (
        <MobileNav path={path} setShowMobileNav={setShowMobileNav} />
      )}
    </div>
  );
}
