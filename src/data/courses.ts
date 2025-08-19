export type Slide = { html: string };
export type QuizQ = { q: string; a: string[]; correct: number };

export type Course = {
  id: string;
  title: string;
  level: "Beginner" | "Fortgeschritten" | "Pro";
  description: string;
  slides: Slide[];
  quiz: QuizQ[];
  minutes: number; // grobe Lesezeit
};

export const COURSES: Course[] = [
  {
    id: "grundlagen-daytrading",
    title: "Grundlagen Day Trading",
    level: "Beginner",
    description:
      "Was ist Trading (insbesondere Day Trading), was wird gehandelt, Marktverhalten, SL/TP & Basics.",
    minutes: 25,
    slides: [
      {
        html: `
          <h2 class="text-2xl font-bold">Was ist Trading?</h2>
          <p class="mt-2">Trading = aktiver Handel von Märkten mit dem Ziel, aus Preisbewegungen kurzfristig Gewinn zu erzielen. Day Trading = alle Positionen werden am selben Tag geschlossen.</p>
          <ul class="mt-3 list-disc pl-5">
            <li>Zeithorizont: Minuten bis Stunden</li>
            <li>Tools: Chart, Orderarten, Risikomanagement</li>
            <li>Wichtig: Disziplin & klare Regeln</li>
          </ul>
        `,
      },
      {
        html: `
          <h2 class="text-2xl font-bold">Was kann man handeln?</h2>
          <p class="mt-2">Typisch: Aktien/CFDs, Indizes (DAX, S&P 500), Währungspaare (EUR/USD), Rohstoffe (Gold, Öl), Krypto.</p>
          <p class="mt-2">Wähle liquide Märkte mit engen <strong>Spreads</strong>.</p>
        `,
      },
      {
        html: `
          <h2 class="text-2xl font-bold">Marktverhalten</h2>
          <p class="mt-2">Märkte wechseln zwischen <strong>Trend</strong> (Up/Down) und <strong>Range</strong> (Seitwärts).</p>
          <ul class="mt-3 list-disc pl-5">
            <li><strong>Uptrend:</strong> höhere Hochs & höhere Tiefs</li>
            <li><strong>Downtrend:</strong> tiefere Hochs & tiefere Tiefs</li>
            <li><strong>Range:</strong> Schwanken zwischen S/R ohne klaren Trend</li>
          </ul>
        `,
      },
      {
        html: `
          <h2 class="text-2xl font-bold">Orderarten (kurz)</h2>
          <ul class="mt-3 list-disc pl-5">
            <li><strong>Market:</strong> sofortiger Einstieg zum aktuellen Preis</li>
            <li><strong>Limit:</strong> Ausführung nur zu deinem Preis oder besser</li>
            <li><strong>Stop:</strong> Ausführung erst nach Erreichen eines Trigger-Preises</li>
          </ul>
        `,
      },
      {
        html: `
          <h2 class="text-2xl font-bold">SL & TP – die Basics</h2>
          <p class="mt-2"><strong>Stop-Loss (SL):</strong> begrenzt den Maximalverlust automatisch.</p>
          <p class="mt-2"><strong>Take-Profit (TP):</strong> nimmt den Gewinn am Zielpreis automatisch mit.</p>
          <p class="mt-2">Beides gehört in <strong>jeden</strong> Trade – zusammen mit fixer <strong>Positionsgröße</strong> basierend auf deinem <strong>Risikoprozent</strong> (z. B. 1%).</p>
        `,
      },
      {
        html: `
          <h2 class="text-2xl font-bold">Risikomanagement</h2>
          <ul class="mt-3 list-disc pl-5">
            <li>Risiko je Trade fix halten (z. B. 0,5–1 %)</li>
            <li>CRV (RRR) denken: Ziel mind. 2–3x Risiko</li>
            <li>Keine News zocken, Overtrading vermeiden</li>
          </ul>
        `,
      },
    ],
    quiz: [
      {
        q: "Was ist Day Trading?",
        a: [
          "Positionen werden über Monate gehalten",
          "Positionen werden am selben Tag geschlossen",
          "Nur Käufe, keine Verkäufe",
          "Nur Währungen, keine Indizes",
        ],
        correct: 1,
      },
      {
        q: "Wofür steht SL?",
        a: [
          "Start-Level",
          "Stop-Loss – Verlustbegrenzung",
          "Spread-Limit",
          "Short-Long",
        ],
        correct: 1,
      },
      {
        q: "Welche Aussage beschreibt einen Uptrend?",
        a: [
          "Tiefere Hochs & tiefere Tiefs",
          "Höhere Hochs & höhere Tiefs",
          "Seitwärts ohne Trend",
          "Keine Volatilität",
        ],
        correct: 1,
      },
      {
        q: "Welche Order führt sofort zum Marktpreis aus?",
        a: ["Limit", "Stop", "Market", "Bracket"],
        correct: 2,
      },
      {
        q: "Warum CRV (RRR) ≥ 2 sinnvoll?",
        a: [
          "Um mehr Gebühren zu zahlen",
          "Weil ein Gewinn doppelt so groß wie der Verlust sein soll",
          "Damit die Winrate sinkt",
          "Für mehr Slippage",
        ],
        correct: 1,
      },
    ],
  },

  // Beispiel für spätere Kurse (nur Platzhalter):
  {
    id: "price-action-1",
    title: "Price Action Basics",
    level: "Fortgeschritten",
    description: "Kerzen, Zonen, Breakouts, Pullbacks.",
    minutes: 30,
    slides: [{ html: `<h2>In Arbeit</h2>` }],
    quiz: [{ q: "Platzhalter?", a: ["Ja", "Nein", "Vielleicht", "Später"], correct: 0 }],
  },
  {
    id: "smc-ict",
    title: "SMC / ICT Konzepte",
    level: "Pro",
    description: "BOS, CHOCH, OB, FVG – strukturiert erklärt.",
    minutes: 40,
    slides: [{ html: `<h2>In Arbeit</h2>` }],
    quiz: [{ q: "Platzhalter?", a: ["Ja", "Nein", "Vielleicht", "Später"], correct: 0 }],
  },
];
