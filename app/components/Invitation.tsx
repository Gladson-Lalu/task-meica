import React from "react";
import Image from "next/image";

const Invitation = () => {
  return (
    <section className="mt-32 w-full relative">
      <div className="mx-auto">
        <div className="absolute top-0 left-0 right-40">
          <div className="text-right h-full">
            <span className="text-secondary 2xl:text-[48px] xl:text-[44px] lg:text-[44px] text-[40px] font-bold font-Roboto uppercase">
              OFFICIAL INVITATION
              <br />
            </span>
            <span className="text-secondary 2xl:text-[48px] xl:text-[44px] lg:text-[44px] text-[40px] font-normal font-Roboto uppercase">
              MEICA EXPO 2025 6TH EDITION
            </span>
          </div>
          <div className="left-0 top-0 absolute justify-start text-[#0889A5]/5 2xl:text-[227.16px] xl:text-[220px] text-[200px] font-semibold font-['Inter'] leading-[174px]">
            MEICA EXPO
          </div>
        </div>

        <div className="scale-90 relative top-[105px] flex flex-col animate animate-fade-in-up">
          <div className="right-0 top-20 relative origin-top-right bg-[#10A2C9]/[0.28] rounded-[40px] w-full border clip-polygon h-[600px] bg-cover transition-all duration-500 hover:shadow-xl hover:bg-[#10A2C9]/[0.35]">
            <div className="flex flex-col justify-center gap-4 px-16 py-16 w-[70%] md:text-sm font-normal uppercase text-xs">
              <p>
                On behalf of the Executive Committee, I would like to invite you
                to attend and participate at the 6th Annual Middle East
                Instrumentation Cybersecurity and Automation Expo. The event i
                scheduled to take place on 16th – 18th September 2025 in Abu
                Dhabi, UAE. The upcoming event will gather the technical experts
                from all over the world to discuss the latest technology related
                to Instrumentation Control, Industrial Cybersecurity and Process
                Automation from various Industries to network with key industry
                peers. The forum will enhance communication and help in
                exchanging knowledge between the major stakeholders.
              </p>
              <p>
                On behalf of the Executive Committee, I would like to invite you
                to attend and participate at the 6th Annual Middle East
                Instrumentation Cybersecurity and Automation Expo. The event is
                scheduled to take place on 16th – 18th September 2025 in Abu
                Dhabi, UAE. The upcoming event will gather the technical experts
                from all over the world to discuss the latest technology related
                to Instrumentation Control, Industrial Cybersecurity and Process
                Automation from various Industries to network with key industry
                peers. The forum will enhance communication and help in
                exchanging knowledge between the major stakeholders.
              </p>
            </div>
          </div>
          <div className="absolute top-16 bottom-0 right-0">
            <div className="absolute top-[-57px] right-[30px] h-[360px] w-[346px]">
              <div className="w-[71%] h-[71%] bg-secondary rounded-[40px] overflow-hidden absolute bottom-[2px] left-1/2 -translate-x-[41%]" />
              <Image
                src="/partner.png"
                alt="Partner"
                width={360}
                height={346.85}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <div className="w-[107px] h-[107px] bg-white rounded-full border border-secondary absolute bottom-0 right-0 translate-x-5 translate-y-5" />
            </div>

            <div className="absolute bottom-[20%] right-[20%] flex flex-col gap-2 items-start w-[260px]">
              <div className="text-secondary text-[15px] font-semibold font-['Inter'] uppercase leading-none">
                Salem Al Bloosh
              </div>
              <div className="text-[#19AE93] text-[15px] font-semibold font-['Inter'] uppercase leading-none">
                Manager Industrial Maintenance (Instrumentation)
              </div>
              <div className="text-secondary text-[15px] font-semibold font-['Inter'] uppercase leading-none">
                ADNOC DISTRIBUTION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
