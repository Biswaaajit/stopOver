"use client";
import dynamic from "next/dynamic";
import LogoLink from "../_components/LogoLink";
import MapLink from "./MapLink";

const MapView = dynamic(() => import("./MapView"), { ssr: false });

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen lg:h-screen  flex flex-col-reverse justify-end  lg:flex-row text-slate-200 relative overflow-hidden">
      <div className="grow bg-black flex flex-col gap-10 overflow-y-auto pt-3 pb-6">
        <LogoLink size="w-[3.5rem] h-[3.5em]" />
        <div className="w-full  flex flex-col gap-7 ">
          <div className="w-fit py-1 h-fit self-center border border-zinc-800 overflow-hidden rounded-md">
            <MapLink name="Cities" href="/Map/Cities" />
            <MapLink name="Countries" href="/Map/Countries" />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
      <MapView />
    </div>
  );
}
