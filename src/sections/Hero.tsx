import { Circle } from "../components/Circle";
import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
export const HeroSection = () => {
  return (
    <section className="py-24 md:py-52  overflow-x-clip">
      <div className="container">
        <p className="uppercase font-extra text-center text-zinc-500 tracking-wider">
          Introducing Digitar Media
        </p>
        <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl max-w-3xl text-center mt-4 mx-auto">
          The Future of Marketing is here.
        </h1>

        <p className="text-center text-xl md:text-2xl mt-6 max-w-xl text-zinc-400 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laborssse et dolore magna aliqussa.
        </p>

        <div className="flex justify-center mt-24">
          <CutCornerButton className="inline-flex md:inline-flex">
            Get Started
          </CutCornerButton>
        </div>
        <div className="flex justify-center mt-24">
          <div className="inline-flex relative z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1000px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[1500px]" />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="size-[2000px]" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[270px] -top-[970px]">
                <img
                  src="/assets/images/cube.png"
                  alt=""
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -left-[630px] -top-[470px]">
                <img
                  src="/assets/images/torus.png"
                  alt=""
                  className="size-[140px]"
                />
              </Circle>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute left-[170px] top-[460px]">
                <img
                  src="/assets/images/cuboid.png"
                  alt=""
                  className="size-[140px]"
                />
              </Circle>
            </div>
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
          </div>
        </div>
        <div className=" flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline outline-6px outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full "></div>
          </div>
          <p className="uppercase tex-zinc-500 font-extra tracking-wider">
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};
