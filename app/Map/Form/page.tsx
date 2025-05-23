// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import Image from "next/image";
import FormTextArea from "./FormTextArea";
import FormBtn from "./FormBtn";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_lib/store";
import toast from "react-hot-toast";
import { addData } from "@/app/_lib/UserDataSlice";
import MiniSpinner from "@/app/_components/MiniSpinner";

export default function FormPage() {
  const searchParams = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { userId, loginStatus } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch<AppDispatch>();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!loginStatus) return router.push("/Map");
    async function getLocation() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const resData = await res.json();
        setCityName(resData.city);
        setCountry(resData.countryName);
        setDate(`${new Date()}`);
        setEmoji(resData.countryCode.toLowerCase());
        console.log(resData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getLocation();
  }, [lat, lng, loginStatus, router]);

  //Function to handle form submit
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const loadingId = toast.loading("Adding...");
    const newData = {
      userId,
      country,
      cityName,
      notes,
      countryCode: emoji,
      date,
      position: { lat: Number(lat), lng: Number(lng) },
    };
    console.log(newData);
    try {
      const res = await fetch(
        "https://stopover-backend.onrender.com/visit/add",
        {
          method: "POST",
          body: JSON.stringify(newData),
          headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${token}`,
          },
        }
      );
      const resData = await res.json();
      if (!res.ok) {
        console.error(resData);
        toast.error(resData.message, { id: loadingId });
      } else {
        console.log(resData.newData);
        dispatch(addData(resData.newData));
        toast.success(resData.message, { id: loadingId });
        router.push("/Map/Cities");
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (loading) return <MiniSpinner />;
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[95%] mx-auto bg-zinc-900 px-2 sm:px-5 lg:px-4 py-6 mb-8 space-y-6 rounded-md"
    >
      <FormInput type="text" value={cityName} setFunc={setCityName}>
        <label className="font-semibold flex justify-between items-center ">
          <span>City name</span>
          <Image
            src={`https://flagcdn.com/48x36/${emoji}.png`}
            width="20"
            height="14"
            alt="Ukraine"
          />
        </label>
      </FormInput>
      <FormInput type="text" value={date} setFunc={setDate}>
        <label className="font-semibold">Visit date</label>
      </FormInput>
      <FormTextArea value={notes} setFunc={setNotes} placeholder="Notes...">
        <label className="font-semibold">Note on your destination</label>
      </FormTextArea>
      <FormBtn />
    </form>
  );
}
