import { useState } from "react";
import InputTag from "./InputTag";
import InputPassword from "./InputPassword";
import LoginBtn from "./LoginBtn";
import GradientWord from "./GradientWord";
import FormLayout from "./FormLayout";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../_lib/UserSlice";
import { AppDispatch } from "../_lib/store";

export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState<string>("biswa@gmail.com");
  const [loginPassword, setLoginPassword] = useState<string>("123");
  const [loginLoading, setLoginLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const res = await fetch(
        "https://stopover-backend.onrender.com/user/login",
        {
          method: "POST",
          body: JSON.stringify({
            userEmail: loginEmail,
            userPassword: loginPassword,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();
      if (!res.ok) {
        console.error(resData.message);
        toast.error(resData.message);
      } else {
        console.log(resData.token);
        localStorage.setItem("token", resData.token);
        dispatch(addUser(resData.user));
        toast.success("Login successful!!");
        router.push("/Map");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoginLoading(false);
    }
  }
  return (
    <FormLayout handleForm={handleLoginSubmit}>
      <GradientWord name="Login" />
      <InputTag
        type="text"
        placeholder="User Email"
        value={loginEmail}
        setFunc={setLoginEmail}
      />
      <InputPassword value={loginPassword} setFunc={setLoginPassword} />
      <LoginBtn name="Login" loading={loginLoading} loadingMsg="Logging..." />
    </FormLayout>
  );
}
