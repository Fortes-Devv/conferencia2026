import Image from "next/image";

type SectionBannerProps = {
  title: string;
  color?: "orange" | "brown";
};

export default function SectionBanner({
  title,
  color = "orange",
}: SectionBannerProps) {
  const bg = color === "orange" ? "bg-brand-orange" : "bg-brand-brown";
  const suffix = color === "orange" ? "orange" : "brown";

  return (
    <div className="flex items-center gap-4">
      <div
        className={`section-banner ${bg} -ml-4 flex-1 py-3 pl-8 pr-10 sm:-ml-8`}
      >
        <h2 className="font-display text-2xl font-medium uppercase tracking-wide text-brand-cream sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <Image
          src={`/assets/icons-${suffix}.webp`}
          alt=""
          width={217}
          height={56}
          className="h-7 w-auto"
        />
        <Image
          src={`/assets/arrows-${suffix}.webp`}
          alt=""
          width={57}
          height={57}
          className="h-6 w-auto"
        />
      </div>
    </div>
  );
}
