import Hero from "@/components/Hero";
import SectionBanner from "@/components/SectionBanner";
import ScheduleDay, { ScheduleDayProps } from "@/components/ScheduleDay";

const schedule: Omit<ScheduleDayProps, "isLast">[] = [
  {
    day: "Sexta-feira – 24/Jul",
    periods: [
      { label: "Tarde", items: ["12h00 - Checkout", "17h00 - Café"] },
      { label: "Noite", items: ["18h59 - Abertura Oficial", "21h00 - Jantar"] },
    ],
  },
  {
    day: "Sábado – 25/Jul",
    periods: [
      {
        label: "Manhã",
        items: [
          "07h00 - Café",
          "08h29 - Reunião Ministerial (Exclusiva para lideranças)",
          "08h29 - Colônia de Férias Kids/Teens",
          "08h29 - Livre para adultos",
        ],
      },
      {
        label: "Tarde",
        items: [
          "12h00 - Almoço",
          "13h59 - Palestra Every Home com o Pr. Demontieu (Pastores e Líderes)",
          "13h59 - Colônia de Férias Kids/Teens",
          "17h00 - Café",
          "17h59 - Culto Celebração",
        ],
      },
      { label: "Noite", items: ["21h00 - Jantar"] },
    ],
  },
  {
    day: "Domingo – 26/Jul",
    periods: [
      {
        label: "Manhã",
        items: [
          "07h00 - Café (Crianças e pessoas especiais)",
          "06h59 - Batismo",
          "07h59 - Consagração, Louvor e Adoração",
          "08h59 - Café (TODOS)",
          "09h59 - Manual da Cultura MIPAM",
        ],
      },
      {
        label: "Tarde",
        items: ["12h00 - Almoço", "15h00 - Café", "16h59 - Culto Celebração"],
      },
      { label: "Noite", items: ["21h00 - Jantar"] },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <Hero />

      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        {/* INTRO */}
        <section
          data-aos="fade-up"
          className="grid gap-6 py-10 sm:grid-cols-[1.4fr_auto_1fr] sm:gap-8"
        >
          <div className="text-[1.05rem] leading-relaxed">
            <p className="font-bold italic">Olá, família MIPAM!</p>
            <p>
              Aqui estão informações importantes para que todos tenham uma
              experiência abençoada, organizada e segura durante nossa
              conferência.
            </p>
          </div>
          <div className="hidden w-px bg-brand-orange sm:block" aria-hidden />
          <p className="text-[1.05rem] font-bold italic leading-relaxed">
            Em caso de dúvidas, procure um cooperador para orientar você.
          </p>
        </section>

        {/* PROGRAMAÇÃO */}
        <section id="programacao" className="pb-6">
          <div data-aos="fade-right">
            <SectionBanner title="Programação" color="orange" />
          </div>

          <div className="mt-2">
            {schedule.map((day, i) => (
              <ScheduleDay
                key={day.day}
                {...day}
                isLast={i === schedule.length - 1}
              />
            ))}
          </div>
        </section>

        {/* DESCÊNCIA E ORDEM */}
        <section id="descencia-e-ordem" className="pb-16">
          <div data-aos="fade-right">
            <SectionBanner title="Descência e Ordem" color="brown" />
          </div>

          <div className="mt-8 space-y-8 text-[1.05rem] leading-relaxed">
            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Itens a levar
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>
                  • Produtos de higiene pessoal (pasta de dente, sabonete,
                  toalha, etc.)
                </li>
                <li>• Roupas de cama: Rede, lençol/cobertor e travesseiro</li>
                <li>• Alimentos específicos (se necessário)</li>
                <li>• Medicamentos</li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Sobre as roupas
              </h3>
              <p className="mt-1">
                Durante os cultos: roupas adequadas e respeitosas.
              </p>
              <ul className="space-y-0.5">
                <li>
                  • Horários livres: roupas decentes – estaremos em convívio
                  com muitos irmãos.
                </li>
                <li>• Piscina:</li>
              </ul>
              <p className="mt-4">
                Não será permitido o uso de biquíni.
                <br />
                Mulheres: bermuda e blusa.
              </p>
              <p className="mt-4">Homens: bermuda e blusa.</p>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Acomodações
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>
                  • Não é permitido mudança de ambintes, exceto em casos
                  extraordinários
                </li>
                <li>• Evite questionamentos desnecessários...</li>
              </ul>
            </div>

            <p data-aos="fade-up">
              Mantenha sempre ao seus cuidados, não nos responsabilizamos por
              perda ou estravio dos mesmos.
            </p>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Água
              </h3>
              {/* O PSD original termina neste título, sem conteúdo abaixo.
                  Adicione aqui as orientações sobre água quando tiver o texto. */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
