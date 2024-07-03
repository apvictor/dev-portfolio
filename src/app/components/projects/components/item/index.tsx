import Image from "next/image";
import Link from "next/link";

interface IProject {
  img: string;
  name: string;
  description: string;
  link: string;
}
export function Item({ img, name, description, link }: IProject) {
  return (
    <Link
      href={link}
      target="_blank"
      className="p-3 flex flex-col gap-5 bg-[#292C34] rounded-xl max-w-80 hover:scale-105 transition-all duration-300"
    >
      <div className="max-w-[306px] max-h-[156px] rounded-lg overflow-hidden">
        <Image width={306} height={156} src={img} alt={name} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[#E2E4E9] font-bold font-inconsolata text-lg">
          {name}
        </p>
        <span className="text-[#C0C4CE] text-xs font-maven-pro">
          {description}
        </span>
      </div>
    </Link>
  );
}
