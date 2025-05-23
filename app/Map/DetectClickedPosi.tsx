import { useRouter } from "next/navigation";
import { useMapEvents } from "react-leaflet";

export default function DetectClickedPosi() {
  const router = useRouter();
  useMapEvents({
    click: (e) => {
      router.push(`/Map/Form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
  return null;
}
