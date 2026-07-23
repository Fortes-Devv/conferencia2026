import Image from "next/image";

/**
 * Hero com dois layouts:
 * - Desktop (md+): camadas do PSD posicionadas nas coordenadas do arquivo
 *   (canvas 2362 x 668) e escaladas em %.
 * - Mobile (< md): composição vertical — título em cima, #NovoDeNovo ao lado
 *   do Bem-vindo, e os três pastores agrupados na base. Sol girando no fundo.
 */
const CANVAS_W = 2362;
const CANVAS_H = 668;

const px = (v: number) => `${(v / CANVAS_W) * 100}%`;
const py = (v: number) => `${(v / CANVAS_H) * 100}%`;

type LayerProps = {
  src: string;
  alt?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  className?: string;
  aos?: string;
  aosDelay?: number;
};

function Layer({
  src,
  alt = "",
  x,
  y,
  w,
  h,
  className = "",
  aos,
  aosDelay,
}: LayerProps) {
  return (
    <div
      className={`absolute ${className}`}
      style={{ left: px(x), top: py(y), width: px(w) }}
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      <Image src={src} alt={alt} width={w} height={h} className="h-auto w-full" />
    </div>
  );
}

export default function Hero() {
  return (
    <header className="relative w-full bg-brand-navy">
      {/* ===================== DESKTOP (md+) ===================== */}
      <div
        className="relative hidden w-full overflow-hidden md:block"
        style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}` }}
      >
        {/* Fundo (céu azul-marinho → laranja) */}
        <Image
          src="/assets/header-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Grafismos de fundo (efeitos) — sempre atrás dos participantes */}
        <Layer
          src="/assets/sun-outline.webp"
          x={-103}
          y={-640}
          w={2398}
          h={2398}
          className="z-0 animate-spin-slower opacity-90"
        />
        <Layer
          src="/assets/sol-laranja.webp"
          x={572}
          y={-872}
          w={2525}
          h={2526}
          className="z-0 animate-spin-slow"
        />
        <Layer
          src="/assets/line-doodle.webp"
          x={-346}
          y={-435}
          w={1739}
          h={3758}
          className="z-0"
          aos="fade"
        />

        {/* Bloco da esquerda: #NOVODENOVO + ícones */}
        <Layer
          src="/assets/hash-novodenovo.webp"
          alt="#NovoDeNovo"
          x={164}
          y={237}
          w={212}
          h={182}
          className="z-20"
          aos="fade-right"
          aosDelay={200}
        />
        <Layer
          src="/assets/icons-cream.webp"
          x={163}
          y={464}
          w={217}
          h={56}
          className="z-20"
          aos="fade-right"
          aosDelay={350}
        />
        <Layer
          src="/assets/arrows-cream.webp"
          x={163}
          y={541}
          w={82}
          h={82}
          className="z-20"
          aos="fade-right"
          aosDelay={500}
        />

        {/* Fotos dos pastores (recortes com transparência do PSD) — na frente dos efeitos */}
        <Layer
          src="/assets/pastor-right-solid.webp"
          alt="Pastor"
          x={992}
          y={86}
          w={499}
          h={903}
          className="z-30"
          aos="fade-up"
          aosDelay={300}
        />
        <Layer
          src="/assets/pastor-left-solid.webp"
          alt="Pastor"
          x={408}
          y={121}
          w={526}
          h={807}
          className="z-30"
          aos="fade-up"
          aosDelay={150}
        />
        <Layer
          src="/assets/pastor-center-solid.webp"
          alt="Pastor"
          x={689}
          y={84}
          w={606}
          h={741}
          className="z-30"
          aos="fade-up"
        />

        {/* Lettering "CONFEM 2026 — Novo de Deus" */}
        <Layer
          src="/assets/confem-2026.webp"
          alt="CONFEM 2026"
          x={1651}
          y={80}
          w={440}
          h={30}
          className="z-40"
          aos="fade-down"
          aosDelay={200}
        />
        <Layer
          src="/assets/novo.webp"
          alt="Novo"
          x={1576}
          y={125}
          w={610}
          h={223}
          className="z-40"
          aos="zoom-in"
          aosDelay={300}
        />
        <Layer
          src="/assets/de.webp"
          alt="de"
          x={1479}
          y={361}
          w={108}
          h={146}
          className="z-40"
          aos="zoom-in"
          aosDelay={450}
        />
        <Layer
          src="/assets/deus.webp"
          alt="Deus"
          x={1569}
          y={273}
          w={708}
          h={243}
          className="z-40"
          aos="zoom-in"
          aosDelay={550}
        />
        <Layer
          src="/assets/bem-vindo.webp"
          alt="Bem-vindo(a)"
          x={1672}
          y={538}
          w={442}
          h={89}
          className="z-40"
          aos="fade-up"
          aosDelay={700}
        />

        {/* Sparkles (efeito) — afastados das fotos, sobre o lettering */}
        <Layer
          src="/assets/sparkle-1.webp"
          x={1505}
          y={270}
          w={85}
          h={84}
          className="z-50 animate-twinkle"
        />
        <Layer
          src="/assets/sparkle-2.webp"
          x={2191}
          y={163}
          w={86}
          h={82}
          className="z-50 animate-twinkle-delayed"
        />
      </div>

      {/* ===================== MOBILE (< md) — story vertical ===================== */}
      <div className="relative flex min-h-[600px] flex-col items-center overflow-hidden bg-brand-navy md:hidden">
        {/* Fundo: header-bg.webp (cover, centralizado) — só o degradê */}
        <Image
          src="/assets/header-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-center"
        />

        {/* Sóis girando (proporcionais à altura) */}
        {/* sol laranja — metade escondida na borda direita */}
        <div className="pointer-events-none absolute right-0 top-[34%] z-[1] -translate-y-1/2 translate-x-1/2">
          <Image
            src="/assets/sol-laranja.webp"
            alt=""
            width={2525}
            height={2526}
            className="h-[70vh] w-auto max-w-none animate-spin-slow opacity-50"
          />
        </div>
        {/* sol de contorno branco — centralizado na altura */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/assets/sun-outline.webp"
            alt=""
            width={2398}
            height={2398}
            className="h-[50vh] w-auto max-w-none animate-spin-slower opacity-80"
          />
        </div>

        {/* Título — mesmo arranjo do desktop (canvas 2362x668):
            grupo x[1479..2277] w=798, y[80..627] h=547. Reduzido e puxado
            pro canto superior direito; #NovoDeNovo no canto esquerdo. */}
        <div className="relative z-30 w-full px-4 pt-6">
          <div
            className="relative mx-auto w-full max-w-[460px]"
            style={{ aspectRatio: "798 / 547" }}
          >
            <div
              className="absolute"
              style={{ left: "21.554%", top: "0%", width: "55.138%" }}
              data-aos="fade-down"
              data-aos-delay={200}
            >
              <Image
                src="/assets/confem-2026.webp"
                alt="CONFEM 2026"
                width={440}
                height={30}
                className="h-auto w-full"
              />
            </div>
            <div
              className="absolute"
              style={{ left: "12.155%", top: "8.227%", width: "76.441%" }}
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <Image
                src="/assets/novo.webp"
                alt="Novo"
                width={610}
                height={223}
                className="h-auto w-full"
              />
            </div>
            <div
              className="absolute"
              style={{ left: "0%", top: "51.371%", width: "13.534%" }}
              data-aos="zoom-in"
              data-aos-delay={450}
            >
              <Image
                src="/assets/de.webp"
                alt="de"
                width={108}
                height={146}
                className="h-auto w-full"
              />
            </div>
            <div
              className="absolute"
              style={{ left: "11.278%", top: "35.283%", width: "88.722%" }}
              data-aos="zoom-in"
              data-aos-delay={550}
            >
              <Image
                src="/assets/deus.webp"
                alt="Deus"
                width={708}
                height={243}
                className="h-auto w-full"
              />
            </div>
            <div
              className="absolute"
              style={{ left: "24.185%", top: "83.729%", width: "55.388%" }}
              data-aos="fade-up"
              data-aos-delay={700}
            >
              <Image
                src="/assets/bem-vindo.webp"
                alt="Bem-vindo(a)"
                width={442}
                height={89}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* Ícones + setas */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <Image
              src="/assets/icons-cream.webp"
              alt=""
              width={217}
              height={56}
              className="h-6 w-auto"
              data-aos="fade-right"
              data-aos-delay={350}
            />
            <span className="h-px w-5 bg-brand-cream/60" />
            <Image
              src="/assets/arrows-cream.webp"
              alt=""
              width={82}
              height={82}
              className="h-6 w-auto"
              data-aos="fade-right"
              data-aos-delay={500}
            />
          </div>

        </div>

        {/* Pastores — mesmo arranjo/distância do desktop, recorte do grupo
            (canvas 2362x668: grupo x[408..1491] w=1083, y[84..668] h=584),
            escalado para 100% da largura do celular. */}
        <div
          className="relative z-20 mt-auto w-full overflow-hidden"
          style={{ aspectRatio: "1083 / 584" }}
        >
          {/* right (fundo) */}
          <div
            className="absolute z-10"
            style={{ left: "53.925%", top: "0.342%", width: "46.077%" }}
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <Image
              src="/assets/pastor-right-solid.webp"
              alt="Pastor"
              width={560}
              height={1013}
              className="h-auto w-full"
            />
          </div>
          {/* left */}
          <div
            className="absolute z-20"
            style={{ left: "0%", top: "6.336%", width: "48.569%" }}
            data-aos="fade-up"
            data-aos-delay={150}
          >
            <Image
              src="/assets/pastor-left-solid.webp"
              alt="Pastor"
              width={560}
              height={859}
              className="h-auto w-full"
            />
          </div>
          {/* center (à frente) */}
          <div
            className="absolute z-30"
            style={{ left: "25.947%", top: "0%", width: "55.956%" }}
            data-aos="fade-up"
          >
            <Image
              src="/assets/pastor-center-solid.webp"
              alt="Pastor"
              width={560}
              height={685}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Estrelas (mesmo estilo do desktop, tamanho proporcional à altura) */}
        <Image
          src="/assets/sparkle-2.webp"
          alt=""
          width={86}
          height={82}
          className="absolute right-[11%] top-[13%] z-40 h-[3.4vh] w-auto animate-twinkle"
        />
        <Image
          src="/assets/sparkle-1.webp"
          alt=""
          width={85}
          height={84}
          className="absolute left-[13%] top-[26%] z-40 h-[2.6vh] w-auto animate-twinkle-delayed"
        />
      </div>
    </header>
  );
}
