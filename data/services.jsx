const services = [
  {
    id: 1,
    title: "Web & Mobile App Development",
    description:
      "Building vibrant, responsive web and mobile apps with Next.js, React, and Expo React Native to grow your audience by up to 30%.",
    category: "Technology",
    icon: "bi-code-slash",
    tags: ["Web", "Mobile", "Next.js", "React", "Expo"],
    whatWeOffer: [
      "Custom web applications with Next.js for SEO and performance",
      "Cross-platform mobile apps using Expo React Native",
      "Responsive UI/UX design for seamless user experiences",
      "Scalable APIs with Django REST Framework",
      "Ongoing maintenance and feature updates",
    ],
    relatedProjects: [1, 2, 7],
  },
  {
    id: 2,
    title: "AI & Machine Learning Solutions",
    description:
      "Creating smart AI systems with Python to automate tasks and boost decision-making, with 15% improved efficiency in API performance.",
    category: "Technology",
    icon: "bi-robot",
    tags: ["AI", "Machine Learning", "Python", "Automation"],
    whatWeOffer: [
      "Custom machine learning models for predictive analytics",
      "AI-powered chatbots for enhanced customer support",
      "Data pipeline automation with Python and TensorFlow",
      "Integration with existing systems for real-time insights",
      "Model optimization for faster inference",
    ],
    relatedProjects: [3],
  },
  {
    id: 3,
    title: "Branding & Digital Marketing",
    description:
      "Crafting bold brands and creative marketing campaigns to amplify your online presence and reach by 30%.",
    category: "Creative",
    icon: "bi-brush",
    tags: ["Branding", "Marketing", "Digital"],
    whatWeOffer: [
      "Unique brand identity design (logos, typography, colors)",
      "SEO-optimized content strategies for higher rankings",
      "Social media campaigns with targeted ads",
      "Analytics-driven marketing insights",
      "Website audits for improved user engagement",
    ],
    relatedProjects: [4],
  },
  {
    id: 4,
    title: "Business Strategy & Management",
    description:
      "Designing growth-focused strategies and streamlined processes to skyrocket your business efficiency and profitability.",
    category: "Business",
    icon: "bi-bar-chart-line",
    tags: ["Strategy", "Management", "Consulting"],
    whatWeOffer: [
      "Market analysis and competitive positioning",
      "Custom growth roadmaps for startups and enterprises",
      "Process automation consulting for efficiency",
      "Leadership training and team alignment workshops",
      "Financial forecasting and KPI tracking",
    ],
    relatedProjects: [5],
  },
  {
    id: 5,
    title: "Third-Party Integrations",
    description:
      "Seamlessly connecting tools and APIs with optimized databases for faster data retrieval and smoother operations.",
    category: "Technology",
    icon: "bi-plug",
    tags: ["APIs", "Integrations", "Database"],
    whatWeOffer: [
      // "Integration with CRMs like Salesforce or HubSpot",
      "Custom API development with DRF for secure data exchange",
      "Database optimization for low-latency queries",
      "Payment gateway integrations (e.g., Pesapal, M-pesa)",
      // "Automated workflows with tools like Zapier",
    ],
    relatedProjects: [1, 6],
  },
  // {
  //   id: 6,
  //   title: "Tech-Enhanced Chauffeur Services",
  //   description:
  //     "Offering premium, tech-driven private chauffeur services for stress-free, long-distance travel with real-time navigation.",
  //   category: "Lifestyle",
  //   icon: "bi-car-front",
  //   tags: ["Transport", "Chauffeur", "Navigation"],
  //   whatWeOffer: [
  //     "Custom booking apps for seamless scheduling",
  //     "AI-optimized route planning for efficiency",
  //     "Real-time tracking and navigation integration",
  //     "Luxury vehicle options for comfort",
  //     "Personalized travel itineraries",
  //   ],
  //   relatedProjects: [7],
  // },
  {
    id: 7,
    title: "Cloud Solutions & DevOps",
    description:
      "Streamlining operations with secure cloud infrastructure and DevOps practices for faster, scalable deployments.",
    category: "Technology",
    icon: "bi-cloud",
    tags: ["Cloud", "DevOps", "Infrastructure"],
    whatWeOffer: [
      "Cloud migration to AWS, Azure, or Google Cloud",
      "CI/CD pipeline setup for automated deployments",
      "Containerization with Docker and Kubernetes",
      "Infrastructure-as-code with Terraform",
      "24/7 cloud monitoring and support",
    ],
    relatedProjects: [8],
  },
];

export { services };
