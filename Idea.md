Build a small, static, visually polished web app called "KPSS Vatandaşlık Hafıza Meclisi".

The app must be an Anki-like active-recall game for the most commonly confused KPSS Vatandaşlık facts. It must not be a question bank, a full exam simulator, or a complex parliament simulation. The goal is a small but attractive learning tool where the user quickly reviews confusing facts, reveals the answer, self-rates recall, and sees simple progress feedback.

Use English for all code, file names, internal data keys, component names, comments, developer-facing text, and architecture. Use Turkish only for customer-facing UI text shown inside the app.

Build the MVP as a static frontend app. Prefer Vite + React + TypeScript. Use local JSON or TypeScript data for content. Store progress in localStorage. Do not add a backend, login, database, CMS, leaderboard, payment system, or native mobile app. Keep the implementation small and self-contained.

The first screen should be the actual recall game, not a landing page. The user should immediately see a stylized isometric parliament-inspired study scene and a recall card.

Customer-facing Turkish UI labels should include phrases like:

- Bugünkü Tekrar
- Cevabı Göster
- Unuttum
- Zordu
- Hatırladım
- Çok Kolay
- Seçmen Memnuniyeti
- Bellek Kartları
- Karıştırılan Bilgiler
- Güncel Kurallar
- Eski / Yeni Ayrımı
- Tekrar Zamanı
- Bugünlük tamamlandı

Core user flow:

1. Show a short Turkish recall prompt.
2. Let the user think mentally; do not require typing.
3. Show a `Cevabı Göster` button.
4. After reveal, show the answer, a brief explanation, and a small mnemonic hint.
5. Show four review buttons: `Unuttum`, `Zordu`, `Hatırladım`, `Çok Kolay`.
6. Schedule the card based on the user's rating.
7. Update progress, streak, and `Seçmen Memnuniyeti`.

Use a simple spaced-repetition schedule:

- `Unuttum`: review again today.
- `Zordu`: review tomorrow.
- `Hatırladım`: review in 3 days.
- `Çok Kolay`: review in 7 days.

Do not implement a full Anki clone. Keep the scheduling logic understandable and lightweight.

Content should focus only on confused facts, not generic quiz questions. Use card prompts that test distinctions candidates mix up, such as old/current rules, similar institutions, similar legal terms, powers, dates, thresholds, and procedures.

Include a starter deck of at least 15 cards. The cards should be realistic KPSS Vatandaşlık recall cards, but mark internal data with `needsReviewBeforePublish: true` so the content can be reviewed for curriculum accuracy before release.

Use this internal card shape:

```ts
type RecallCard = {
  id: string;
  deckId: string;
  topic: string;
  tags: string[];
  customerFacing: {
    prompt: string;
    answer: string;
    explanation: string;
    mnemonic: string;
  };
  internal: {
    confusionPair?: string[];
    ruleStatus: "current" | "old-rule" | "exam-note";
    sourceType: "constitution" | "law" | "curriculum" | "manual";
    needsReviewBeforePublish: boolean;
  };
};
```

Example card quality target:

```json
{
  "id": "oversight_gensoru_removed",
  "deckId": "constitutional_confusions",
  "topic": "TBMM denetim yolları",
  "tags": ["tbmm", "denetim", "gensoru", "güncel-kural"],
  "customerFacing": {
    "prompt": "Gensoru güncel sistemde TBMM denetim yollarından biri midir?",
    "answer": "Hayır. Gensoru kaldırılmıştır.",
    "explanation": "Güncel sistemde TBMM'nin bilgi edinme ve denetim yolları; Meclis araştırması, genel görüşme, Meclis soruşturması ve yazılı sorudur.",
    "mnemonic": "Meclis panosunda 'Gensoru' levhası sökülür, yerine 'Yazılı Soru' dosyası takılır."
  },
  "internal": {
    "confusionPair": ["gensoru", "yazılı soru"],
    "ruleStatus": "current",
    "sourceType": "constitution",
    "needsReviewBeforePublish": true
  }
}
```

Visual direction:

Create a clean isometric 2D educational game interface inspired by a stylized Turkish parliament chamber. The scene should have semi-circular blue seating, a central podium or speaker area, deep navy and teal colors, warm gold-orange accents, subtle shadows, rounded game UI controls, and a friendly suited public-official character. The left side can contain compact mode/deck controls. The right side should contain progress, streak, memory/mnemonic, and review stats.

The visual style should feel like a polished educational game dashboard: simple, fun, premium, readable, and not cluttered. It should be close to a teal/gold isometric game screenshot, but all real text must be rendered by the app, not baked into an image.

Do not generate or use images with readable Turkish text, fake text, party logos, real politicians, official emblems, or flags. If using generated or decorative visual assets, keep screens and buttons blank and place all Turkish labels with real HTML/CSS text. If no image asset is available, create the parliament scene with CSS/HTML shapes, gradients, panels, seating rows, icon buttons, and a simple illustrated character.

The layout must be responsive:

- Desktop: parliament scene as the main background, recall card centered or slightly right of center, deck/menu controls on the left, progress/mnemonic panel on the right.
- Mobile: recall card first, compact parliament scene behind or above it, controls stacked without overlapping text.

Do not use a marketing-style hero page. Do not add long instructions. Do not use visible in-app text explaining features. Let the interface itself be usable.

Recommended component structure:

```text
src/
  app/
    App.tsx
  content/
    starterDeck.ts
  components/
    ParliamentScene.tsx
    RecallCard.tsx
    ReviewButtons.tsx
    DeckSelector.tsx
    ProgressPanel.tsx
    MnemonicPanel.tsx
  state/
    reviewStore.ts
    scheduler.ts
  types/
    content.ts
    review.ts
```

Implement these states:

- First visit with fresh progress.
- Card hidden-answer state.
- Card revealed-answer state.
- Review button feedback.
- Cards due today.
- No cards due / completed today state.
- Progress persisted after refresh.

Game feel:

- `Seçmen Memnuniyeti` should rise when the user remembers cards and fall slightly when they forget.
- A small streak counter should reward daily review.
- The mnemonic panel should become more visually active after the answer is revealed.
- Use subtle motion or transitions, but keep the app calm and fast.
- Avoid timers, pressure, multiple currencies, complex maps, and noisy gamification.

Use a color palette close to:

- Deep navy: `#0b1f3a`
- Parliament blue: `#0f5f8f`
- Teal: `#14b8c4`
- Cyan highlight: `#67e8f9`
- Gold accent: `#f5a524`
- Warm orange: `#ffb84d`
- Clean panel surface: `#f8fafc`

Accessibility and polish requirements:

- Text must be readable on desktop and mobile.
- Buttons must have clear hover/focus states.
- No text should overlap.
- Turkish characters must render correctly.
- Keep card content short enough to scan.
- Do not let generated/decorative visuals reduce readability.

Build this in one pass as a small, complete MVP. Prioritize a working recall loop, polished visual composition, and clean Turkish customer-facing UI over adding more features.
