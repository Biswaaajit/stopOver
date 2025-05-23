import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function BackBtn() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/Map/Cities")}
      className="font-semibold flex justify-center items-center gap-0.5 bg-zinc-600 hover:bg-zinc-200 hover:text-black px-2 py-1 rounded-md transition-all"
    >
      <IoMdArrowRoundBack className="text-lg" />
      <span>Back</span>
    </button>
  );
}
