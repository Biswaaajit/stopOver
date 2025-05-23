"use client";
import { RootState } from "@/app/_lib/store";
import filterCountry from "@/app/_lib/Utils/filterCountry";
import { useSelector } from "react-redux";
import Country from "./Country";
import MessageBox from "@/app/_components/MessageBox";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CountryPage() {
  const data = useSelector((store: RootState) => store.userData.dataLists);
  const login = useSelector((store: RootState) => store.user.loginStatus);
  const router = useRouter();
  const filterCountries = filterCountry(data);

  // animation
  useGSAP(() => {
    gsap.from(".country-list", {
      opacity: 0,
      x: 100,
      stagger: 0.2,
      duration: 0.6,
    });
  }, []);

  useEffect(() => {
    if (!login) {
      router.push("/Login");
    }
  }, [login, router]);

  return (
    <div className="w-full flex flex-nowrap items-center gap-4 px-3">
      {filterCountries.length === 0 ? (
        <MessageBox message="Add your first country by clicking on the map" />
      ) : (
        filterCountries.map((country) => (
          <Country key={country._id} country={country} />
        ))
      )}
    </div>
  );
}
