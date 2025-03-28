export const data: CV = {
  name: "Tobias Berg",
  contactInfo: {
    email: "tobiaswillyberg@gmail.com",
    phone: "+46 73 342 8858",
    location: "Gothenburgh, Sweden",
    website: "bergtobias.com",
  },
  education: [
    {
      startTime: new Date("2022-09-01"),
      endTime: new Date("2024-06-01"),
      school: "Jönköping University",
      location: "Jönköping",
      type: "Degree of Master of Science",
      program: "Supply Chain Operations Management",
    },
    {
      startTime: new Date("2019-09-01"),
      endTime: new Date("2022-06-01"),
      school: "Linnaeus University",
      location: "Växjö",
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
      description: "Description",
      achievements: [
        "Arbetat med olika teknologier inom webbutveckling.",
        "Deltagit i projekt inom systemdesign och implementation.",
      ],
    },
    {
      startTime: new Date("2023-02-01"),
      endTime: new Date("2024-06-01"),
      company: "Bring Intermodel AB",
      title: "Developer",
      description: "Description",
      achievements: [
        "Arbetat med olika teknologier inom webbutveckling.",
        "Deltagit i projekt inom systemdesign och implementation.",
      ],
    },
  ],
  skills: [
    { name: "TypeScript", level: 5 },
    { name: "React", level: 4 },
    { name: "Node.js", level: 3 },
  ],
  languages: [
    { language: "Swedish", level: 5 },
    { language: "English", level: 5 },
  ],
  hobbies: ["Programming", "Gaming", "Golf"],
  interests: ["Technology", "Business", "CloudOps", "GitOps", "DevOps"],
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
