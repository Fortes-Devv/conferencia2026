import Image from "next/image";

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
];

function LogoCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <li className="relative h-20 w-40 shrink-0 sm:h-24 sm:w-52">
      <Image
        src={sponsor.src}
        alt={sponsor.alt}
        fill
        sizes="(min-width: 640px) 208px, 160px"
        className="object-contain p-4 sm:p-5"
      />
    </li>
  );
}

export default function SponsorsCarousel() {
  // Duplicamos a lista para o loop do marquee ser contínuo (translateX -50%).
  const loop = [...SPONSORS, ...SPONSORS];

  return (
    <footer className="mt-16 border-t-4 border-brand-orange bg-brand-cream py-12">
      <h2
        data-aos="fade-up"
        className="px-4 text-center font-display text-2xl font-medium uppercase tracking-widest text-brand-ink sm:text-3xl"
      >
        Nossos Patrocinadores
      </h2>

      <div
        data-aos="fade-up"
        className="group relative mt-8 overflow-hidden"
      >
        {/* Bordas com fade para dar sensação de continuidade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-cream to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-cream to-transparent sm:w-24" />

        <ul
          className="flex w-max animate-marquee items-center gap-5 sm:gap-6 group-hover:[animation-play-state:paused]"
          aria-label="Logos dos patrocinadores"
        >
          {loop.map((sponsor, i) => (
            <LogoCard key={`${sponsor.src}-${i}`} sponsor={sponsor} />
          ))}
        </ul>
      </div>

      <p className="mt-10 px-4 text-center text-sm text-brand-ink/60">
        CONFEM 2026 — Novo de Deus · MIPAM
      </p>
    </footer>
  );
}
