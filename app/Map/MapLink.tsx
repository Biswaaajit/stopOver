import Link from "next/link";
import { usePathname } from "next/navigation";

type MapLinkProps = {
  name: string;
  href: string;
};

export default function MapLink({ name, href }: MapLinkProps) {
  const path = usePathname();
  return (
    <Link
      className={`px-4 py-3  font-semibold ${
        path === href ? "bg-cyan-600" : "bg-transparent"
      }`}
      href={href}
    >
      {name}
    </Link>
  );
}
