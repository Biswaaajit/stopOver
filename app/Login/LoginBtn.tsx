import { CgSpinner } from "react-icons/cg";

type LoginBtnProps = {
  name: string;
  loadingMsg: string;
  loading: boolean;
};

export default function LoginBtn({ name, loadingMsg, loading }: LoginBtnProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`w-fit self-center font-semibold bg-cyan-800  py-1 rounded-lg mt-6  transition-all ${
        loading
          ? "flex justify-center items-center gap-1 px-3 cursor-not-allowed"
          : "px-6 cursor-pointer"
      }`}
    >
      {loading && (
        <span className="animate-spin">
          <CgSpinner className="text-lg" />
        </span>
      )}
      {loading ? loadingMsg : name}
    </button>
  );
}
