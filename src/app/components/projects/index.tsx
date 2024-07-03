import { api } from "@/api";
import { Item } from "./components/item";

export function Projects() {
  const { user } = api;

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
        {user.projects.map((project) => (
          <Item key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
