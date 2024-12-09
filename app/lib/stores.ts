import { Feature, Store } from "../types";

const transformCoffeeStore = (shop: Feature): Store => {
  return {
    id: shop.id,
    name: shop.properties.name,
    address: shop.properties.full_address,
    imageUrl:
      "https://pixabay.com/get/g9bf0f24f4cecb3174bd0baac9f968953ca8591f23c73d73a0f5ff59986ff89751474bfba78e53b43b6a5143eadf01c52_640.jpg",
  };
};

export const getStores = async () => {
  try {
    const data = await fetch(
      `https://api.mapbox.com/search/geocode/v6/forward?q=coffee&country=us&limit=6&proximity=-74.00763403803957%2C40.71322172252451&types=place&access_token=${process.env.MAPBOX_TOKEN}`
    );
    const { features } = await data.json();
    const coffeeStores: Store[] = features.map((feature: Feature) =>
      transformCoffeeStore(feature)
    );
    return coffeeStores;
  } catch (error) {
    console.error("Error fetching", error);
  }
};
