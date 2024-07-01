import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
}
export function Project({ img, title, description }: Props) {
  return (
    <div className="p-3 flex flex-col gap-5 bg-[#292C34] rounded-xl max-w-80 hover:scale-105 transition-all duration-300">
      <Image width={306} height={156} src={img} alt={title} />
      <div className="flex flex-col gap-1">
        <p className="text-[#E2E4E9] font-bold font-asap">{title}</p>
        <span className="text-[#C0C4CE] font-maven-pro">{description}</span>
      </div>
    </div>
  );
}
