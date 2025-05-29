import React from "react";

const Intro = () => {
  return (
    <section className="my-[128px] flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <div className="lg:text-3xl text-2xl font-bold text-primary">
          <span className="block font-light">MIDDLE EAST</span>
          <span className="block -mt-2">INSTRUMENTATION,</span>
          <span className="block -mt-2">CYBERSECURITY &</span>
          <span className="block -mt-2">AUTOMATION</span>
          <span className="block font-light -mt-2">EXPO</span>
        </div>
      </div>
      <div className="md:w-2/3 text-sm font-light">
        <p>
          MEICA EXPO 2025 WAS THE FIRST INSTRUMENTATION CONTROL AND AUTOMATION
          EXPO IN MIDDLE EAST. THE INDUSTRY LEADERS SHOWCASED THE LATEST
          TECHNOLOGY TRENDS IN INSTRUMENTATION, CONTROL SYSTEMS, PRODUCERS,
          POWER GENERATORS ETC. TO ENHANCE AND IMPROVE PROCESS EFFICIENCY,
          SAFETY AND INDUSTRIAL CYBERSECURITY PRACTICES.
        </p>
        <br />
        <p>
          MEICA EXPO 2025 IN ITS 6TH EDITION HAS BECOME A HIGH-NETWORTH
          TECHNICAL EXPO WITH THE LATEST INDUSTRY TRENDS IN INSTRUMENTATION,
          CONTROL SYSTEMS, PRODUCERS, POWER GENERATORS ETC. TO ADOPT THE BEST
          PRACTICES TO BENCHMARK COST-EFFECTIVE METHODS THAT WILL ENLIGHTEN THE
          INDUSTRY LEADERS. THE EXPO WILL PROVIDE A PLATFORM TO CONNECT WITH
          BOTH REGIONAL AND INTERNATIONAL EXPERTS, FOCUSING ON ALL ASPECTS OF
          PRODUCTION, MANUFACTURING AND PROCESSING ENTITIES IN THE WIDER WORLD.
        </p>
      </div>
    </section>
  );
};

export default Intro;
