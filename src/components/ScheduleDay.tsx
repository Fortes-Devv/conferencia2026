export type SchedulePeriod = {
  label: string;
  items: string[];
};

export type ScheduleDayProps = {
  day: string;
  periods: SchedulePeriod[];
  isLast?: boolean;
};

export default function ScheduleDay({ day, periods, isLast }: ScheduleDayProps) {
  return (
    <div
      data-aos="fade-up"
      className={`py-7 ${isLast ? "" : "border-b border-brand-ink/60"}`}
    >
      {/* Nome do dia isolado, em linha própria */}
      <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-brand-ink sm:text-[1.7rem]">
        {day}
      </h3>

      {/* Períodos alinhados lado a lado, todos na mesma altura */}
      <div className="mt-4 grid gap-6 sm:grid-cols-3">
        {periods.map((period) => (
          <PeriodBlock key={period.label} period={period} />
        ))}
      </div>
    </div>
  );
}

function PeriodBlock({ period }: { period: SchedulePeriod }) {
  return (
    <div>
      <h4 className="text-lg font-bold uppercase tracking-widest text-brand-ink">
        {period.label}
      </h4>
      <ul className="mt-1 space-y-0.5 text-[1.05rem] leading-snug text-brand-ink/90">
        {period.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
