"use client";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex justify-center items-center gap-3 flex-col">
      <h2 className=" text-xl font-extrabold">Something went wrong!</h2>
      <p className=" text-center">{error?.message}</p>
      <div className=" flex gap-4">
        <button className="bg-purple-900 min-w-[160px]" onClick={() => reset()}>
          Try again
        </button>
        <button
          className="ring-purple-900 ring-1 hover:bg-purple-900 text-purple-900 hover:text-white min-w-[120px]"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
