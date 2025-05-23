import { CgSpinner } from "react-icons/cg";

export default function MiniSpinner() {
  return (
    <div className="w-full h-full lg:h-[40vh] bg-transparent  flex justify-center items-center">
      <p className="animate-spin text-4xl">
        <CgSpinner />
      </p>
    </div>
  );
}
