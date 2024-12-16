"use client";
import Image from "next/image";
import { upvoteAction } from "../actions";
import { useActionState } from "react";

export default function Upvote({ vote, id }: { vote: number; id: string }) {
  const initialState = {
    vote,
    id,
  };
  const [state, formAction, isPending] = useActionState(
    upvoteAction,
    initialState
  );
  return (
    <form action={formAction}>
      <div className="mb-6 flex">
        <Image src="/static/star.svg" width="24" height="24" alt="star icon" />
        <p className="pl-2">{state?.vote}</p>
      </div>

      <button type="submit" className="bg-purple-900 min-w-[120px]">
        {isPending ? "Loading..." : "Up vote!"}
      </button>
    </form>
  );
}
