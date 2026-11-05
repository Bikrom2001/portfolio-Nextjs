// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Priyanka Das Dewan",
  firstName: "Priyanka",
  lastName: "Das Dewan",
  role: "Web Application Developer",
  tagline:
    "I build data-driven web applications with Python, Django and JavaScript — and I train and assess the next generation of web developers as an NSDA-certified trainer and assessor.",
  summary:
    "I am an NSDA-certified trainer and assessor with competency in web development and computer operation. I'm skilled in database development, writing and testing code, and adding new features, and I'm looking for an innovative organization where I can use both my technical and teaching knowledge to help a team grow and improve.",
  location: "Motijheel, Dhaka",
  phone: "01924078763",
  phoneHref: "tel:+8801924078763",
  email: "priyanka.dasdewan@gmail.com",
  photo: "/profile.jpg",
  cv: "/Priyanka_Das_Dewan_CV.pdf",
};

export type LinkKind = "linkedin" | "github" | "web" | "youtube";

export const links: { label: string; handle: string; href: string; kind: LinkKind }[] = [
  { label: "LinkedIn", handle: "priyanka-das-dewan", href: "https://www.linkedin.com/in/priyanka-das-dewan/", kind: "linkedin" },
  { label: "GitHub", handle: "PriyankaDewan06", href: "https://github.com/PriyankaDewan06", kind: "github" },
  { label: "Portfolio", handle: "priyankaddewan.com", href: "https://www.portfolio.priyankaddewan.com/", kind: "web" },
  { label: "ICT Learning Academy", handle: "YouTube channel", href: "https://www.youtube.com/@learningict-go6vc", kind: "youtube" },
];

export type RoleTrack = "teaching" | "development";

export type Role = {
  title: string;
  org: string;
  start: string; // display
  end: string; // display, "Present" if ongoing
  startYear: number;
  type?: string;
  track: RoleTrack;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Lead Trainer — Social Media Marketing & Content Moderation",
    org: "Infosystem Technology Limited · BACCO-SICIP Program",
    start: "Nov 2026",
    end: "Present",
    startYear: 2026,
    type: "Lead Trainer",
    track: "teaching",
    points: [
      "Conduct training sessions on Social Media Marketing and Content Moderation.",
      "Teach social media platforms such as Facebook, Instagram, LinkedIn, and YouTube.",
      "Train students on social media account management, page setup, and optimization.",
      "Provide feedback and support to help students develop professional skills.",
    ],
  },
  {
    title: "Lead Trainer — Digital Business Operations",
    org: "Infosystem Technology Limited · BACCO-SICIP Program",
    start: "Aug 2026",
    end: "Present",
    startYear: 2026,
    type: "Lead Trainer",
    track: "teaching",
    points: [
      "Provide hands-on training on eCommerce platforms, including WooCommerce, for setting up and managing online businesses.",
      "Train learners on CRM and customer support tools, including Zoho CRM, HubSpot, and Freshdesk.",
      "Introduce business automation and AI-powered workflows using Claude AI, native CRM/ERP automation, Zapier, and Make.",
    ],
  },
  {
    title: "Trainer – Web Application Development",
    org: "Children's Hope",
    start: "Jul 2026",
    end: "Oct 2026",
    startYear: 2026,
    type: "Contractual",
    track: "teaching",
    points: [
      "Delivered lessons on HTML5, CSS3, JavaScript, Bootstrap, Python and database management.",
      "Demonstrated front-end and back-end development techniques through hands-on projects.",
    ],
  },
  {
    title: "Trainer – Web Development",
    org: "Infosystem Technology Limited",
    start: "Apr 2025",
    end: "Present",
    startYear: 2025,
    type: "Full time",
    track: "teaching",
    points: [
      "Mentor trainees on Python fundamentals and object-oriented programming through real-world projects and assignments.",
      "Build dynamic, responsive and user-friendly front-end components with HTML, CSS and JavaScript (React.js, jQuery).",
    ],
  },
  {
    title: "Assessor",
    org: "National Skill Development Authority (NSDA)",
    start: "May 2024",
    end: "Present",
    startYear: 2024,
    track: "teaching",
    points: [
      "Conduct skill assessments as per the Competency Standard for Web Design and Development for Freelancing (L3), Computer Operation (L3) and Web Application Development with Python (L4).",
    ],
  },
  {
    title: "Trainer – Web Design",
    org: "BASIS – SEIP Project",
    start: "Oct 2022",
    end: "Dec 2023",
    startYear: 2022,
    type: "Full time",
    track: "teaching",
    points: [
      "Taught HTML, CSS, Bootstrap and JavaScript, along with basic networking, graphics and computer programming.",
    ],
  },
  {
    title: "Web Operation Specialist",
    org: "Euro Bangla iT",
    start: "Feb 2021",
    end: "Present",
    startYear: 2021,
    type: "Remote",
    track: "development",
    points: [
      "Conceptualize, create and manage dynamic web pages for data display using HTML, CSS, JavaScript and Python.",
      "Optimize database queries, indexing and caching for better performance.",
      "Write unit and integration tests with PyTest.",
      "Set up and manage CI/CD pipelines for automated testing and deployment with GitHub Actions, GitLab CI/CD and Jenkins.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "BRAC University",
    start: "Aug 2019",
    end: "Apr 2020",
    startYear: 2019,
    type: "Full time",
    track: "teaching",
    points: [
      "Demonstrated the curriculum and activities of the physics courses PHY 110 and PHY 111.",
    ],
  },
  {
    title: "IT Officer",
    org: "Euro Bangla iT",
    start: "Feb 2014",
    end: "Aug 2019",
    startYear: 2014,
    type: "Full time",
    track: "development",
    points: ["Maintained and monitored computer systems and networks."],
  },
];

