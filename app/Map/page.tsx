"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../_lib/store";
import { useRouter } from "next/navigation";
import MiniSpinner from "../_components/MiniSpinner";
import MiniError from "../_components/MiniError";
import { addArraysOfData } from "../_lib/UserDataSlice";

export default function Map() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { loginStatus, userId } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  useEffect(() => {
    if (!loginStatus) return router.push("/Login");

    async function getVisitData() {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const res = await fetch(
          `https://stopover-backend.onrender.com/visit/data/${userId}`,
          {
            method: "GET",
            headers: {
              authorization: `JWT ${token}`,
            },
          }
        );
        const resData = await res.json();
        if (!res.ok) {
          setError(resData.message);
        } else {
          console.log(resData.data);
          dispatch(addArraysOfData(resData.data));
          router.push("/Map/Cities");
        }
      } catch (err) {
        console.log(err);
        setError("Something went wrong!!");
      } finally {
        setLoading(false);
      }
    }
    getVisitData();
  }, [router, loginStatus, userId, dispatch]);

  if (loading) return <MiniSpinner />;
  if (error) return <MiniError errMsg={error} />;
  return null;
}
