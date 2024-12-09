export type Feature = {
  type: "Feature";
  id: string;
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    mapbox_id: string;
    feature_type: string;
    full_address: string;
    name: string;
    name_preferred: string;
    coordinates: {
      longitude: number;
      latitude: number;
    };
    place_formatted: string;
    bbox: [number, number, number, number];
    context: {
      district?: {
        mapbox_id: string;
        name: string;
        wikidata_id: string;
      };
      region?: {
        mapbox_id: string;
        name: string;
        wikidata_id: string;
        region_code: string;
        region_code_full: string;
      };
      country?: {
        mapbox_id: string;
        name: string;
        wikidata_id: string;
        country_code: string;
        country_code_alpha_3: string;
      };
      place?: {
        mapbox_id: string;
        name: string;
        wikidata_id: string;
      };
    };
  };
};

export type Store = {
  id: string;
  name: string;
  address: string;
  imageUrl: string;
};
