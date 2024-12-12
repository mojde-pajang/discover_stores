"use client";
import Image from "next/image";

export function SubmitButton() {
  return (
    <button type="submit" className="bg-purple-900 min-w-[120px]">
      Up vote!
    </button>
  );
}

export default function Upvote({ voting }: { voting: number }) {
  return (
    <form>
      <div className="mb-6 flex">
        <Image src="/static/star.svg" width="24" height="24" alt="star icon" />
        <p className="pl-2">{voting}</p>
      </div>

      <SubmitButton />
    </form>
  );
}
