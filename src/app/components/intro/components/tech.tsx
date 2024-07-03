import Image from "next/image";

interface ITech {
  img: string;
  name: string;
}
export function Tech(tech: ITech) {
  return (
    <div className="bg-[#292C34] font-maven-pro flex items-center rounded-full py-2 px-4 gap-2 text-[#C0C4CE] border border-[#292C34] hover:border-[#008D68] transition-all duration-300">
      <Image width={20} height={20} src={tech.img} alt={tech.name} />
      <span className="text-sm">{tech.name}</span>
    </div>
  );
}
