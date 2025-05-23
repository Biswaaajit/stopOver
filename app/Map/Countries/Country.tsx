import { dataProps } from "@/app/_lib/Data/city";
import Image from "next/image";

type countryProps = {
  country: dataProps;
};

export default function Country({ country }: countryProps) {
  return (
    <div className="country-list flex justify-center items-center w-fit bg-zinc-900 basis-[25%] sm:basis-[20%] lg:basis-[30%] xl:basis-[25%] py-1.5 gap-2 rounded-md border-l-4 border-cyan-600 transition-all">
      <Image
        src={`https://flagcdn.com/48x36/${country.countryCode}.png`}
        width="24"
        height="18"
        alt="Ukraine"
      />
      <p className="font-semibold">{country.country}</p>
    </div>
  );
}
