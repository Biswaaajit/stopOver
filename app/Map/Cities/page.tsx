"use client";

import { RootState } from "@/app/_lib/store";
import { useSelector } from "react-redux";
import City from "./City";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MessageBox from "@/app/_components/MessageBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CitiesPage() {
  const cityLists = useSelector((store: RootState) => store.userData.dataLists);
  const login = useSelector((store: RootState) => store.user.loginStatus);
  const router = useRouter();
  console.log(cityLists);

  //animation
  useGSAP(() => {
    gsap.from(".city-items", {
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
    <div className="bg-transparent space-y-6">
      {cityLists.length === 0 ? (
        <MessageBox message="Add your first destination by clicking on the map" />
      ) : (
        cityLists.map((cityList) => (
          <City key={cityList._id} cityList={cityList} />
        ))
      )}
    </div>
  );
}
