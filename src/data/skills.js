// Tech icons are inline SVG, so there are no external image requests.
const skills = [
  {
    "title": "Languages & Platforms",
    "items": [
      {
        "label": "Java",
        "color": "#F89820",
        "svg": "<svg viewBox=\"0 0 24 24\"><path d=\"M8 15c3 2 8 2 10-1M7 18c4 2.5 10 2 13-1.2M9 3c-1.5 1.8-1.5 3 0 4.6-1.3.6-2 1.6-2 2.9 0 2.2 2.2 3.5 5 3.5s5-1.3 5-3.5c0-1.3-.7-2.3-2-2.9 1.5-1.6 1.5-2.8 0-4.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></svg>"
      },
      {
        "label": "Kotlin",
        "color": "#7F52FF",
        "svg": "<svg viewBox=\"0 0 24 24\"><path d=\"M4 3h16L12 12l8 9H4l8-9z\" fill=\"currentColor\"/></svg>"
      },
      {
        "label": "Python",
        "color": "#3776AB",
        "svg": "<svg viewBox=\"0 0 24 24\"><path d=\"M12 3c-4 0-4 2-4 2v3h4v1H6s-3 0-3 5 3 5 3 5h2v-3c0-2 2-3 4-3h3c2 0 3-1 3-3V6s.3-3-4-3h-2Zm-1.4 1.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z\" fill=\"currentColor\"/><path d=\"M12 21c4 0 4-2 4-2v-3h-4v-1h6s3 0 3-5-3-5-3-5h-2v3c0 2-2 3-4 3H9c-2 0-3 1-3 3v3s-.3 3 4 3h2Zm1.4-1.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z\" fill=\"currentColor\" opacity=\".55\"/></svg>"
      },
      {
        "label": "PHP",
        "color": "#8892BF",
        "svg": "<svg viewBox=\"0 0 24 24\"><ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><text x=\"12\" y=\"15\" font-size=\"6.5\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"JetBrains Mono, monospace\">php</text></svg>"
      },
      {
        "label": "SQL",
        "color": "#4479A1",
        "svg": "<svg viewBox=\"0 0 24 24\"><path d=\"M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Z\" fill=\"currentColor\" opacity=\".5\"/><path d=\"M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 11c0 1.7 3.1 3 7 3s7-1.3 7-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>"
      }
    ]
  },
  {
    "title": "Web & Design",
    "items": [
      {
        "label": "HTML",
        "color": "#E34F26",
        "svg": "<svg viewBox=\"0 0 24 24\"><path d=\"M5 8h14M5 8l1 12 6 2 6-2 1-12M8.5 12h7l-.4 4.5L12 17.7l-3.1-1.2-.2-2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"
      },
      {
        "label": "CSS",
        "color": "#1572B6",
        "svg": "<svg viewBox=\"0 0 24 24\"><path d=\"M8.5 3h7M8.5 3 9 8h6M9 8l.6 6.5 2.4.8 2.4-.8.3-3.5H10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"
      },
      {
        "label": "JavaScript",
        "color": "#F0DB4F",
        "svg": "<svg viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" fill=\"currentColor\" opacity=\".18\"/><text x=\"12\" y=\"16\" font-size=\"8\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"Space Grotesk, sans-serif\" font-weight=\"700\">JS</text></svg>"
      },
      {
        "label": "Figma",
        "color": "#A259FF",
        "svg": "<svg viewBox=\"0 0 24 24\"><circle cx=\"9\" cy=\"6\" r=\"3\" fill=\"currentColor\" opacity=\".9\"/><circle cx=\"15\" cy=\"9\" r=\"3\" fill=\"currentColor\" opacity=\".6\"/><circle cx=\"9\" cy=\"15\" r=\"3\" fill=\"currentColor\" opacity=\".35\"/></svg>"
      },
      {
        "label": "Bootstrap",
        "color": "#7952B3",
        "svg": "<svg viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"3\" fill=\"currentColor\" opacity=\".18\"/><text x=\"12\" y=\"16\" font-size=\"9\" text-anchor=\"middle\" fill=\"currentColor\" font-family=\"Space Grotesk, sans-serif\" font-weight=\"700\">B</text></svg>"
      }
    ]
  },
  {
    "title": "Tools & Version Control",
    "items": [
      {
        "label": "Git",
        "color": "#F05032",
        "svg": "<svg viewBox=\"0 0 24 24\"><circle cx=\"7\" cy=\"6\" r=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"7\" cy=\"18\" r=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><circle cx=\"17\" cy=\"12\" r=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M7 8v8M7 12h8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>"
      },
      {
        "label": "GitHub",
        "color": "var(--text)",
        "svg": "<svg viewBox=\"0 0 24 24\"><path d=\"M12 3a9 9 0 0 0-2.8 17.5c.45.1.6-.2.6-.4v-1.6c-2.5.55-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.55.1-.55.9.05 1.35.9 1.35.9.8 1.35 2.1 1 2.6.75.1-.6.3-1 .55-1.2-2-.25-4.1-1-4.1-4.4 0-1 .35-1.75.9-2.4-.1-.25-.4-1.2.1-2.5 0 0 .75-.25 2.45.9a8.3 8.3 0 0 1 4.4 0c1.7-1.15 2.45-.9 2.45-.9.5 1.3.2 2.25.1 2.5.55.65.9 1.4.9 2.4 0 3.4-2.1 4.15-4.1 4.4.3.3.6.8.6 1.7v2.4c0 .2.15.5.6.4A9 9 0 0 0 12 3Z\" fill=\"currentColor\"/></svg>",
        "href": "https://github.com/Sl0thz"
      }
    ]
  },
  {
    "title": "Working style",
    "chips": [
      "Teamwork",
      "Problem solving",
      "Flexibility"
    ]
  }
]

export default skills
