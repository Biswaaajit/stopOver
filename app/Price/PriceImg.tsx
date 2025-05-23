import Image from "next/image";

type PriceImgProps = {
  imgUrl: string;
};

export default function PriceImg({ imgUrl }: PriceImgProps) {
  return (
    <div className="w-full h-[40vh] sm:h-[45vw] lg:h-[55vh] xl:h-[60vh]  lg:w-[30%] xl:w-[25%] transition-all perspective-none lg:perspective-[500px] ">
      <div className="w-[60%] h-full sm:w-[50%] md:w-[40%] lg:w-[90%] mx-auto transition-all relative rotate-y-0 lg:rotate-y-12">
        <Image
          src={imgUrl}
          fill
          alt="Price page image"
          className="object-center object-cover"
        />
      </div>
    </div>
  );
}
