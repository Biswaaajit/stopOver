import { dataProps } from "@/app/_lib/Data/city";
import { AppDispatch } from "@/app/_lib/store";
import { deleteByDataId } from "@/app/_lib/UserDataSlice";
import formatDate from "@/app/_lib/Utils/formatData";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

type CityProps = {
  cityList: dataProps;
};
export default function City({ cityList }: CityProps) {
  const { _id, cityName, countryCode, date, position } = cityList;
  const dispatch = useDispatch<AppDispatch>();
  const { lat, lng } = position;
  const visitDate = formatDate(date);

  async function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    const loaderId = toast.loading("Deleting...");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `https://stopover-backend.onrender.com/visit/delete/${_id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `JWT ${token}`,
          },
        }
      );
      const resData = await res.json();
      if (!res.ok) {
        console.log(resData);
        toast.error(resData.message, { id: loaderId });
      } else {
        dispatch(deleteByDataId(_id));
        toast.success(resData.message, { id: loaderId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong", { id: loaderId });
    }
  }
  return (
    <Link
      href={`/Map/${_id}?lat=${lat}&lng=${lng}`}
      className="city-items bg-zinc-900 flex py-2 px-2.5 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[90%] rounded-md mx-auto border-l-4 border-cyan-600"
    >
      <div className="flex justify-center items-center gap-1.5">
        <Image
          src={`https://flagcdn.com/48x36/${countryCode}.png`}
          width="24"
          height="18"
          alt="Ukraine"
        />
        <span className="font-semibold text-base sm:text-lg lg:text-base xl:text-lg">
          {cityName}
        </span>
      </div>
      <div className="grow flex justify-end items-center gap-3">
        <p className="text-xs text-zinc-500 font-semibold">{visitDate}</p>
        <button
          onClick={handleDelete}
          className="w-fit flex justify-end items-center "
        >
          <IoClose className="bg-zinc-700 text-zinc-500 hover:bg-zinc-500 hover:text-zinc-300 rounded-full p-0.5 " />
        </button>
      </div>
    </Link>
  );
}
