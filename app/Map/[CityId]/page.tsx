"use client";
import MiniError from "@/app/_components/MiniError";
import MiniSpinner from "@/app/_components/MiniSpinner";
import { RootState } from "@/app/_lib/store";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CityInfoPage from "./CityInfoPage";
import { dataProps } from "@/app/_lib/Data/city";
type CityPageProps = {
  params: Promise<{
    CityId: string;
  }>;
};

export default function CityPage({ params }: CityPageProps) {
  const [cityInfo, setCityInfo] = useState<null | dataProps>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const login = useSelector((store: RootState) => store.user.loginStatus);
  const router = useRouter();
  const { CityId } = use(params);

  useEffect(() => {
    if (!login) return router.push("/Login");

    // function to fetch data
    async function getCity() {
      const token = localStorage.getItem("token");
      setLoading(true);
      try {
        const res = await fetch(
          `https://stopover-backend.onrender.com/visit/visitData/${CityId}`,
          {
            method: "GET",
            headers: {
              authorization: `JWT ${token}`,
            },
          }
        );
        const resData = await res.json();
        if (!res.ok) {
          console.error(resData);
          setError(resData.message);
        } else {
          console.log(resData);
          setCityInfo(resData);
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong!!");
      } finally {
        setLoading(false);
      }
    }

    // calling the func
    getCity();
  }, [login, router, CityId]);

  if (loading) return <MiniSpinner />;
  if (error) return <MiniError errMsg={error} />;

  return <CityInfoPage cityInfo={cityInfo!} />;
}
