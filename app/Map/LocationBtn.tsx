import toast from "react-hot-toast";
import { TbCurrentLocation } from "react-icons/tb";

type LocationBtnProps = {
  setMapPosi: React.Dispatch<React.SetStateAction<[number, number]>>;
};

export default function LocationBtn({ setMapPosi }: LocationBtnProps) {
  //getting current user location
  function handleUserLocation() {
    if (!navigator.geolocation) {
      return toast.error("Location feature is not supported!!");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setMapPosi([latitude, longitude]);
        toast.success("Location updated on map!");
      },
      () => {
        toast.error("Could not get your location!");
      }
    );
  }
  return (
    <button
      onClick={handleUserLocation}
      className="bg-cyan-700 hover:bg-cyan-600 text-slate-200 text-xl absolute z-[99999] bottom-8 right-3 p-2 rounded-md shadow-md shadow-zinc-800"
    >
      <TbCurrentLocation />
    </button>
  );
}
