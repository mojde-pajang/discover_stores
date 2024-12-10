import { getStore, getStores } from "@/app/lib/stores";
import { Store } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function generateStaticParams() {
  const stores = await getStores();

  return stores.map((store: Store) => ({
    id: store.id,
  }));
}
async function Page(props: {
  params: { id: string };
  searchParams: { id: number };
}) {
  const { params, searchParams } = props;
  const store = await getStore(params?.id, searchParams?.id);

  if (!store) {
    return (
      <div className="h-full pb-80">
        <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">← Back to home</Link>
          </div>
          <div>Store not found</div>;
        </div>
      </div>
    );
  }
  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">← Back to home</Link>
          </div>
          <div className="my-4">
            <h1 className="text-4xl">{store?.name}</h1>
          </div>
          <Image
            src={
              store.imageUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={740}
            height={360}
            className="max-h-[420px] min-w-full max-w-full rounded-lg border-2 sepia lg:max-w-[470px] "
            alt={"Coffee Store Image"}
          />
        </div>

        <div className={`glass mt-12 flex-col rounded-lg p-4 lg:mt-48`}>
          <h2 className=" text-xl font-bold">{store.address}</h2>
        </div>
      </div>
    </div>
  );
}

export default Page;
