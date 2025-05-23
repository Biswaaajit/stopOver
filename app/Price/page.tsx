import Navigation from "../_components/Navigation";
import PriceImg from "./PriceImg";

function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col text-slate-200 bg-zinc-900 gap-8">
      <Navigation background="bg-zinc-900" />
      <div className="grow flex flex-col lg:flex-row  items-center justify-center lg:justify-around gap-0 lg:gap-10 px-4 sm:px-8 lg:px-10 xl:px-16 transition-all   text-slate-200 ">
        <PriceImg imgUrl="/pricing.jpg" />
        <div className="py-8  w-fit lg:w-[60vw] xl:w-[50vw] space-y-5 transition-all">
          <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Enjoy The Benefit Just At ₹150/month.
          </h1>
          <p className="text-lg font-medium text-justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
