# Richard Leonardo — Portfolio (Vite + React)

```bash
npm install
npm run dev        # local dev server
npm run build      # production build into /dist
```

Deploy to Netlify: build command `npm run build`, publish directory `dist`.

## The story, chapter by chapter
01 Intro → 02 Education → 03 Bangkit → 04 Teaching → 05 Projects → 06 Experience → 07 What's next → Contact

## Where to edit content (`src/data/`)
| File | Holds |
| --- | --- |
| `profile.js` | Hero text, LinkedIn / GitHub / email links, contact list |
| `story.js` | Education, campus involvement, Bangkit, teaching roles, pillars, closing statement |
| `projects.js` | The four projects, stack tags, GitHub links |
| `experience.js` | Professional timeline with achievements |
| `skills.js`, `certifications.js` | Toolkit icons and Dicoding certificates |

## To do
- **Project screenshots:** put images in `public/screenshots/` and set `image: '/screenshots/aruna.png'` in `projects.js`. Until then a gradient card is shown.
- **Academic Program Coordinator (Anagata Sisedu Nusantara):** dates and description were not in the CV, so the card shows only the title and company. Fill them in `story.js` (`teachingRoles`).
