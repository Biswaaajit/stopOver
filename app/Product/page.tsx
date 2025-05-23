import Navigation from "../_components/Navigation";
import PriceImg from "../Price/PriceImg";
import ProductPara from "./ProductPara";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col text-slate-200 bg-zinc-900 gap-8">
      <Navigation background="bg-zinc-900" />
      <div className="grow flex flex-col lg:flex-row  items-center justify-center lg:justify-around gap-0 lg:gap-10 px-4 sm:px-8 lg:px-10 xl:px-16 transition-all   text-slate-200 ">
        <PriceImg imgUrl="/product.jpg" />
        <div className="py-8  w-fit lg:w-[60vw] xl:w-[50vw] space-y-5 transition-all">
          <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About StopOver
          </h1>
          <ProductPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            adipisci, vitae eaque molestias fugiat ipsam, dolorem facere
            perspiciatis et, hic fuga officiis tempore quaerat nemo magnam
            laborum. Recusandae, doloribus quis?
          </ProductPara>
          <ProductPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            adipisci, vitae eaque molestias fugiat ipsam, dolorem facere
            perspiciatis et, hic fuga officiis tempore quaerat nemo magnam
            laborum. Recusandae, doloribus quis?
          </ProductPara>
          <ProductPara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            adipisci, vitae eaque molestias fugiat ipsam, dolorem facere
            perspiciatis et, hic fuga officiis tempore quaerat nemo magnam
            laborum. Recusandae, doloribus quis?
          </ProductPara>
        </div>
      </div>
    </div>
  );
}
