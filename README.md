# CONFEM 2026 — Novo de Deus

Site em Next.js (App Router) + TypeScript + Tailwind CSS + AOS que recria o banner de programação da CONFEM 2026.

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Para build de produção:

```bash
npm run build
npm start
```

## Estrutura

- `src/app/page.tsx` — página única com Hero, Programação e Descência e Ordem
- `src/app/layout.tsx` — fontes (Oswald + Arimo via next/font) e AOS
- `src/components/Hero.tsx` — hero montado com as camadas originais do PSD, posicionadas nas coordenadas exatas do arquivo e animadas individualmente (fotos, lettering, sparkles, grafismos)
- `src/components/` — banner de seção, blocos da programação e provider do AOS
- `public/assets/` — camadas extraídas do PSD: fotos dos pastores (recorte com transparência), lettering "Novo de Deus", "CONFEM–2026", "BEM-VINDO(A)", "#NOVODENOVO", sóis/grafismos, sparkles e fileiras de ícones

## Observações

- O PDF original é uma imagem achatada (exportada do Photoshop), sem fontes embutidas. As fontes mais próximas usadas: **Oswald** (títulos condensados) e **Arimo** (corpo, equivalente ao Arial do original).
- Cores extraídas do PDF: laranja `#FF6600`, azul-marinho `#001D37`, creme `#F4EADE`, marrom `#A1511E`, com o fundo em gradiente creme → pêssego.
- Os textos foram mantidos exatamente como no original (incluindo grafias como "ambintes", "estravio" e "Descência"). O final que estava cortado no PDF foi recuperado da camada de texto do PSD: "...não nos responsabilizamos por perda ou estravio dos mesmos."
- O PSD termina com um título "ÁGUA" sem conteúdo — o espaço está marcado em `src/app/page.tsx` para você preencher.
- Animações: fotos sobem em sequência (AOS fade-up), lettering entra com zoom, sparkles piscam, sóis giram lentamente em sentidos opostos.
