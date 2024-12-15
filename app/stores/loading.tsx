import Image from "next/image";

export default function Loading() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <Image
        src="/static/loading.svg"
        alt="Loading page"
        width={200}
        height={200}
      />{" "}
    </div>
  );
}
