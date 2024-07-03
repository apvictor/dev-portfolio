export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0E11] flex items-center justify-center gap-2 w-screen py-8 font-asap text-[#C0C4CE]">
      <span>Copyright © {year}</span>
      <a
        className="text-[#008D68]"
        href="https://devarmando.netlify.app"
        target="_blank"
      >
        devarmando.com.
      </a>
      <span>Todos os direitos reservados.</span>
    </footer>
  );
}
