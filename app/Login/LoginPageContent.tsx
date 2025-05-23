"use client";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";
import { useSelector } from "react-redux";
import { RootState } from "../_lib/store";
import { useRouter } from "next/navigation";

export default function LoginPageContent() {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const login = useSelector((store: RootState) => store.user.loginStatus);
  const router = useRouter();

  useEffect(() => {
    if (login) {
      router.push("/Map/Cities");
    }
  }, [router, login]);
  return (
    <div className="w-full min-h-screen bg-black/40 absolute top-0 flex gap-4 flex-col justify-center items-center">
      {/* form switch btn */}
      <div className="flex justify-center items-center gap-2 w-fit backdrop-lg bg-black/40  px-6 py-3 rounded-lg">
        <button
          onClick={() => setShowLogin(true)}
          className={`transition-all ${
            showLogin ? "text-xl font-semibold" : "text-sm font-normal"
          }`}
        >
          Login
        </button>
        <span>/</span>
        <button
          className={`transition-all ${
            showLogin ? "text-sm font-normal" : " text-xl font-semibold"
          }`}
          onClick={() => setShowLogin(false)}
        >
          SignUp
        </button>
      </div>

      {/* forms */}
      <div className="w-[80%] md:w-[65%] lg:w-[50%] xl:w-[40%] py-8 flex justify-center items-center backdrop-blur-sm bg-black/40 rounded-lg">
        {showLogin ? <LoginForm /> : <SignInForm setShowLogin={setShowLogin} />}
      </div>
    </div>
  );
}
