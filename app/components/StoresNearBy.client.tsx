"use client";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { useGetGeoLocation } from "../hooks/useGetGeoLocation";
import Banner from "./Banner.client";

function StoresNearBy() {
  const { handleTrackLocation, geoErrorMessage, longLat, isLocated } =
    useGetGeoLocation();

  const handleClick = () => {
    console.log(1);
    handleTrackLocation();
  };
  return (
    <div className=" w-full">
      <Banner handleNearByStore={handleClick} isLocated={isLocated} />
    </div>
  );
}

export default StoresNearBy;
