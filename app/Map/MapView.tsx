"use client";
import { TileLayer } from "react-leaflet/TileLayer";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { useSelector } from "react-redux";
import { RootState } from "../_lib/store";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ChangeMapPosi from "./ChangeMapPosi";
import DetectClickedPosi from "./DetectClickedPosi";
import LocationBtn from "./LocationBtn";
import User from "./User";

export default function MapView() {
  const [mapPosi, setMapPosi] = useState<[number, number]>([40, 0]);
  const cities = useSelector((store: RootState) => store.userData.dataLists);
  const searchParams = useSearchParams();
  const mlat = searchParams.get("lat");
  const mlng = searchParams.get("lng");

  //setting mapPosi according to searchParams
  useEffect(() => {
    if (mlat && mlng) setMapPosi([Number(mlat), Number(mlng)]);
  }, [mlat, mlng]);

  return (
    <div className="w-full h-[70vh] lg:h-screen lg:w-[70%] relative z-10">
      <User />
      <LocationBtn setMapPosi={setMapPosi} />
      <MapContainer
        className="h-full"
        center={mapPosi}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city._id}
          >
            <Popup>{city.notes}</Popup>
          </Marker>
        ))}
        <ChangeMapPosi currentPosi={mapPosi} />
        <DetectClickedPosi />
      </MapContainer>
    </div>
  );
}
