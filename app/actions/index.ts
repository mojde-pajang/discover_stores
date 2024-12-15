"use server";

import { updateStoreInDB } from "../lib/airtable";

export const upvoteAction = async (prevState: any) => {
  const { id } = prevState;
  const updatedValue = await updateStoreInDB(id);
  return {
    vote: updatedValue?.length ? updatedValue[0]?.vote : 0,
    id: id,
  };
};
