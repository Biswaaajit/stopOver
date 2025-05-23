import { useRouter } from "next/navigation";

type MiniErrorProps = {
  errMsg: string;
};
export default function MiniError({ errMsg }: MiniErrorProps) {
  const router = useRouter();
  return (
    <div className="bg-zinc-950 w-full h-[30vh] flex flex-col gap-4 justify-center items-center">
      <p className="text-red-500 mt-3 text-center px-4 text-xl">{errMsg}</p>
      <button
        className="border px-3 py-1 rounded-lg text-sm hover:bg-slate-200 hover:text-black font-semibold"
        onClick={() => router.push("/Login")}
      >
        Login again!
      </button>
    </div>
  );
}
