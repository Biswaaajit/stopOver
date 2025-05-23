import { useGSAP } from "@gsap/react";
import LogoLink from "./LogoLink";
import NavLink from "./NavLink";
import gsap from "gsap";

type MobileNavProps = {
  path: string;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav({ path, setShowMobileNav }: MobileNavProps) {
  useGSAP(() => {
    gsap.from("#mobNav", {
      x: -350,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);
  return (
    <div className="absolute  md:hidden flex w-full h-screen left-0 top-0 bg-transparent">
      <div
        id="mobNav"
        className="w-[60%] bg-black-900/80 backdrop-blur-lg h-full flex flex-col gap-20 py-8"
      >
        <div className="self-center w-fit h-fit">
          <LogoLink size="w-12 h-12" />
        </div>
        <div className="space-y-5">
          <NavLink path={path} href="/Product" name="Product" />
          <NavLink path={path} href="/Price" name="Price" />
          <NavLink path={path} href="/Login" name="Login" />
        </div>
      </div>
      <div onClick={() => setShowMobileNav(false)} className="grow"></div>
    </div>
  );
}
