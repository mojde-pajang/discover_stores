import Image from "next/image";
import React from "react";
import readingImage from "../../public/static/banner_image.png";

function Banner() {
  return (
    <div className="flex justify-between gap-5 w-full items-center">
      <h1>Book shop</h1>
      <Image src={readingImage} width={300} alt="Picture of the banner" />
    </div>
  );
}

export default Banner;
