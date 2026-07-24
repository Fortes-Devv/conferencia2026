"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// WhatsApp do desenvolvedor — formato: código do país + DDD + número (só dígitos)
const DEV_WHATSAPP = "5585992004530";
const DEV_MESSAGE =
  "Olá Emanuel! Vi o site da CONFEM 2026 e tenho interesse no seu serviço de desenvolvimento de sites. Podemos conversar?";
const DEV_WHATSAPP_URL = `https://wa.me/${DEV_WHATSAPP}?text=${encodeURIComponent(
  DEV_MESSAGE
)}`;

type Sponsor = { src: string; alt: string };

const SPONSORS: Sponsor[] = [
  { src: "/assets/patrocinadores_0000_Objeto-Inteligente-de-Vetor.webp", alt: "Avodah Gestão Contábil" },
  { src: "/assets/patrocinadores_0001_Camada-3.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0002_Objeto-Inteligente-de-Vetor.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0003_Objeto-Inteligente-de-Vetor.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0004_Objeto-Inteligente-de-Vetor.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0005_Objeto-Inteligente-de-Vetor.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0006_Objeto-Inteligente-de-Vetor.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0007_Objeto-Inteligente-de-Vetor.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0008_logo-epgraf.webp", alt: "Epgraf" },
  { src: "/assets/patrocinadores_0009_Camada-2.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/patrocinadores_0010_mil-polpas.webp", alt: "Mil Polpas" },
  { src: "/assets/patrocinadores_0011_Objeto-Inteligente-de-Vetor.webp", alt: "Patrocinador CONFEM 2026" },
  { src: "/assets/dinapontes.webp", alt: "Dina Pontes" },
  { src: "/assets/pontesfoodsclub.webp", alt: "Pontes Foods Club" },
  { src: "/assets/elvislisboa.webp", alt: "Elvis Lisboa" },
  { src: "/assets/sublimais.webp", alt: "Sublimais" },
];

function LogoCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <li className="relative h-28 w-56 shrink-0 select-none sm:h-28 sm:w-60">
      <Image
        src={sponsor.src}
        alt={sponsor.alt}
        fill
        draggable={false}
        sizes="(min-width: 640px) 240px, 224px"
        className="pointer-events-none object-contain p-3 sm:p-5"
      />
    </li>
  );
}

export default function SponsorsCarousel() {
  // Lista duplicada para o loop contínuo da rolagem automática.
  const loop = [...SPONSORS, ...SPONSORS];

  const scrollerRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false); // pausa por hover ou toque
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  // Rolagem automática (pausa ao interagir e respeita "prefers-reduced-motion")
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const speed = 0.5; // px por frame (~30px/s)
    let raf = 0;

    const step = () => {
      if (!pausedRef.current && !drag.current.active && !reduce.matches) {
        el.scrollLeft += speed;
        // Ponto onde começa a 2ª cópia da lista → volta pra ele = loop sem emenda
        const wrap = (el.children[SPONSORS.length] as HTMLElement | undefined)
          ?.offsetLeft;
        if (wrap && el.scrollLeft >= wrap) el.scrollLeft -= wrap;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Arrasto com o mouse (desktop). No celular, a rolagem por toque é nativa.
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    pausedRef.current = true;

    const onMove = (ev: MouseEvent) => {
      if (!drag.current.active) return;
      el.scrollLeft = drag.current.startScroll - (ev.clientX - drag.current.startX);
    };
    const onUp = () => {
      drag.current.active = false;
      pausedRef.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    e.preventDefault();
  };

  return (
    <footer className="mt-16 border-t-4 border-brand-orange bg-brand-cream py-12">
      <h2
        data-aos="fade-up"
        className="px-4 text-center font-display text-2xl font-medium uppercase tracking-widest text-brand-ink sm:text-3xl"
      >
        Nossos Patrocinadores
      </h2>

      <div data-aos="fade-up" className="relative mt-8">
        {/* Bordas com fade para dar sensação de continuidade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-cream to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-cream to-transparent sm:w-24" />

        <ul
          ref={scrollerRef}
          onMouseDown={onMouseDown}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => {
            if (!drag.current.active) pausedRef.current = false;
          }}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
          aria-label="Logos dos patrocinadores — arraste para o lado para ver todos"
          className="no-scrollbar relative flex cursor-grab items-center gap-5 overflow-x-auto active:cursor-grabbing sm:gap-6"
          style={{ touchAction: "pan-x" }}
        >
          {loop.map((sponsor, i) => (
            <LogoCard key={`${sponsor.src}-${i}`} sponsor={sponsor} />
          ))}
        </ul>
      </div>

      <p className="mt-6 px-4 text-center text-xs text-brand-ink/50">
        Arraste para o lado para ver todos os patrocinadores
      </p>

      <p className="mt-8 px-4 text-center text-sm text-brand-ink/60">
        CONFEM 2026 — Novo de Deus · MIPAM
      </p>

      <p className="mt-2 px-4 text-center text-sm text-brand-ink/60">
        Desenvolvido por{" "}
        <a
          href={DEV_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-brand-orange underline decoration-brand-orange/40 underline-offset-2 transition-colors hover:text-brand-brown"
        >
          {/* ícone WhatsApp */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 fill-current"
          >
            <path d="M.06 24l1.68-6.13A11.87 11.87 0 010 11.9C0 5.34 5.35 0 11.92 0a11.82 11.82 0 018.42 3.49 11.79 11.79 0 013.49 8.4c0 6.56-5.35 11.9-11.92 11.9a11.9 11.9 0 01-5.7-1.45L.06 24zm6.6-3.8c1.68.99 3.28 1.58 5.26 1.58 5.45 0 9.9-4.43 9.9-9.88a9.8 9.8 0 00-2.9-6.98 9.83 9.83 0 00-6.99-2.9c-5.46 0-9.9 4.43-9.9 9.88 0 2.08.61 3.64 1.64 5.28l-.99 3.62 3.88-1.02zm11.9-5.4c-.07-.12-.27-.2-.56-.34-.29-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.14-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.51h-.57c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.2 2.06 3.15 5 4.42.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.12.56-.09 1.75-.72 1.99-1.4.25-.69.25-1.28.18-1.4z" />
          </svg>
          Emanuel Fortes
        </a>
      </p>
    </footer>
  );
}
