import Image from "next/image";
import Link from "next/link";

type LogoLinkProps = {
  size: string;
};

export default function LogoLink({ size }: LogoLinkProps) {
  return (
    <Link
      href="/"
      className="flex justify-center items-center w-fit lg:w-full "
    >
      <div className={`relative ${size}`}>
        <Image
          src="/logo.png"
          alt="Logo of website"
          fill
          priority
          sizes="(max-width: 768px) 2.5rem, 5rem"
          className="object-center object-contain"
        />
      </div>
      <p>
        <span>stop</span>
        <span className="font-extrabold">Over</span>
      </p>
    </Link>
  );
}
