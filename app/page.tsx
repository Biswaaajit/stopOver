import Image from "next/image";
import homepage from "@/public/homepage.jpg";
import HomePageContent from "./_components/HomePageContent";
import "leaflet/dist/leaflet.css";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen text-white">
      <Image
        src={homepage}
        alt="HomePage background"
        fill
        placeholder="blur"
        className="object-cover object-center"
      />
      <HomePageContent />
    </div>
  );
}
