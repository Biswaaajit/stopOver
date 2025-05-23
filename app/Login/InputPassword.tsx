import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type InputPasswordProps = {
  value: string;
  setFunc: (value: string) => void;
};

export default function InputPassword({ value, setFunc }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center w-full  border-b-2 border-zinc-800 hover:border-slate-200  pb-0.5 hover:pb-2 focus-within:pb-2 transition-all">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={value}
        required
        onChange={(e) => setFunc(e.target.value)}
        className="focus-within:outline-none w-full"
      />
      <button type="button" onClick={() => setShowPassword((curr) => !curr)}>
        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </button>
    </div>
  );
}
