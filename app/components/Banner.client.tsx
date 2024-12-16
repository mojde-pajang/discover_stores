"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import readingImage from "../../public/static/banner_image.webp";

function Banner({
  handleNearByStore,
  isLocated,
}: {
  handleNearByStore: MouseEventHandler<HTMLButtonElement>;
  isLocated: boolean | null;
}) {
  return (
    <>
      <div className="flex justify-between gap-5 w-full items-center">
        <h1>Coffee Shop</h1>
        <Image
          src={readingImage}
          width={300}
          alt="Picture of the banner"
          priority={true}
        />
      </div>

      <button
        onClick={handleNearByStore}
        className="rounded-md bg-[#1a2c34] px-5 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#1e3237] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {isLocated ? "Locating..." : "See bookstores near you"}
      </button>
    </>
  );
}

export default Banner;
