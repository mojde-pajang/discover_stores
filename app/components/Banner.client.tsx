"use client";
import Image from "next/image";
import React from "react";
import readingImage from "../../public/static/banner_image.png";

function Banner() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div className=" w-full">
      <div className="flex justify-between gap-5 w-full items-center">
        <h1>Book shop</h1>
        <Image src={readingImage} width={300} alt="Picture of the banner" />
      </div>

      <button
        onClick={handleClick}
        className="rounded-md bg-[#fe735b] px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#f1583d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        See bookstores near you
      </button>
    </div>
  );
}

export default Banner;
