// type: work | teaching | learning — used to colour-code the timeline back to the story chapters
const experience = [
  {
    role: 'Full-Stack Developer',
    org: 'Excellent Stars, Jakarta',
    date: 'Oct 2025 — Nov 2026',
    type: 'work',
    desc: "Built and maintained the agency's web platform end-to-end. Alongside development, supported the Director with scheduling, agent coordination, and team support, plus creative work such as flyer design, photography, and videography.",
    achievements: [
      'Built the platform: public company profile, agent portal, leader management portal, and admin panel',
      'Admin tooling for members, content, DISC assessments, claims, and news',
    ],
  },
  {
    role: 'IT Mentor',
    org: 'Anagata Sisedu Nusantara, Jakarta',
    date: 'Feb 2025 — May 2025',
    type: 'teaching',
    desc: 'Taught coding to school students using Scratch, guiding them toward logical thinking, problem-solving, and creativity through interactive lessons and hands-on projects.',
    achievements: [],
  },
  {
    role: 'Edu-Tech Developer Intern',
    org: 'Anagata Sisedu Nusantara, Jakarta',
    date: 'Oct 2024 — Feb 2025',
    type: 'teaching',
    desc: 'Designed learning modules for coding classes, mentored junior high schoolers preparing for competitions, and produced UI/UX design work in Figma for client companies.',
    achievements: [
      'Designed structured learning modules for coding classes',
      'Mentored students in preparing for and joining competitions',
      'Delivered UI/UX design projects in Figma',
    ],
  },
  {
    role: 'Assistant Professor',
    org: 'Universitas Esa Unggul, Jakarta',
    date: 'Mar 2024 — Aug 2024',
    type: 'teaching',
    desc: 'Developed and delivered mobile and technology courses, deepening student understanding of mobile application development and digital innovation.',
    achievements: ['30% increase in student project success rates'],
  },
  {
    role: 'Android Developer',
    org: 'Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka, Bandung',
    date: 'Aug 2023 — Jan 2024',
    type: 'learning',
    desc: 'Completed six months of independent study with an A grade, applying six Android development certifications to the ARUNA capstone application.',
    achievements: ['A grade for the six-month program', 'Six Android development certifications', 'Shipped the ARUNA capstone app'],
  },
]

export const typeLabels = { work: 'Engineering', teaching: 'Teaching & mentoring', learning: 'Learning journey' }

export default experience
