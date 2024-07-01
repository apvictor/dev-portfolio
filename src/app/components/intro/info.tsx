import { Avatar } from "./avatar";
import { Tech } from "./tech";

export function Info() {
  return (
    <div className="bg-[#16181D] flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-10">
        <Avatar />

        <div className="flex flex-col items-center gap-6 max-w-[680px]">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#C0C4CE] text-xl font-inconsolata">
              Hello World! Meu nome é{" "}
              <span className="text-[#008D68]">Armando Pereira</span> e sou
            </span>

            <h1 className="text-5xl font-bold text-[#E2E4E9] font-asap">
              Desenvolvedor Full Stack
            </h1>
          </div>
          <span className="text-[#878EA1] text-sm font-maven-pro">
            Transformo necessidades em aplicações reais, evolventes e
            funcionais. Desenvolvo sistemas através da minha paixão pela
            tecnologia, contribuindo com soluções inovadoras e eficazes para
            desafios complexos.
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <Tech img="/tag-html.svg" name="HTML" />
        <Tech img="/tag-css.svg" name="CSS" />
        <Tech img="/tag-js.svg" name="Javascript" />
        <Tech img="/tag-react.svg" name="React" />
        <Tech img="/tag-node.svg" name="Node.js" />
        <Tech img="/tag-php.svg" name="PHP" />
        <Tech img="/tag-py.svg" name="Python" />
        <Tech img="/tag-git.svg" name="Git" />
        <Tech img="/tag-github.svg" name="GitHub" />
      </div>
    </div>
  );
}
