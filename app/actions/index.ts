"use server";

import { updateStoreInDB } from "../lib/airtable";

export const upvoteAction = async (prevState: { id: string }) => {
  const { id } = prevState;
  const updatedValue = await updateStoreInDB(id);
  const voteValue = !updatedValue?.length
    ? 0
    : "fields" in updatedValue[0]
    ? updatedValue[0]?.fields?.vote
    : updatedValue[0]?.vote;

  return {
    vote: voteValue,
    id: id,
  };
};
