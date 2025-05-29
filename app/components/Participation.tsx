import React from "react";

// Reusable Card Component
const Card = ({
  title,
  description,
  svgBgName,
  className = "",
  titleClassName = "",
}: {
  title: string;
  description: string;
  svgBgName: string;
  className?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={`relative flex flex-col items-start justify-end ${className}`}
      style={{
        backgroundImage: `url(/${svgBgName}.svg)`,
        backgroundSize: "100% 100%", // Stretch SVG to fill
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "fill",
        objectPosition: "center",
        minWidth: "200px",
        padding: "0.5rem",
        aspectRatio: "258.82 / 173.26", // Ensure a minimum height
      }}
    >
      <h3
        className={`text-3xl font-semibold text-[#737373]  ${titleClassName}`}
      >
        {title}
      </h3>
      <div className="text-[11.4px] absolute -bottom-1/2 translate-y-1/2  left-1/2 -translate-x-1/2 w-full text-start text-black leading-relaxed">
        <p className="">{description}</p>
      </div>
    </div>
  );
};

// Special "Register Now" Block
const RegisterNowBlock = ({
  svgBgName,
  className = "",
}: {
  svgBgName: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex flex-col justify-center ${className}`}
      style={{
        backgroundImage: `url(/${svgBgName}.svg)`,
        backgroundSize: "100% 100%", // Stretch SVG to fill
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "fill",
        objectPosition: "center",
        minWidth: "200px",
        padding: "0.5rem",
        aspectRatio: "258.82 / 173.26",
      }}
    >
      <h2 className="text-4xl font-bold text-[#043B48] leading-tight">
        REGISTER
      </h2>
      <h2 className="text-4xl font-thin text-[#043B48] leading-tight">NOW</h2>
    </div>
  );
};

// Text content for cards
const cardData = {
  exhibitors: {
    title: "Exhibitors",
    description:
      "Showcase your latest products and innovations to a targeted audience, gain valuable leads, and boost brand visibility at the industry's leading exhibition.",
  },
  speakers: {
    title: "Speakers",
    description:
      "Share your expertise on a prestigious platform, influence industry trends, and engage with a diverse audience of professionals and leaders.",
  },
  sponsors: {
    title: "Sponsors",
    description:
      "Maximize your brand exposure, position your company as a market leader, and connect with decision-makers through high-impact sponsorship opportunities.",
  },
  media: {
    title: "Media",
    description:
      "Gain exclusive access to industry leaders, expand your audience reach, and enhance your brand's visibility by partnering with us as an official media partner for the event.",
  },
  visitors: {
    title: "Visitors",
    description:
      "Explore cutting-edge solutions, network with industry experts, and gain insights from thought-provoking sessions—all in one dynamic event.",
  },
  delegates: {
    title: "Delegates",
    description:
      "Enhance your knowledge, build strategic connections, and discover actionable ideas to drive success in your field by attending insightful sessions and networking events.",
  },
};

function Participation() {
  return (
    <div className=" bg-white flex items-center justify-center p-4 my-32 md:p-10">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-10">
          <Card
            title={cardData.exhibitors.title}
            description={cardData.exhibitors.description}
            svgBgName="r-b" // Rounded-Upper-Left with right notch
            className="col-start-1"
          />
          <RegisterNowBlock
            svgBgName="r-f" // Rounded-Full
            className="col-start-2"
          />
          <Card
            title={cardData.speakers.title}
            description={cardData.speakers.description}
            svgBgName="r-f" // Rounded-Upper-Right with left notch
            className="col-start-3"
          />
          <div className="col-start-4 row-start-1 row-span-2 flex flex-col justify-start items-start pt-2 md:pt-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary whitespace-nowrap">
              HOW CAN YOU
            </h1>
            <h1 className="text-5xl lg:text-6xl font-thin text-slate-700 whitespace-nowrap">
              PARTICIPATE
            </h1>
          </div>

          <Card
            title={cardData.sponsors.title}
            description={cardData.sponsors.description}
            svgBgName="r-u-r" // Rounded-Bottom with top notches
            className="col-start-2 row-start-2"
          />
          <Card
            title={cardData.visitors.title}
            description={cardData.visitors.description}
            svgBgName="r-f" // Rounded-Upper-Right with left notch
            className="col-start-4 row-start-2"
          />
          <Card
            title={cardData.delegates.title}
            description={cardData.delegates.description}
            svgBgName="r-u-l" // Rounded-Full
            className="col-start-5 row-start-2"
          />
          <Card
            title={cardData.media.title}
            description={cardData.media.description}
            svgBgName="r-f" // Rounded-Bottom with top notches
            className="col-start-3  row-start-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Participation;
