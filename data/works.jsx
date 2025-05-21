const works = [
  {
    id: 1,
    title: "Nafsi Reset",
    type: "Personal Project",
    description: `Nafsi Reset is dedicated to creating a safe and accessible space for individuals, particularly those from low-income communities in Kenya, to seek and receive therapy. 
    We believe that everyone, regardless of their financial status, deserves access to quality mental health care.
    The platform connects users with qualified therapists, offering a range of services including individual therapy, group therapy, and workshops.
    `,
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
      "Increased access to mental health services for low-income communities in Kenya.",
      "Created a safe, accessible platform for therapy services, helping bridge the mental health gap for underserved populations.",
      "Spearheaded digital marketing strategies to increase brand visibility and client engagement.",
      "Managed the organization's website and booking system, streamlining client registrations and online therapy sessions.",
      `Provided IT support for smooth communication, online meetings, and secure data handling.`,
      `Designed marketing campaigns, leveraging SEO, social media, and content creation to drive online traffic.`,
      `Ensured compliance with data protection policies, safeguarding client confidentiality.`,
      `Assisted in setting up and managing Google My Business, social media pages, and email marketing campaigns.`,
      // "Facilitated over 500 therapy sessions in the first month of launch.",
      // "Improved user engagement through a user-friendly interface and personalized content.",
    ],
    category: "Health-Technology",
  },
  {
    id: 2,
    title: "LegioConnect Application",
    type: "Client Project",
    description: `LegioConnect is an application created for members of Legio Maria and those interested in learning more about the faith. It offers rich content on Legio Maria’s history, prayers, and the Bible, for deeper engagement with the faith.`,
    technologies: [
      "Expo React Native",
      "Django REST Framework",
      "PostgreSQL",
      "Expo Application Services",
      "Google Play Store",
      "Railway",
      "Google Cloud",
    ],
    serviceIds: [1, 2, 3],
    image: "/legioconnect.png",
    link: "https://www.legioconnect.com/",
    impact: [
      `Enhanced community engagement for LegioMaria members, resulting in improved communication and event coordination within the app ecosystem.`,
      `Developed a mobile application using Expo React Native, providing users with easy access to Legio Maria's rich content.`,
      `Designed and implemented a robust backend API using Django REST Framework, enabling efficient data communication.`,
      `Deployed the API to Railway, ensuring reliable and scalable backend operations.`,
      `Published the application to the Google Play Store, currently in Closed Testing, to streamline user feedback and iterative improvements.`,
      `Developed a feature-rich admin panel using Next.js, providing comprehensive management capabilities for administrators.`,
    ],
    category: "Social-Technology",
  },
  {
    id: 3,
    title: "IGCSE Learning Management Platform",
    type: "Client Project",
    description: `The IGCSE Learning Management Platform is a comprehensive online learning solution designed to support students and educators in the IGCSE curriculum.
    It offers a range of features including course management, assessment tools, and communication channels to enhance the learning experience.
    `,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Django REST Framework",
      "PostgreSQL",
    ],
    serviceIds: [1, 3, 4],
    image: "/igcse.png",
    link: "https://learnwithmrpc.vercel.app/",
    impact: [
      `Developed the frontend using Next.js, creating an intuitive and responsive interface for showcasing courses.`,
      `Built the API using Django REST Framework (DRF), enabling dynamic course loading and course booking functionalities.`,
      `Deployed the API to Railway, ensuring fast and reliable service.`,
      `Implemented mailing notifications for course bookings, enhancing user engagement and communication.`,
      `Created a comprehensive admin panel for managing courses and booking data, enabling the admin to track course bookings and communicate with clients.`,
      `Streamlined course booking and management for clients, enhancing user experience and admin efficiency.`,
    ],
    category: "Education-Technology",
  },
];

export { works };
