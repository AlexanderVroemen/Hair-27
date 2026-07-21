# HAIR 27 website

Een vernieuwde Next.js website voor kapsalon HAIR 27 in Beegden.

## Starten

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Content aanpassen

Alle bedrijfsgegevens, navigatie, diensten, prijzen, reviews, openingstijden en afbeeldingen staan centraal in:

`src/data/site.ts`

## Afbeeldingen

Originele bestanden staan in `public/images/source`. Geoptimaliseerde WebP-bestanden staan in `public/images/optimized`.

Nieuwe optimalisaties draaien met:

```bash
npm run optimize:images
```

## Formulier

Het contactformulier opent nu een vooraf ingevulde e-mail. Er is bewust geen stille verzending zonder backend. Koppel voor productie een formulierverwerker, bijvoorbeeld via een server action, API-route of externe e-mailservice.

## Deploy

Deze site kan als reguliere Next.js app worden gedeployed op Vercel, Netlify of een Node-host.

Controleer voor livegang:

- reviewscore en aantal Google-reviews;
- prijslijst;
- socialmedia-links;
- formulierverwerking;
- definitieve privacyverklaring;
- extra lookbookfoto's wanneer filters gewenst zijn.
