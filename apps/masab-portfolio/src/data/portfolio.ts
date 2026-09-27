export type Project = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  longDescription: string;
  stack: string[];
  url: string;
  accent: 'purple' | 'pink';
  role: string;
};

export type Experience = {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  focus: string[];
};

export type SkillGroup = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  skills: string[];
};

export const profile = {
  name: 'Masab Ashraf',
  title: 'Full-Stack Software Engineer',
  location: 'Lahore, Pakistan',
  email: 'masabashraf11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-masab002/',
  github: 'https://github.com/MuhammadMasab002/',
  education: 'BS Computer Science at University of Education, Lahore',
  educationPeriod: '2023–2027 · in progress',
};

export const projects: Project[] = [
  {
    slug: 'mymentor',
    name: 'MyMentor',
    kicker: 'Production EdTech LMS',
    description: 'A learning platform for MDCAT, ECAT, FSc, CSS, Law, and ISSB — designed around the daily rhythm of serious preparation.',
    longDescription: 'MyMentor brings video lectures, quizzes, live sessions, adaptive score tracking, mock exams, notes, and payments into one focused learning experience. It ships as a Next.js web product and React Native mobile app, with Easypaisa, JazzCash, and card payments supporting the local context.',
    stack: ['Next.js', 'React Native', 'REST APIs', 'Payments', 'Adaptive tracking'],
    url: 'https://mymentor.pk/',
    accent: 'purple',
    role: 'Full-stack product engineering',
  },
  {
    slug: 'mocco-mart',
    name: 'Mocco-mart',
    kicker: 'MERN multi-vendor marketplace',
    description: 'A marketplace with separate seller and buyer dashboards, real-time updates, and the operational detail a multi-vendor product requires.',
    longDescription: 'Mocco-mart connects marketplace flows with seller and buyer dashboards, Socket.io real-time updates, Redux Toolkit plus RTK Query, JWT authentication, and Cloudinary media handling. The result is a MERN product that treats both sides of the marketplace as first-class experiences.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Cloudinary'],
    url: 'https://mocco-mart.vercel.app/',
    accent: 'pink',
    role: 'MERN stack product engineering',
  },
];

export const experiences: Experience[] = [
  {
    slug: 'techbon',
    role: 'Software Engineer',
    company: 'Techbon',
    period: 'Jan 2025 – Jan 2026',
    location: 'Lahore · onsite',
    description: 'Building real production software across the web stack, with a focus on useful interfaces, reliable APIs, and product details that survive contact with users.',
    focus: ['React and Next.js interfaces', 'Node.js and Express APIs', 'Product delivery'],
  },
  {
    slug: 'nodesol-corp',
    role: 'Software Engineer Intern',
    company: 'Nodesol Corp',
    period: 'Sep – Dec 2024',
    location: 'Hamilton Township, NJ · remote',
    description: 'An early product engineering role working remotely with a distributed team and learning the habits behind shipping software that is maintainable.',
    focus: ['Frontend implementation', 'API integration', 'Team collaboration'],
  },
  {
    slug: 'mind-expanders',
    role: 'Frontend Developer',
    company: 'Mind Expanders NPO',
    period: '2024',
    location: 'Lahore · remote / non-profit',
    description: 'Frontend work for a non-profit context: clear information architecture, approachable responsive experiences, and interfaces that help the mission get through.',
    focus: ['Responsive UI systems', 'React development', 'Accessible presentation'],
  },
];

export const skillGroups: SkillGroup[] = [
  { slug: 'frontend', title: 'Frontend systems', eyebrow: '01 / interface', description: 'Interfaces with a point of view: structured, responsive, and built to carry real product complexity.', skills: ['React', 'Next.js', 'React Native', 'Modern UI systems'] },
  { slug: 'backend', title: 'Backend & APIs', eyebrow: '02 / infrastructure', description: 'Practical server-side work that keeps product behavior understandable and dependable.', skills: ['Node.js', 'Express', 'REST APIs', 'JWT'] },
  { slug: 'data', title: 'Data & delivery', eyebrow: '03 / foundations', description: 'The layers beneath the interface: data models, media, payments, and the connective tissue of products.', skills: ['MongoDB', 'MySQL', 'Cloudinary', 'Easypaisa / JazzCash / cards'] },
  { slug: 'product', title: 'Product thinking', eyebrow: '04 / perspective', description: 'A full-stack lens means staying close to the reason behind the feature, not just its implementation.', skills: ['Analytics', 'Adaptive score tracking', 'Real-time systems', 'Testing mindset'] },
];

export const processSteps = [
  { label: 'Idea', icon: 'idea', detail: 'Clarify the problem and the people it serves.' },
  { label: 'Design', icon: 'design', detail: 'Shape the system before the pixels.' },
  { label: 'Analytics', icon: 'analytics', detail: 'Choose signals that tell the truth.' },
  { label: 'Implementation', icon: '</>', detail: 'Build in small, legible increments.' },
  { label: 'Testing', icon: 'testing', detail: 'Find the sharp edges before users do.' },
  { label: 'Deployment', icon: 'deployment', detail: 'Put it in the world and keep learning.' },
];