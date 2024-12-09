import Banner from "./components/Banner.client";
import { BOOK_STORES } from "./constants";
import Card from "./components/Card.server";

export default function Home() {
  const id = "Joseph";
  return (
    <div className="grid grid-rows-[10px_1fr_20px] justify-items-center min-h-screen p-3 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Banner />

        <h2 className=" text-3xl mb-3 font-bold mt-10">Paris Stores</h2>
        <div className=" grid justify-between gap-6 grid-cols-3 w-full">
          {BOOK_STORES.map((store, idx) => (
            <Card
              key={idx}
              name={store.name}
              href={store.href}
              imageUrl={store.image}
            />
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
