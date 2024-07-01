import type { Metadata } from "next";
import { Asap, Inconsolata, Maven_Pro } from "next/font/google";
import "./globals.css";

const asap = Asap({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Armando",
  description:
    "Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${asap.className} ${inconsolata.className} ${mavenPro.className}`}
      >
        {children}
      </body>
    </html>
  );
}
