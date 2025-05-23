import Button from "./Button";

function HomePageInfo() {
  return (
    <div className="grow  flex flex-col justify-center items-center gap-10 md:gap-8">
      <div className="hidden md:flex flex-col items-center text-3xl lg:text-5xl font-bold transition-all mt-10">
        <p>You travel the world.</p>
        <p>StopOver will keep track of your</p>
        <p>adventures.</p>
      </div>
      <p className="text-center block md:hidden  text-[2.15rem] leading-[2.3rem] font-bold transition-all mt-12">
        You travel the world. StopOver will keep track of your adventures.
      </p>
      <p className="text-center block md:hidden text-lg font-medium transition-all">
        A world map that keeps tracks of your footsteps into every city you
        think of. Never forget your wonderful experiences and show them your
        friends and family how you have wondered around the world.
      </p>
      <div className="hidden md:flex flex-col items-center font-medium text-base lg:text-xl text-center transition-all">
        <p>
          A world map that keeps tracks of your footsteps into every city you
          think of. Never forget your wonderful
        </p>
        <p>
          experiences and show them your friends and family how you have
          wondered around the world.
        </p>
      </div>
      <Button name="Start Tracking Now" href="/Login" />
    </div>
  );
}
export default HomePageInfo;
