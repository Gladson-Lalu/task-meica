import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="my-16 overflow-hidden rounded-3xl">
      <Image
        src="/banner.png"
        alt="MEICA EXPO 2025 Banner"
        width={1113.6}
        height={405}
        className="h-auto w-full  shadow-lg animate-fade-in"
        priority
      />
    </section>
  );
};

export default Banner;
