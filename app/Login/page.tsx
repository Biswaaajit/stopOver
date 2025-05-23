import Image from "next/image";
import LoginPageContent from "./LoginPageContent";

function Page() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-slate-200 relative">
      <Image
        src="/login.jpg"
        alt="login cover image"
        fill
        className="object-cover object-center"
      />
      <LoginPageContent />
    </div>
  );
}

export default Page;
