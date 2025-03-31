export const i = (lang: string): CV => {
  const langs: CVLang = {
    en: {
      name: "Tobias Berg",
      contactInfo: {
        email: "tobiaswillyberg@gmail.com",
        phone: "+46 73 342 8858",
        location: "Gothenburg, Sweden",
        website: "https://bergtobias.com",
      },
      education: [
        {
          startTime: new Date("2022-09-01"),
          endTime: new Date("2024-06-01"),
          school: "Jönköping University",
          location: "Jönköping, Sweden",
          type: "Master of Science",
          program: "Supply Chain Operations Management",
        },
        {
          startTime: new Date("2019-09-01"),
          endTime: new Date("2022-06-01"),
          school: "Linnaeus University",
          location: "Växjö, Sweden",
          type: "Bachelor of Science",
          program: "Industrial Economics",
        },
      ],
      experience: [
        {
          startTime: new Date("2024-06-03"),
          endTime: new Date("2025-05-23"),
          company: "Volvo Cars AB",
          title: "Business Analyst",
          description:
            "Leveraged technical expertise to streamline legacy systems and enhance operational efficiency.",
          achievements: [
            "Implemented a new message queue system for legacy systems.",
            "Developed and deployed a full CI/CD pipeline for microservices using GitOps and DevOps practices.",
            "Established comprehensive observability using the ELK stack.",
            "Set up robust monitoring using the Prometheus stack.",
          ],
        },
        {
          startTime: new Date("2023-02-01"),
          endTime: new Date("2024-06-01"),
          company: "Bring Intermodel AB",
          title: "Developer",
          description:
            "Focused on developing innovative web applications and automating routine tasks.",
          achievements: [
            "Developed a web application for fleet management.",
            "Reduced mundane tasks by implementing automation tools.",
            "Worked with various modern web development technologies.",
          ],
        },
      ],
      skills: [
        { name: "TypeScript", level: 4 },
        { name: "React", level: 4 },
        { name: "Node.js", level: 3 },
        { name: "Next.js", level: 4 },
      ],
      languages: [
        { language: "Swedish", level: 5 },
        { language: "English", level: 5 },
      ],
      hobbies: ["Programming", "Gaming", "Golf"],
      interests: ["Technology", "Business", "CloudOps", "GitOps", "DevOps"],
    },

    sv: {
      name: "Tobias Berg",
      contactInfo: {
        email: "tobiaswillyberg@gmail.com",
        phone: "+46 73 342 8858",
        location: "Göteborg, Sverige",
        website: "bergtobias.com",
      },
      education: [
        {
          startTime: new Date("2022-09-01"),
          endTime: new Date("2024-06-01"),
          school: "Jönköping Universitet",
          location: "Jönköping",
          type: "Civilingenjörsexamen",
          program: "Supply Chain Operations Management",
        },
        {
          startTime: new Date("2019-09-01"),
          endTime: new Date("2022-06-01"),
          school: "Linnéuniversitetet",
          location: "Växjö",
          type: "Kandidatexamen",
          program: "Industriell ekonomi",
        },
      ],
      experience: [
        {
          startTime: new Date("2024-06-03"),
          endTime: new Date("2025-05-23"),
          company: "Volvo Cars AB",
          title: "Affärsanalytiker",
          description: "Beskrivning",
          achievements: [
            "Arbetat med olika teknologier inom webbutveckling.",
            "Deltagit i projekt inom systemdesign och implementation.",
          ],
        },
        {
          startTime: new Date("2023-02-01"),
          endTime: new Date("2024-06-01"),
          company: "Bring Intermodal AB",
          title: "Utvecklare",
          description: "Beskrivning",
          achievements: [
            "Arbetat med olika teknologier inom webbutveckling.",
            "Deltagit i projekt inom systemdesign och implementation.",
          ],
        },
      ],
      skills: [
        { name: "TypeScript", level: 4 },
        { name: "React", level: 4 },
        { name: "Node.js", level: 4 },
      ],
      languages: [
        { language: "Svenska", level: 5 },
        { language: "Engelska", level: 5 },
      ],
      hobbies: ["Programmering", "Gaming", "Golf"],
      interests: ["Teknologi", "Affärer", "CloudOps", "GitOps", "DevOps"],
    },
  };

  return langs[lang as keyof CVLang] || langs.en;
};

export type Experience = {
  startTime: Date;
  endTime: Date;
  company: string;
  title: string;
  description?: string;
  achievements?: string[];
  location?: string;
};

export type Education = {
  startTime: Date;
  endTime: Date;
  school: string;
  location: string;
  type: string;
  program: string;
  description?: string;
};

export type Skill = {
  name: string;
  level: number; // 0-5
};

export type CV = {
  name: string;
  education: Education[];
  experience: Experience[];
  skills?: Skill[];
  languages?: { language: string; level: number }[];
  interests?: string[];
  hobbies?: string[];
  contactInfo: ContactInfo;
};

export type CVLang = {
  [key: string]: CV;
};

export type ContactInfo = {
  phone: string;
  email: string;
  location: string;
  website: string;
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};
