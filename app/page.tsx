import Banner from "./components/Banner";
import Link from "next/link";

export default function Home() {
  const id = "Joseph";
  return (
    <div className="grid grid-rows-[10px_1fr_20px] justify-items-center min-h-screen p-3 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Banner />
        <h2 className=" text-bold text-xl">Stores</h2>
        <div className=" flex gap-3 justify-between flex-shrink ">
          <Link href={`/stores/${id}`}>Joseph</Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
