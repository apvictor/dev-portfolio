export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0D0E11] flex items-center justify-center w-screen py-8 font-asap text-[#C0C4CE]">
      © {year}
    </footer>
  );
}
