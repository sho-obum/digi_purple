import { useRef } from "react";
import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText";
import ShinyText from "../blocks/TextAnimations/ShinyText/ShinyText";

export const HeroSection = () => {
  const iconsahedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboidRef = useRef(null);
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress } = useScroll({
    target: iconsahedronRef,
    offset: ["start end", "end start"],
  });
  const iconsahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [70, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20]);
  return (
    <section className="py-16 md:py-32  overflow-x-clip">
      <div className="container">
        <div className="-mt-4">
          <div className="flex justify-center">
            <ShinyText
              text="Introducing Digitar Media"
              disabled={false}
              speed={3}
              className="uppercase font-extra text-center text-zinc-500 tracking-wider -mb-3"
            />
          </div>

          <div className="flex justify-center">
            <BlurText
              text="The Future of Marketing is here."
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="font-heading font-black text-5xl md:text-6xl lg:text-7xl max-w-3xl text-center mt-4"
            />
          </div>
          <p className="text-center text-xl md:text-2xl mt-6 max-w-xl text-zinc-400 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laborssse et dolore magna aliqussa.
          </p>

          <div className="flex justify-center mt-4">
            <CutCornerButton className="inline-flex md:inline-flex">
              Get Started
            </CutCornerButton>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="inline-flex relative z-0 mt-16">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1600px]" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[260px] -top-[370px]">
                <motion.img
                  src="/assets/images/cube.png"
                  alt=""
                  className="size-[140px]"
                  style={{ rotate: cubeRotate }}
                  ref={cubeRef}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[670px] -top-[470px]">
                <motion.img
                  src="/assets/images/torus.png"
                  alt=""
                  className="size-[140px]"
                  ref={torusRef}
                  style={{ rotate: torusRotate }}
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[170px] top-[500px]">
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt=""
                  className="size-[140px]"
                  ref={cuboidRef}
                  style={{ rotate: cuboidRotate }}
                />
              </Circle>
            </div>
            <motion.div
              className="inline-flex"
              ref={iconsahedronRef}
              style={{ rotate: iconsahedronRotate }}
            >
              <img
                src="/assets/images/icosahedron.png"
                alt=""
                className="absolute w-[400px] md:w-[600px] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
              />
              <img
                src="/assets/images/icosahedron.png"
                alt="iconsahedron"
                className="w-[500px]"
              />
            </motion.div>
          </div>
        </div>
        <div className=" flex justify-center flex-col items-center mt-30 md:mt-60 gap-4 sm:mt-40">
          <div className="h-10 w-5 outline outline-6px outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full "></div>
          </div>

          <div className="flex justify-center">
            <ShinyText
              text="Scroll to learn more"
              disabled={false}
              speed={3}
              className="uppercase font-extra text-center text-zinc-500 tracking-wider -mb-3"
            />
          </div>
        </div>
      </div>
      {/* <div className="mt-64">
        <ScrollVelocity
          texts={[
            "Performance ✦ Social ✦ Influencer ✦ Branding ✦",
            "Performance ✦ Social ✦ Influencer ✦ Branding ✦",
          ]}
          // velocity={velocity}
          className="custom-scroll-text"
        />
      </div> */}
      {/* <div className="sm:relative sm:-top-[240px] md:static md:top-0">
        <CurvedLoop
          marqueeText="Performance ✦ Social ✦ Influencer ✦ Branding ✦"
          speed={1}
          curveAmount={300}
          interactive={true}
        />
      </div> */}
    </section>
  );
};
