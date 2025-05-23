import BackBtn from "@/app/_components/BackBtn";
import { IoMdAdd } from "react-icons/io";

export default function FormBtn() {
  return (
    <div className="flex justify-between items-center">
      <BackBtn />
      <button
        type="submit"
        className="font-semibold flex justify-center items-center gap-0.5 bg-cyan-800 hover:bg-cyan-600 px-2 py-1 rounded-md transition-all"
      >
        <IoMdAdd className="text-lg" />
        <span>Add</span>
      </button>
    </div>
  );
}
