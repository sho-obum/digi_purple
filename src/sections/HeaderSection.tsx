export const HeaderSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            {/* <img src="/assets/images/logo.svg" alt="Digitar Media Logo"  /> */}
            Digitar Media Hexagonns Logo
          </div>
          <div className="">
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
