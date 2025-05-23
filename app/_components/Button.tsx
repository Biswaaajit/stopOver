import Link from "next/link";

type ButtonProps = {
  href: string;
  name: string;
};

function Button({ href, name }: ButtonProps) {
  return (
    <Link
      className="bg-cyan-800 px-6 py-2 font-semibold rounded-lg hover:bg-cyan-600 transition-all"
      href={href}
    >
      {name}
    </Link>
  );
}
export default Button;
