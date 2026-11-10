# Max's Portfolio — Core CSS Lab

A simple portfolio with semantic HTML and a cream / forest-green palette.

## Assignment checklist

- 50 CSS rulesets in `styles.css` (at least 20 required).
- 7 CSS custom properties for the color palette (at least 5 required).
- Element selectors (`body`, `h1`), class selectors (`.skip-link`), ID selectors (`#home`), plus attribute and pseudo-class selectors.
- Normal document flow with inline-block navigation; no Flexbox or Grid.
- Imported DM Sans custom font with Arial / sans-serif fallbacks.
- Rounded cards, soft drop shadows, and a slightly rotated portrait.
- Styled responsive image and readable headings, paragraphs, sections, and form controls.
- Keyboard focus outlines and a working skip link.

## Validation

The original HTML was submitted to the W3C Nu HTML Checker before adding CSS on October 7, 2026. It returned zero errors or warnings. The finished HTML was checked again with the same result. Both JSON responses are included in `validation/`.

The existing contact form uses Netlify Forms. Form submissions require a Netlify deployment with form detection enabled; opening the file locally only previews the form.

## Files

- `index.html` — portfolio content and stylesheet link
- `styles.css` — core styles
- `IMG_6124.JPG` — original portfolio photo
- `validation/` — W3C HTML validation results

## Accessibility

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for the PageSpeed Insights audit, keyboard workflow improvements, test record, and screenshots. See [KEYBOARD-WALKTHROUGH.md](KEYBOARD-WALKTHROUGH.md) for the recording route and narration.

## JavaScript interactivity lab

- **Local theme toggle:** `theme.js` runs before the stylesheet to apply the saved palette without a light-theme flash. It defaults to the system preference, remembers explicit choices when storage is available, follows system changes until a choice is made, and synchronizes open tabs. The keyboard-operable button uses a stable accessible name and `aria-pressed` state. CSS tokens define the inverse palette, including form controls and buttons.
- **Third-party project search:** `vendor/fuse-7.1.0.min.js` is the official Fuse.js 7.1.0 browser distribution, hosted locally with its Apache 2.0 license. `interactions.js` indexes the existing project cards and filters them by title and content, tolerating small misspellings. Result counts are announced with `role="status"`; Clear search and Escape restore all cards.
- **Integration:** the two local files use isolated closures. Theme switching does not reset the search. The library and search initializer use ordered deferred scripts. The form remains independent. Without JavaScript, all projects remain visible and the original light palette works; optional controls stay hidden.
- **Library source:** https://github.com/krisk/Fuse/tree/v7.1.0

### Verified November 10 2026

Browser checks passed for dark/light switching, theme persistence after reload, exact “React” search, misspelled “Flsk” search, no-results feedback, Escape reset, and retaining the active search while changing theme. No console warnings or errors were observed. The existing form and keyboard focus features remain independent of the new scripts.
