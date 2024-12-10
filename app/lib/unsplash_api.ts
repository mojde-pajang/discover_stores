import { createApi } from "unsplash-js";
export async function unsplashPhotos() {
  try {
    const unsplash = createApi({
      accessKey: process.env.UNSPLASH_ACCESS_KEY || "",
      // `fetch` options to be sent with every request
      headers: { "X-Custom-Header": "foo" },
    });

    const photos = await unsplash.search.getPhotos({
      query: "coffee store",
      page: 1,
      perPage: 6,
    });
    return photos?.response?.results || [];
  } catch (error) {
    console.error("No photo found", error);
    return [];
  }
}
