import { Project } from "./project";

export function Projects() {
  return (
    <section
      id="projects"
      className="w-screen flex flex-col items-center px-32 pb-20 gap-14"
    >
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-[#008D68] text-xl font-inconsolata">
          Meu trabalho
        </h2>
        <span className="font-bold text-[#E2E4E9] text-2xl font-asap">
          Veja os projetos em destaque
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Project
          img="/p1.svg"
          title="Travelgram"
          description="Rede social onde as pessoas mostram os registros de suas viagens
              pelo mundo"
        />
        <Project
          img="/p2.svg"
          title="Tech News"
          description="Homepage de um portal de notícias sobre a área de tecnologia"
        />
        <Project
          img="/p3.svg"
          title="Página de receita"
          description="Página com o passo a passo de uma receita para cupcakes"
        />
        <Project
          img="/p4.svg"
          title="Zingen"
          description="Landing Page completa e responsiva de um aplicativo de Karaokê"
        />
        <Project
          img="/p5.svg"
          title="Refund"
          description="Um sistema para pedido e acompanhamento de reembolso"
        />
        <Project
          img="/p6.svg"
          title="Página de turismo"
          description="ágina com as principais informações para quem quer viajar para Busan"
        />
      </div>
    </section>
  );
}
