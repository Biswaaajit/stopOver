import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../_lib/store";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { logOut } from "../_lib/UserSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function User() {
  const { userName, userImg } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch<AppDispatch>();
  const [showLogOut, setShowLogOut] = useState(false);
  console.log(userName, userImg);

  //animation
  useGSAP(() => {
    if (showLogOut) {
      gsap.from("#logOutBtn", {
        scale: 0.2,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [showLogOut]);

  function handleLogOut() {
    localStorage.setItem("token", "");
    dispatch(logOut());
  }
  return (
    <div className="flex flex-col justify-center bg-transparent items-center gap-4  absolute z-[99999] top-4 w-fit  right-3 text-black font-semibold">
      <button
        onClick={() => setShowLogOut((curr) => !curr)}
        className="p-0.5 bg-zinc-200 rounded-full shadow-md shadow-zinc-800"
      >
        {userImg ? (
          <img
            src={userImg}
            className="w-[2.5rem] h-[2.5rem] object-square rounded-full object-cover"
            alt="User image"
          />
        ) : (
          <FaUserCircle className="text-4xl text-slate-400" />
        )}
      </button>
      {showLogOut && (
        <button
          id="logOutBtn"
          onClick={handleLogOut}
          className="bg-zinc-200 hover:bg-red-600 hover:text-slate-100  text-slate-400 w-fit p-1.5 rounded-full shadow-md shadow-zinc-800"
        >
          <IoIosLogOut className="text-2xl" />
        </button>
      )}
    </div>
  );
}
