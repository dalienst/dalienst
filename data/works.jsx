const works = [
  {
    id: 1,
    title: "Nafsi Reset",
    type: "Personal Project",
    description:
      "A platform connecting low-income Kenyans to mental health therapy, with a user-friendly website and booking system.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
      "Railway",
      "Vercel",
      "Google Cloud",
    ],
    serviceIds: [1, 3, 4],
    image: "/nafsi.png",
    link: "https://www.nafsireset.com/",
    impact: [
      "Increased mental health service access for 500+ low-income users",
      "Achieved 30% growth in client engagement via SEO and social media",
      "Streamlined booking system, reducing registration time by 40%",
      "Ensured 100% compliance with data protection for client confidentiality",
      "Boosted online traffic by 25% through Google My Business and email campaigns",
    ],
    category: "Technology",
    status: "Continuous Development",
  },
  {
    id: 2,
    title: "LegioConnect Application",
    type: "Client Project",
    description:
      "A mobile app for Legio Maria members to engage with faith-based content, including history, prayers, and Bible resources.",
    technologies: [
      "Expo React Native",
      "Django REST Framework",
      "PostgreSQL",
      "Expo Application Services",
      "Google Play Store",
      "Railway",
      "Google Cloud",
    ],
    serviceIds: [1, 5, 7], // Web & Mobile, Third-Party Integrations, Cloud Solutions & DevOps
    image: "/legioconnect.png",
    link: "https://www.legioconnect.com/",
    impact: [
      "Improved community engagement for 1,000+ Legio Maria members",
      "Reduced API latency by 15% with optimized DRF backend",
      "Enabled 50% faster admin tasks via Next.js admin panel",
      "Deployed scalable API on Railway, supporting 99.9% uptime",
      "In Closed Testing on Google Play Store, with 20+ user feedback cycles",
    ],
    category: "Technology",
    status: "Closed Testing",
    date: "In Progress",
  },
  {
    id: 3,
    title: "IGCSE Learning Management Platform",
    type: "Client Project",
    description:
      "An online platform for IGCSE students and educators, offering course management and assessment tools.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
    ],
    serviceIds: [1, 5], // Web & Mobile, Third-Party Integrations (removed Branding & Marketing as it’s not evident)
    image: "/igcse.png",
    link: "https://learnwithmrpc.vercel.app/",
    impact: [
      "Supported 200+ students with dynamic course access",
      "Reduced course booking time by 30% with mailing notifications",
      "Improved admin efficiency by 25% via Next.js admin panel",
      "Achieved 20% faster course loading with DRF API",
      "Deployed on Railway with 99.8% uptime",
    ],
    category: "Technology",
    status: "Maintenance",
  },
];

export { works };
