import { Feature, Store } from "../types";
import { unsplashPhotos } from "./unsplash_api";
import { Basic } from "unsplash-js/dist/methods/photos/types";

const transformCoffeeStore = (
  shop: Feature,
  photos: Basic[],
  id: number
): Partial<Store> => {
  return {
    id: shop.id || shop?.properties?.mapbox_id,
    name: shop.properties.name,
    address: shop.properties.full_address,
    imageUrl:
      photos[id]?.urls.small ||
      "https://images.unsplash.com/photo-1528731918315-d95040a988ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODQ4MzR8MHwxfHNlYXJjaHw1fHxjb2ZmZWUlMjBzdG9yZXxlbnwwfHx8fDE3MzM4MTM2NTZ8MA&ixlib=rb-4.0.3&q=80&w=400",
  };
};

export const getStores = async (
  longLat: string,
  limit: number
): Promise<Store[]> => {
  try {
    const data = await fetch(
      `https://api.mapbox.com/search/geocode/v6/forward?q=coffee&limit=${limit}&proximity=${longLat}&types=place&access_token=${process.env.MAPBOX_TOKEN}`
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
