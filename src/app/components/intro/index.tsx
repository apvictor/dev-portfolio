import Link from "next/link";
import { Info } from "./info";
import Image from "next/image";

export function Intro() {
  return (
    <section className="w-screen max-h-[750px] h-[750px] flex flex-col gap-24 items-center justify-center py-20 bg-center bg-[url('/bg-intro.svg')] bg-cover">
      <Info />
      <Link href="#projects">
        <Image
          width={32}
          height={32}
          className="animate-bounce"
          src="arrow-bottom.svg"
          alt="Seta"
        />
      </Link>
    </section>
  );
}
