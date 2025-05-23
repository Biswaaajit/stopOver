import React, { useState } from "react";
import GradientWord from "./GradientWord";
import InputTag from "./InputTag";
import InputPassword from "./InputPassword";
import LoginBtn from "./LoginBtn";
import FormLayout from "./FormLayout";
import toast from "react-hot-toast";

type SignInFormProps = {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SignInForm({ setShowLogin }: SignInFormProps) {
  const [signInUser, setSignInUser] = useState<string>("");
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");
  const [signInUserImg, setSignInUserImg] = useState<string>("");
  const [signLoading, setSignLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignLoading(true);
    try {
      const res = await fetch(
        "https://stopover-backend.onrender.com/user/signup",
        {
          method: "POST",
          body: JSON.stringify({
            userName: signInUser,
            userPassword: signInPassword,
            userEmail: signInEmail,
            userImage: signInUserImg,
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
        console.log(resData);
        toast.success(resData.message);
        setShowLogin(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSignLoading(false);
    }
  }
  return (
    <FormLayout handleForm={handleSignIn}>
      <GradientWord name="Sign Up" />
      <InputTag
        type="text"
        placeholder="Username"
        value={signInUser}
        setFunc={setSignInUser}
      />
      <InputTag
        type="email"
        placeholder="User email"
        value={signInEmail}
        setFunc={setSignInEmail}
      />
      <InputPassword value={signInPassword} setFunc={setSignInPassword} />
      <InputTag
        type="text"
        required={false}
        value={signInUserImg}
        setFunc={setSignInUserImg}
        placeholder="Image Url (optional)"
      />
      <LoginBtn name="Sign In" loading={signLoading} loadingMsg="Signing..." />
    </FormLayout>
  );
}
