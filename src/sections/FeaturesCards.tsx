import { twMerge } from "tailwind-merge";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import { useState } from "react";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText";
import { transform } from "typescript";
const cardData = [
  {
    image: "/assets/images/pill.png",
    title: "Heading of the Card ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur repudiandae, dolores exercitationem",
    color: "fuchsia",
  },
  {
    image: "/assets/images/cuboid.png",
    title: "Heading of the Card ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur repudiandae, dolores exercitationem",
    color: "lime",
  },
  {
    image: "/assets/images/icosahedron.png",
    title: "Heading of the Card ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur repudiandae, dolores exercitationem",
    color: "cyan",
  },
  {
    image: "/assets/images/cone.png",
    title: "Heading of the Card ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur repudiandae, dolores exercitationem",
    color: "violet",
  },
];

export const FeaturesCardsSection = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <BlurText
          text=" Discover the future of marketing with Digitar Media"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center mt-32"
        />
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map(({ image, title, description, color }, cardIndex) => (
              <div
                style={{
                  transform: `translateX(calc((-100% - 2rem)*${selectedCardIndex}))`,
                }}
              >
                <div
                  className="relative z-0 p-8 md:p-10 max-w-xs md:max-w group"
                  key={title}
                >
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                      color === "lime" && "bg-lime-500",
                      color === "cyan" && "bg-cyan-500",
                      color === "fuchsia" && "bg-fuchsia-500",
                      color === "violet" && "bg-violet-500"
                    )}
                  ></div>
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl bg-fuchsia-500 group-hover:bg-fuchsia-400 transition duration-300 top-1.5 right-1.5 -z-10",
                      color == "lime" && "bg-lime-500 group-hover:bg-lime-400",
                      color == "fuchsia" &&
                        "bg-fuchsia-500 group-hover:bg-fuchsia-400",
                      color == "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
                      color == "violet" &&
                        "bg-violet-500 group-hover:bg-violet-400"
                    )}
                  ></div>
                  <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img
                        src={image}
                        alt=""
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-2xl mt-12">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">{description}</p>
                  <div className="flex justify-between">
                    <button
                      className={twMerge(
                        "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500",
                        color === "fuchsia" && "text-fuchsia-500",
                        color === "lime" && "text-lime-500",
                        color === "cyan" && "text-cyan-500",
                        color === "violet" && "text-violet-500"
                      )}
                    >
                      Learn More
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10 ">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full ">
            {cardData.map(({ title }, cardIndex) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  cardIndex === selectedCardIndex && "bg-zinc-300"
                )}
                onClick={() => {
                  setSelectedCardIndex(cardIndex);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-32">
        <ScrollVelocity
          texts={[
            "Performance ✦ Social ✦ Influencer ✦ Branding ✦",
            "Performance ✦ Social ✦ Influencer ✦ Branding ✦",
          ]}
          // velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
    </section>
  );
};
