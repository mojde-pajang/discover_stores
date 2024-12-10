import Banner from "./components/Banner.client";
import Card from "./components/Card.server";
import { getStores } from "./lib/stores";
export default async function Home() {
  const data = await getStores();
  console.log(44, data);
  return (
    <div className="grid grid-rows-[10px_1fr_20px] justify-items-center min-h-screen p-3 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Banner />

        <h2 className=" text-3xl mb-3 font-bold mt-10">Paris Stores</h2>
        <div className=" grid justify-between gap-6 grid-cols-3 w-full">
          {data?.map((store, idx) => (
            <Card
              key={idx}
              name={store.name}
              href={`/stores/${store.id}?id=${idx}`}
              imageUrl={store.imageUrl}
            />
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
