import Link from "next/link";

type NavLinkProps = {
  path: string;
  href: string;
  name: string;
};

export default function NavLink({ path, href, name }: NavLinkProps) {
  console.log(path, href);
  return (
    <>
      <Link
        className={`text-xl  hidden md:block   ${
          path === href ? "text-blue-700" : ""
        }`}
        href={href}
      >
        {name}
      </Link>
      <Link
        className={`block text-center md:hidden text-xl px-3 py-1.5 md:py-0 hover:bg-zinc-800  ${
          path === href ? "bg-zinc-800/60" : ""
        }`}
        href={href}
      >
        {name}
      </Link>
    </>
  );
}