export const engagements = [
  {
    org: "Dhaka Technical Teachers Training Institute (DTTI)",
    topic: "Web Design (L3), Computer Operation (L3)",
    dates: "Dec 2024 – Present",
  },
  {
    org: "College Education Development Project (CEDP), National University",
    topic: "Advanced ICT and Freelancing",
    dates: "25–26 Sep 2024",
  },
  {
    org: "SAIC Institute of Management and Technology (SIMT)",
    topic: "Web Development Level IV (BTEB)",
    dates: "12–17 May 2024",
  },
  {
    org: "Her Power Project, Department of ICT",
    topic: "Web Development",
    dates: "3–4 Oct 2023",
  },
];

export const projects = [
  {
    name: "Job Portal",
    summary:
      "A multilingual job portal where job seekers manage their profiles, authors publish news, and candidates get job alerts by email.",
    stack: ["Django", "PostgreSQL", "Ajax", "Multi-language"],
    features: [
      "Complete multi-language system built in Django",
      "Single and multi auth system with guards",
      "Job seekers update their own photo, information and password",
      "Authors create, edit and delete news posts",
      "Job alert emails sent with Ajax, plus email verification",
    ],
  },
  {
    name: "University Admission Portal",
    summary:
      "An online admission portal where applicants create a profile, upload their documents and contact the admissions office.",
    stack: ["Django", "Auth guards", "File uploads", "SMTP"],
    features: [
      "Single and multi auth system with guards",
      "Applicant profile creation and document upload",
      "Configurable site logo, favicon and branding",
      "Contact form that sends email to the admissions team",
    ],
  },
];

export const skillGroups = [
  { name: "Languages", items: ["Python", "PHP", "JavaScript", "HTML", "CSS"] },
  { name: "Frameworks & libraries", items: ["Django", "Laravel", "React.js", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"] },
  { name: "CMS", items: ["WordPress", "Joomla"] },
  { name: "Tools & platforms", items: ["Git", "VS Code", "MySQL", "cPanel", "Power BI", "MATLAB", "Arduino", "PSpice"] },
  { name: "Documentation", items: ["MS Word", "Excel", "PowerPoint", "LaTeX"] },
];

export const education = [
  {
    degree: "MSc in Renewable Energy Technology",
    school: "Institute of Energy, University of Dhaka",
    years: "2017 – 2019",
    result: "CGPA 3.81 / 4",
  },
  {
    degree: "BSc in Electrical and Electronic Engineering",
    school: "BRAC University",
    years: "2009 – 2014",
    result: "CGPA 3.60 / 4",
  },
];

export type Cert = { name: string; issuer: string; level?: string; group: "NSDA" | "Trainer programs" | "Courses" };

export const certifications: Cert[] = [
  { name: "Competency-Based Training and Assessment Methodology", issuer: "National Skill Development Authority (NSDA)", level: "Level 4", group: "NSDA" },
  { name: "Web Application Development with Python", issuer: "National Skill Development Authority (NSDA)", level: "Level 4", group: "NSDA" },
  { name: "Web Design and Development", issuer: "National Skill Development Authority (NSDA)", level: "Level 3", group: "NSDA" },
  { name: "TOT program on Application on Web", issuer: "Nanyang Polytechnic, Singapore", group: "Trainer programs" },
  { name: "TOT program on IT Support Services", issuer: "Skills for Employment Investment Program (SEIP)", group: "Trainer programs" },
  { name: "Full Stack Web Development with Python, Django & React", issuer: "Ostad", group: "Courses" },
  { name: "Web Development Python with Django", issuer: "The Universal IT", group: "Courses" },
  { name: "Microsoft ASP.NET MVC Core with SQL Server", issuer: "BASIS Institute of Technology and Management", group: "Courses" },
  { name: "HTML5 & CSS3 Complete Course", issuer: "Udemy", group: "Courses" },
  { name: "Introduction to the Internet of Things and Embedded Systems", issuer: "Coursera", group: "Courses" },
];

export const publication = {
  title: "Detection of Cardiovascular Disease of Patients of an Early Stage using Machine Learning Algorithms",
  venue: "ICHE",
  date: "23 September 2022",
};

export const affiliations = [
  { role: "Associate Member", org: "Institution of Engineers, Bangladesh (IEB)" },
  { role: "Student Advisor", org: "DURS" },
  { role: "Member", org: "IEEE Student Branch" },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "teaching", label: "Teaching" },
  { id: "classroom", label: "Classroom" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
