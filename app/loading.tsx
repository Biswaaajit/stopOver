import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-2 h-screen bg-zinc-900 text-slate-100">
      <p className="animate-spin text-lg md:text-xl xl:text-4xl">
        <ImSpinner9 />
      </p>
      <p className="text-lg md:text-xl xl:text-4xl font-semibold">Loading...</p>
    </div>
  );
}
