import { dataProps } from "@/app/_lib/Data/city";
import Image from "next/image";
import CityInfo from "./CityInfo";
import { FiExternalLink } from "react-icons/fi";
import formatDateWithDay from "@/app/_lib/Utils/formatDateWithDay";
import BackBtn from "@/app/_components/BackBtn";

type CityInfoPageProps = {
  cityInfo: dataProps;
};

export default function CityInfoPage({ cityInfo }: CityInfoPageProps) {
  const { countryCode, cityName, date, notes } = cityInfo;
  const formatDate = formatDateWithDay(date);
  return (
    <div className="w-[95%] sm:w-[90%] md:[80%] lg:w-[95%] xl:w-[90%] mx-auto space-y-5 bg-zinc-900/80 px-2 sm:px-6 xl:px-4 py-6 rounded-md">
      <CityInfo label="City Name">
        <div className="flex justify-start items-center gap-2">
          <Image
            src={`https://flagcdn.com/48x36/${countryCode}.png`}
            width="24"
            height="18"
            alt="Ukraine"
          />
          <p className="font-semibold sm:text-lg lg:text-base">{cityName}</p>
        </div>
      </CityInfo>
      <CityInfo label={`You visited ${cityName} on`}>
        <p className="font-semibold sm:text-lg lg:text-base">{formatDate}</p>
      </CityInfo>
      <CityInfo label="Your Note">
        <p className="font-semibold sm:text-lg lg:text-base">
          {notes ? notes : "Nothing worth remembering"}
        </p>
      </CityInfo>
      <CityInfo label={`To learn more about ${cityName}`}>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          className="flex justify-start items-center gap-1.5 text-cyan-600 font-semibold sm:text-lg lg:text-base"
        >
          <span>Check Out</span>
          <span>
            <FiExternalLink />
          </span>
        </a>
      </CityInfo>
      <BackBtn />
    </div>
  );
}
