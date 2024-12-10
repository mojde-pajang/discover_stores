"use client";

import { useState } from "react";

type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

export function useGetGeoLocation() {
  const [isLocated, setIsLocated] = useState<boolean | null>(null);
  const [longLat, setLongLat] = useState("");
  const [geoErrorMessage, setGeoErrorMessage] = useState("");
  function success(position: Position): {
    latitude: number;
    longitude: number;
  } {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
    setIsLocated(false);
    setLongLat(`${longitude},${latitude}`);
    return { latitude, longitude };
  }

  function error(): null {
    console.error("Unable to retrieve your location");
    setIsLocated(false);
    setGeoErrorMessage("Unable to retrieve your location");
    return null;
  }
  function handleTrackLocation() {
    if (!navigator?.geolocation) {
      console.log("Geolocation is not supported by your browser");
      setGeoErrorMessage("Geolocation is not supported by your browser");
      setIsLocated(false);
      return null;
    } else {
      console.log("Locating…");
      setGeoErrorMessage("");
      setIsLocated(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return { handleTrackLocation, isLocated, longLat, geoErrorMessage };
}
