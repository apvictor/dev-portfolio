import Image from "next/image";

interface Props {
  img: string;
  name: string;
}
export function Tech({ img, name }: Props) {
  return (
    <div className="bg-[#292C34] font-maven-pro flex items-center rounded-full py-2 px-4 gap-2 text-[#C0C4CE] border border-[#292C34] hover:border-[#008D68] transition-all duration-300">
      <Image width={20} height={20} src={img} alt={name} />
      <span className="text-sm">{name}</span>
    </div>
  );
}
