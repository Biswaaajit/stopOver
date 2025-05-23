import { useEffect } from "react";
import { useMap } from "react-leaflet";

type ChangeMapPosiProps = {
  currentPosi: [number, number];
};

export default function ChangeMapPosi({ currentPosi }: ChangeMapPosiProps) {
  const map = useMap();
  useEffect(() => {
    map.setView(currentPosi);
  }, [currentPosi, map]);
  return null;
}
