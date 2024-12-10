import { Feature, Store } from "../types";
import { unsplashPhotos } from "./unsplash_api";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const transformCoffeeStore = (
  shop: Feature,
  photos: Basic[],
  id: number
): Store => {
  return {
    id: shop.id || shop?.properties?.mapbox_id,
    name: shop.properties.name,
    address: shop.properties.full_address,
    imageUrl:
      photos[id]?.urls.small ||
      "https://pixabay.com/get/g9bf0f24f4cecb3174bd0baac9f968953ca8591f23c73d73a0f5ff59986ff89751474bfba78e53b43b6a5143eadf01c52_640.jpg",
  };
};

export const getStores = async (): Promise<[] | Store[]> => {
  try {
    const data = await fetch(
      `https://api.mapbox.com/search/geocode/v6/forward?q=coffee&country=us&limit=6&proximity=-74.00763403803957%2C40.71322172252451&types=place&access_token=${process.env.MAPBOX_TOKEN}`
    );

    const photos = await unsplashPhotos();
    const { features } = await data.json();
    const coffeeStores: Store[] = features.map(
      (feature: Feature, idx: number) =>
        transformCoffeeStore(feature, photos, idx)
    );
    return coffeeStores.length || undefined ? coffeeStores : [];
  } catch (error) {
    console.error("Error fetching", error);
    return [];
  }
};

export const getStore = async (
  StoreID: string,
  id: number
): Promise<Store | null> => {
  try {
    const data = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/retrieve/${StoreID}?session_token=0697ab44-3236-4491-893a-bc5803c05869&access_token=${process.env.MAPBOX_TOKEN}`
    );
    const photos = await unsplashPhotos();
    const { features } = await data.json();
    const coffeeStore: Store[] = features?.map((feature: Feature) =>
      transformCoffeeStore(feature, photos, id)
    );
    return coffeeStore.length > 0 ? coffeeStore[0] : null;
  } catch (error) {
    console.error("Error fetching", error);
    return null;
  }
};
