import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative">
      <Image
        src="/banner.png"
        alt="MEICA EXPO Banner"
        width={1113.6}
        height={405}
        className="h-auto w-full"
        priority
      />
    </section>
  );
};

export default Banner;
