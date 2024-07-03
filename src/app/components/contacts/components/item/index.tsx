import Image from "next/image";
import Link from "next/link";

interface Props {
  img: string;
  link: string;
  name: string;
}
export function Item({ img, link, name }: Props) {
  return (
    <Link
      className="max-w-[400px] rounded-lg w-full flex items-center justify-between p-5 gap-3 bg-[#292C34] hover:bg-[#292C34]/60 hover:scale-105 transition-all duration-300"
      href={link}
    >
      <Image width={28} height={28} src={img} alt={name} />
      <span className="text-[#C0C4CE] flex-1 font-maven-pro">{name}</span>
      <Image width={20} height={20} src="/arrow-up-right.svg" alt="Seta" />
    </Link>
  );
}
