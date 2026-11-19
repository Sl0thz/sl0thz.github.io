// The narrative spine of the site. Every date/role below comes from the CV —
// if something is not listed there, it is deliberately left out.

export const chapters = [
  { id: 'intro', num: '01', label: 'Intro' },
  { id: 'education', num: '02', label: 'Education' },
  { id: 'bangkit', num: '03', label: 'Bangkit' },
  { id: 'teaching', num: '04', label: 'Teaching' },
  { id: 'projects', num: '05', label: 'Projects' },
  { id: 'experience', num: '06', label: 'Experience' },
  { id: 'next', num: '07', label: 'What’s next' },
]

export const bridges = {
  education: 'It started with a degree in Informatics Engineering.',
  bangkit: 'From there, a six-month Android learning journey at Bangkit Academy.',
  teaching: 'Then came the chance to share what I had learned.',
  projects: 'Learning and teaching turned into things I built.',
  experience: 'Here is how all of it fits on the timeline.',
  next: 'So, what comes next?',
}

export const education = {
  degree: 'Informatics Engineering',
  school: 'Universitas Esa Unggul',
  period: 'Oct 2021 — Aug 2025',
  gpa: 3.8,
  note: "Joined the department's student association and became the head of the comparative study organizer.",
}

export const involvement = [
  {
    role: 'Recruiter',
    org: 'Department Student Association',
    date: 'Jun 2023 — Oct 2023',
    desc: 'Invited students to become active in organizations, and served as secretary general of a comparative study event.',
  },
  {
    role: 'Treasurer',
    org: 'Student Representative Council of the Faculty',
    date: 'Apr 2024 — Feb 2025',
    desc: 'Managed budgeting, expense tracking, and financial reporting, collaborating with council members to allocate resources.',
  },
  {
    role: 'Curriculum',
    org: 'Google Developer Group on Campus',
    date: 'Aug 2024 — Sep 2025',
    desc: 'Conducted study jam sessions teaching participants to build applications with Kotlin.',
  },
]

export const bangkit = {
  program: 'Android Developer · Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka',
  period: 'Aug 2023 — Jan 2024',
  summary:
    'Six months of independent study focused on Android development with Kotlin, completed with an A grade and six Android development certifications — all put to work in the ARUNA capstone project.',
  facts: [
    { count: 6, label: 'months of independent study' },
    { text: 'A', label: 'final grade' },
    { count: 6, label: 'Android development certifications' },
    { text: 'Kotlin', label: 'core language' },
  ],
}

export const teachingRoles = [
  {
    role: 'Assistant Professor',
    org: 'Universitas Esa Unggul',
    date: 'Mar 2024 — Aug 2024',
    desc: 'Developed and delivered mobile and technology courses, deepening student understanding of mobile application development and digital innovation.',
    highlight: { count: 30, suffix: '%', label: 'increase in student project success rates' },
  },
  {
    role: 'Academic Program Coordinator',
    org: 'Anagata Sisedu Nusantara',
    // TODO: dates and description were not in the CV — add them here once confirmed.
    date: null,
    desc: null,
  },
  {
    role: 'IT Mentor',
    org: 'Anagata Sisedu Nusantara',
    date: 'Feb 2025 — May 2025',
    desc: 'Taught coding to school students using Scratch, guiding them in logical thinking, problem-solving, and creativity through hands-on projects.',
  },
]

export const pillars = [
  {
    title: 'Technical communication',
    desc: 'Delivered university courses, wrote learning modules, and ran Kotlin study jams at Google Developer Group on Campus.',
  },
  {
    title: 'Mentoring',
    desc: 'Coached junior high school students preparing for competitions and introduced school students to coding with Scratch.',
  },
  {
    title: 'Collaboration',
    desc: 'Worked with designers, front-end and back-end teammates, and cross-functional teams, using Git for version control.',
  },
  {
    title: 'Leadership',
    desc: 'Head of the comparative study organizer in my department, and Treasurer of the faculty Student Representative Council.',
  },
]

export const next = {
  statement:
    'I want to keep building practical technology that helps real people — and keep learning along the way.',
  focus: ['Software development', 'Mobile development', 'Continuous learning', 'Practical solutions'],
}
