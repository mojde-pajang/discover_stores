import { AirtableRecord, Store } from "../types";

var Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_TOKEN,
});
var table = Airtable.base("appRpNnVRyyCEgwP1");

export async function getStoreFromDB(id: string) {
  const filterStore = await table("store")
    .select({
      filterByFormula: `id="${id}"`,
    })
    .firstPage();

  const allRecords = filterStore?.map((record: AirtableRecord) => ({
    recordId: record?.id,
    ...record?.fields,
  }));

  return allRecords;
}

export async function createStoreInDB(id: string, storeRecord: Store) {
  const { name, address, imageUrl } = storeRecord;
  try {
    if (id) {
      const filteredStore = await getStoreFromDB(id);
      if (filteredStore.length == 0) {
        const createdRecords = await table("store").create([
          {
            fields: {
              id,
              imageUrl,
              name,
              address,
              vote: 0,
            },
          },
        ]);
        const savedRecord = createdRecords?.map((record: AirtableRecord) => ({
          ...record?.fields,
        }));
        return savedRecord;
      } else {
        return filteredStore;
      }
    } else {
      console.error("Store id is missing");
    }
  } catch (error) {
    console.error("Error on creating or finding records", error);
  }
}

export async function updateStoreInDB(id: string) {
  try {
    if (id) {
      const filteredStore = await getStoreFromDB(id);
      const storeInfo = filteredStore[0];
      const currentVote = storeInfo?.vote;
      if (filteredStore.length != 0) {
        const updateRecords = await table("store").update([
          {
            id: storeInfo?.recordId,
            fields: {
              vote: currentVote + 1,
            },
          },
        ]);
        const updatedRecord = updateRecords?.map((record: AirtableRecord) => ({
          ...record?.fields,
        }));
        return updatedRecord;
      } else {
        return filteredStore;
      }
    } else {
      console.error("Store id is missing");
    }
  } catch (error) {
    console.error("Error on creating or finding records", error);
  }
}
