import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string;
}
export function Service({ img, title, description }: Props) {
  return (
    <div className="flex flex-col flex-1 rounded-xl border-2 p-5 gap-5 border-[#16181D] hover:scale-105 transition-all duration-300">
      <Image width={48} height={48} src={img} alt={title} />
      <div className="flex flex-col gap-2">
        <p className="text-[#E2E4E9] font-bold font-asap">{title}</p>
        <span className="text-[#C0C4CE] font-maven-pro">{description}</span>
      </div>
    </div>
  );
}
