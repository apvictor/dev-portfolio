import Image from "next/image";

export function Avatar() {
  return (
    <div className="relative w-fit h-fit">
      <div
        className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#008D68] bg-center bg-[url('/profile.png')] bg-cover
      "
      />
      <Image
        width={32}
        height={32}
        className="absolute bottom-0 right-2"
        src="/code.png"
        alt="perfil"
      />
    </div>
  );
}
