import { Service } from "./service";

export function Services() {
  return (
    <section className="bg-[#0D0E11] flex flex-col gap-14 w-screen px-32 py-20">
      <div className="text-center flex flex-col gap-2">
      <h2 className="text-[#008D68] text-xl font-inconsolata">
          Meus serviços
        </h2>
        <span className="font-bold text-[#E2E4E9] text-2xl font-asap">
          Como posso ajudar o seu negócio
        </span>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-6 w-full max-w-5xl h-fit">
          <Service
            img="/service1.svg"
            title="Websites e Aplicativos"
            description="Desenvolvimento de interfaces"
          />
          <Service
            img="/service2.svg"
            title="API e banco de dados"
            description="Criação de serviços do sistema"
          />
          <Service
            img="/service3.svg"
            title="DevOps"
            description="Gestão e infraestrutura da aplicação"
          />
        </div>
      </div>
    </section>
  );
}
