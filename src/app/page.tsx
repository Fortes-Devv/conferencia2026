import Hero from "@/components/Hero";
import SectionBanner from "@/components/SectionBanner";
import ScheduleDay, { ScheduleDayProps } from "@/components/ScheduleDay";

const schedule: Omit<ScheduleDayProps, "isLast">[] = [
  {
    day: "Sexta-feira – 24/Jul",
    periods: [
      { label: "Tarde", items: ["12h00 - Boas Vindas", "17h00 - Café"] },
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

        {/* DECÊNCIA E ORDEM */}
        <section id="decencia-e-ordem" className="pb-16">
          <div data-aos="fade-right">
            <SectionBanner title="Ordem e Decência" color="brown" />
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
                <li>• Roupas de cama: rede, lençol e travesseiro</li>
                <li>• Alimentos específicos (se necessário)</li>
                <li>• Medicamentos</li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Roupas
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>
                  • Durante os cultos: roupas adequadas e respeitosas.
                </li>
                <li>
                  • Horários livres: roupas decentes (estaremos em convívio com
                  muitos irmãos).
                </li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Piscina
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>• Não será permitido o uso de biquíni.</li>
                <li>
                  • Mulheres: deverão utilizar shorts e camiseta, sendo que não
                  será permitido o uso de camisetas brancas ou de cores claras.
                </li>
                <li>• Homens: bermuda e blusa.</li>
                <li>
                  • Crianças: somente poderão entrar na piscina acompanhadas por
                  um responsável.
                </li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Acomodações
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>
                  • Não é permitido mudança de ambientes, exceto em casos
                  extraordinários.
                </li>
                <li>• Evite questionamentos desnecessários...</li>
                <li>
                  • Mantenha seus pertences sempre sob seus cuidados; não nos
                  responsabilizamos por perda ou extravio dos mesmos.
                </li>
                <li>
                  • Cada participante será totalmente responsável pelos seus
                  pertences durante toda a conferência.
                </li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Pulseira de identificação
              </h3>
              <p className="mt-1">
                A pulseira entregue na entrada é de uso obrigatório durante toda
                a conferência. Ela será indispensável para a identificação e
                segurança.
              </p>
              <p className="mt-3">
                Caso precise de qualquer auxílio, procure:
              </p>
              <ul className="mt-1 space-y-0.5">
                <li>• Equipe de apoio: pulseira amarela;</li>
                <li>• Liderança: pulseira laranja.</li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Cultos
              </h3>
              <p className="mt-1">
                Para evitar circulação desnecessária após o início das
                ministrações, pedimos que todos mantenham suas garrafas de água
                abastecidas antes do início de cada culto.
              </p>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Mídia
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>
                  • A equipe de mídia poderá utilizar as imagens para registros
                  dos cultos e divulgação.
                </li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Orientações aos pais
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>• As crianças são de responsabilidade dos pais.</li>
                <li>
                  • Durante os cultos, não será permitido que crianças
                  permaneçam na área da piscina.
                </li>
                <li>
                  • Obreiros e cooperadores estarão autorizados a monitorar e
                  restringir o acesso a locais proibidos.
                </li>
              </ul>
              <p className="mt-3 font-bold italic">
                Atenção: isso não substitui a responsabilidade dos pais ou
                responsáveis.
              </p>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Outras informações importantes
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>• O local possui áreas liberadas e áreas restritas.</li>
                <li>
                  • É proibido acessar áreas restritas, exceto com autorização
                  prévia.
                </li>
              </ul>
            </div>

            <div data-aos="fade-up">
              <h3 className="text-lg font-bold uppercase tracking-widest">
                Zelo
              </h3>
              <ul className="mt-1 space-y-0.5">
                <li>• Mantenha sempre os ambientes limpos.</li>
                <li>• Lixo é no lixo.</li>
              </ul>
            </div>

            <div
              data-aos="fade-up"
              className="rounded-lg border border-brand-brown/40 bg-brand-brown/5 p-4"
            >
              <h3 className="text-lg font-bold uppercase tracking-widest text-brand-brown">
                Atenção
              </h3>
              <p className="mt-1">
                O descumprimento dessas orientações será considerado
                desobediência à liderança da igreja.
              </p>
            </div>
          </div>
        </section>

        {/* CONSIDERAÇÕES FINAIS */}
        <section id="consideracoes-finais" className="pb-20">
          <div data-aos="fade-right">
            <SectionBanner title="Considerações Finais" color="orange" />
          </div>

          <div className="mt-8 space-y-6 text-[1.05rem] leading-relaxed">
            <p data-aos="fade-up">
              Agradecemos a compreensão de todos. Que seja um tempo de comunhão,
              crescimento espiritual e presença de Deus! 🙏🔥
            </p>
            <p
              data-aos="fade-up"
              className="text-center font-display text-2xl font-medium uppercase tracking-wide text-brand-orange sm:text-3xl"
            >
              Vamos juntos ver o Novo de Novo em Deus.
            </p>
            <p
              data-aos="fade-up"
              className="text-center text-xl font-bold italic"
            >
              #Bem-vindo(a) ao Novo [ de Novo ] ✨
            </p>

            <blockquote
              data-aos="fade-up"
              className="border-l-4 border-brand-orange bg-brand-orange/5 py-4 pl-5 pr-4 italic"
            >
              &ldquo;Esqueçam o que se foi; não vivam no passado. Vejam, estou
              fazendo uma COISA NOVA! Ela já está surgindo! Vocês não a
              reconhecem? Até no deserto abrirei um caminho e riachos no
              ermo.&rdquo;
              <span className="mt-2 block font-bold not-italic">
                Isaías 43:18-19
              </span>
            </blockquote>

            <p data-aos="fade-up">
              Firmados nesta Palavra, cremos que viveremos um novo tempo, de
              novos frutos e ainda melhores.
            </p>
            <p data-aos="fade-up" className="font-bold">
              &ldquo;Eis que tudo se fez novo.&rdquo;
            </p>
            <p data-aos="fade-up">
              Como igreja, declaramos o NOVO DE DEUS para todas as áreas da sua
              vida.🙌 Remoção no espírito, na alma e no corpo para glória de
              Deus.
            </p>
            <p
              data-aos="fade-up"
              className="text-center font-display text-xl font-medium uppercase tracking-wide text-brand-brown"
            >
              2026, o Ano do Novo de Deus. ✨
            </p>

            <p
              data-aos="fade-up"
              className="mt-4 border-t border-brand-ink/20 pt-6 text-center italic"
            >
              Mipam, um lugar para amar, discipular, servir e inspirar pessoas a
              se tornarem verdadeiras discípulas de Jesus.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
