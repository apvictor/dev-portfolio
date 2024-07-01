import { Contact } from "./contact";

export function Contacts() {
  return (
    <section className="flex flex-col gap-12 w-screen px-32 py-32 bg-center bg-[url('/bg-contact.svg')] bg-cover">
      <div className="text-center flex flex-col gap-2">
        <h2 className="text-[#008D68] text-xl font-inconsolata">Contato</h2>
        <span className="font-bold text-[#E2E4E9] text-2xl font-asap">
          Gostou do meu trabalho?
        </span>
        <p className="text-[#C0C4CE] font-maven-pro">
          Entre em contato ou acompanhe as minhas redes sociais!
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Contact
          img="/linkedin.svg"
          link="https://www.linkedin.com/in/armando-pereira19"
          name="Linkedin"
        />

        <Contact
          img="/instagram.svg"
          link="https://www.instagram.com/dev.armando"
          name="Instagram"
        />

        <Contact
          img="/github.svg"
          link="https://github.com/apvictor"
          name="GitHub"
        />

        <Contact
          img="/email.svg"
          link="mailto:armando2019ti@gmail.com"
          name="E-mail"
        />
      </div>
    </section>
  );
}
