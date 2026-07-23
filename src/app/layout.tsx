import type { Metadata } from "next";
import { Oswald, Arimo } from "next/font/google";
import "./globals.css";
import AosProvider from "@/components/AosProvider";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "CONFEM 2026 Novo de Deus | Programação",
  description:
    "Programação oficial da CONFEM 2026 — Novo de Deus. Bem-vindo(a), família MIPAM! #NovoDeNovo",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${oswald.variable} ${arimo.variable}`}>
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
