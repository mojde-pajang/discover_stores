"use client";
import { useEffect, useState } from "react";
import { useGetGeoLocation } from "../hooks/useGetGeoLocation";
import Banner from "./Banner.client";
import Card from "./Card.server";
import { Store } from "../types";

function StoresNearBy() {
  const { handleTrackLocation, geoErrorMessage, longLat, isLocated } =
    useGetGeoLocation();
  const [nearByStores, setNearByStores] = useState<Store[] | []>([]);

  useEffect(() => {
    (async () => {
      if (longLat) {
        const result = await fetch(
          "/api/getStoresByLocation?longLat=" + longLat + "limit=" + 8
        );
        const data = await result.json();

        setNearByStores(data?.result);
      }
    })();
  }, [longLat]);
  const handleClick = () => {
    handleTrackLocation();
  };
  return (
    <div className=" w-full">
      <Banner handleNearByStore={handleClick} isLocated={isLocated} />
      {geoErrorMessage && <p>Error: {geoErrorMessage}</p>}
      {nearByStores.length > 0 && (
        <div>
          <h2 className=" text-3xl mb-3 font-bold mt-10">Stores near by</h2>
          <div className=" grid justify-between gap-6 grid-cols-3 w-full">
            {nearByStores?.map((store, idx) => (
              <Card
                key={idx}
                name={store.name}
                href={`/stores/${store.id}?id=${idx}`}
                imageUrl={store.imageUrl}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default StoresNearBy;
