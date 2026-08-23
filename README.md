# DeskFit

Free ergonomic calculator + practical guides: enter your height, get your ideal
sitting desk, standing desk, chair and monitor heights instantly.

**Live:** https://e4124659-ux.github.io/deskfit/

## Why this site exists

Most ergonomic sites are thin affiliate listicles. DeskFit leads with a genuinely
useful interactive tool (the thing people actually search for), then earns trust
with honest, specific guides. Utility first, monetization second.

## Monetization (how to activate)

All product links on the site are wired through `js/calculator.js`:

```js
const AMAZON_TAG = "";   // <- put your Amazon Associates tag here, e.g. "mysite-20"
```

- While `AMAZON_TAG` is empty, links point to plain Amazon searches (site stays
  fully useful to visitors).
- Once you set your tag, every `data-aff` link becomes an affiliate link
  automatically. No other edits required.

Additional revenue options once traffic exists:
- Apply to Amazon Associates using this site as your "website" entry.
- Add an ad slot below the calculator results (only after real traffic).
- The buying-guide page converts best — link it from the calculator results.

## Structure

```
index.html                     calculator hook page (FAQ schema included)
guides/standing-desk-setup.html   complete setup guide
guides/budget-home-office.html    <$300 upgrade plan
guides/choose-standing-desk.html  brand-neutral buying framework
css/style.css                  single stylesheet, dark mode support
js/calculator.js               calculator + affiliate link builder
sitemap.xml, robots.txt        SEO basics
```

## Notes

- No frameworks, no external requests, no analytics: loads instantly, survives
  Core Web Vitals.
- Anthropometric ratios used: sitting desk ≈ 40–43 % of height, standing ≈ 63–68 %,
  chair seat ≈ 25–27 %. Presented as adjustable estimates.
- Content is informational only; not medical advice.
