import React from "react";
import Image from "next/image";

const ParticipatingOrganizations = () => {
  return (
    <section className="w-full mt-32  bg-gradient-to-r from-primary/50 via-[#F5F5F5] to-[#F5F5F5] rounded-[15px] items-center py-3 px-12 grid grid-cols-3">
      <h3 className="text-white font-bold text-xl col-span-1">
        KEY PARTICIPATING
        <br />
        ORGANIZATIONS
      </h3>

      <div className="flex flex-grow justify-around items-center col-span-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="grayscale hover:grayscale-0 transition-all duration-500"
          >
            <Image
              src={`/p${i}.png`}
              alt={`Partner ${i}`}
              width={100}
              height={50}
              priority
              className="h-[80px] w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParticipatingOrganizations;
