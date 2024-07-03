import { Contacts } from "./components/contacts";
import { Footer } from "./components/footer";
import { Intro } from "./components/intro";
import { Projects } from "./components/projects";
import { Services } from "./components/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#16181D]">
        <Intro />
        <Projects />
        <Services />
        <Contacts />
        <Footer />
    </main>
  );
}
