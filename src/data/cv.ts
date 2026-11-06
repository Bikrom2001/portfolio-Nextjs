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
  location?: string;
  track: RoleTrack;
  points: string[];
  skills?: string[];
};

export const experience: Role[] = [
  {
    title: "NSDA Assessor",
    org: "National Skill Development Authority (NSDA)",
    start: "May 2024",
    end: "Present",
    startYear: 2024,
    type: "Certified Assessor",
    location: "National Authority, Bangladesh",
    track: "teaching",
    points: [
      "Conduct skill assessments as per the Competency Standard for Web Design and Development for Freelancing (L3), Computer Operation (L3) and Web Application Development with Python (L4).",
    ],
    skills: ["CBT&A Level 4", "Python Web App (L4)", "Web Design (L3)", "Computer Operation (L3)", "Competency Standards"],
  },
  {
    title: "Lead Trainer — Social Media Marketing & Content Moderation",
    org: "Infosystem Technology Limited · BACCO-SICIP Program",
    start: "Nov 2026",
    end: "Present",
    startYear: 2026,
    type: "Lead Trainer",
    location: "Dhaka, Bangladesh",
    track: "teaching",
    points: [
      "Conduct training sessions on Social Media Marketing and Content Moderation.",
      "Teach social media platforms such as Facebook, Instagram, LinkedIn, and YouTube.",
      "Train students on social media account management, page setup, and optimization.",
      "Provide feedback and support to help students develop professional skills.",
    ],
    skills: ["Social Media Marketing", "Content Moderation", "Facebook & Instagram", "LinkedIn & YouTube", "Page Setup & SEO", "BACCO-SICIP"],
  },
  {
    title: "Lead Trainer — Digital Business Operations",
    org: "Infosystem Technology Limited · BACCO-SICIP Program",
    start: "Aug 2026",
    end: "Present",
    startYear: 2026,
    type: "Lead Trainer",
    location: "Dhaka, Bangladesh",
    track: "teaching",
    points: [
      "Provide hands-on training on eCommerce platforms, including WooCommerce, for setting up and managing online businesses.",
      "Train learners on CRM and customer support tools, including Zoho CRM, HubSpot, and Freshdesk.",
      "Introduce business automation and AI-powered workflows using Claude AI, native CRM/ERP automation, Zapier, and Make.",
    ],
    skills: ["eCommerce", "WooCommerce", "Zoho CRM", "HubSpot", "Freshdesk", "Claude AI Workflows", "Zapier & Make", "Business Automation"],
  },
  {
    title: "Trainer – Web Application Development",
    org: "Children's Hope",
    start: "Jul 2026",
    end: "Oct 2026",
    startYear: 2026,
    type: "Contractual",
    location: "Dhaka, Bangladesh",
    track: "teaching",
    points: [
      "Delivered lessons on HTML5, CSS3, JavaScript, Bootstrap, Python and database management.",
      "Demonstrated front-end and back-end development techniques through hands-on projects.",
    ],
    skills: ["Python", "Database Management", "HTML5 & CSS3", "JavaScript", "Bootstrap", "Full-Stack Projects"],
  },
  {
    title: "Trainer – Web Development",
    org: "Infosystem Technology Limited",
    start: "Apr 2025",
    end: "Present",
    startYear: 2025,
    type: "Full time",
    location: "Dhaka, Bangladesh",
    track: "teaching",
    points: [
      "Mentor trainees on Python fundamentals and object-oriented programming through real-world projects and assignments.",
      "Build dynamic, responsive and user-friendly front-end components with HTML, CSS and JavaScript (React.js, jQuery).",
    ],
    skills: ["Python OOP", "React.js", "jQuery", "JavaScript", "Responsive Front-End", "Technical Mentoring"],
  },
  {
    title: "Trainer — Web Application Development",
    org: "BASIS Institute of Technology & Management (BITM) · SEIP Project",
    start: "Feb 2024",
    end: "Present",
    startYear: 2024,
    type: "Trainer",
    location: "Dhaka, Bangladesh",
    track: "teaching",
    points: [
      "Conduct training sessions on Web Application Development for BITM-SEIP Batch 13 and 14.",
      "Deliver hands-on instruction on HTML5, CSS3, JavaScript, PHP, MySQL, Bootstrap, and backend architecture.",
      "Mentor trainees through live projects, technical evaluations, and professional freelancing preparation.",
    ],
    skills: ["Web Application Development", "PHP & MySQL", "JavaScript", "HTML5 & CSS3", "Bootstrap", "BITM-SEIP", "Hands-on Projects"],
  },
  {
    title: "Trainer — Web Application Development with PHP",
    org: "BASIS – SEIP Project",
    start: "Oct 2022",
    end: "Dec 2023",
    startYear: 2022,
    type: "Trainer",
    location: "Dhaka, Bangladesh",
    track: "teaching",
    points: [
      "Conducted training sessions on Web Application Development with PHP for SEIP-BASIS Batch-08 and 09.",
      "Delivered hands-on lessons on PHP, MySQL, HTML5, CSS3, JavaScript, Bootstrap, along with computer programming fundamentals.",
      "Mentored students on practical web project development and industry skill competency standards.",
    ],
    skills: ["PHP & MySQL", "Web Application Development", "SEIP-BASIS Batch 08, 09", "HTML5 & CSS3", "Bootstrap", "JavaScript"],
  },
  {
    title: "Web Operation Specialist",
    org: "Euro Bangla iT",
    start: "Feb 2021",
    end: "Present",
    startYear: 2021,
    type: "Remote",
    location: "Remote",
    track: "development",
    points: [
      "Conceptualize, create and manage dynamic web pages for data display using HTML, CSS, JavaScript and Python.",
      "Optimize database queries, indexing and caching for better performance.",
      "Write unit and integration tests with PyTest.",
      "Set up and manage CI/CD pipelines for automated testing and deployment with GitHub Actions, GitLab CI/CD and Jenkins.",
    ],
    skills: ["Python", "JavaScript", "MySQL Optimization", "PyTest", "CI/CD Pipelines", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Teaching Assistant",
    org: "BRAC University",
    start: "Aug 2019",
    end: "Apr 2020",
    startYear: 2019,
    type: "Full time",
    location: "Dhaka, Bangladesh",
    track: "teaching",
    points: [
      "Demonstrated the curriculum and activities of the physics courses PHY 110 and PHY 111.",
    ],
    skills: ["Physics Curriculum", "PHY 110 & 111", "Lab Demonstrations", "Academic Mentorship"],
  },
  {
    title: "IT Officer",
    org: "Euro Bangla iT",
    start: "Feb 2014",
    end: "Aug 2019",
    startYear: 2014,
    type: "Full time",
    location: "Dhaka, Bangladesh",
    track: "development",
    points: ["Maintained and monitored computer systems and networks."],
    skills: ["Systems Administration", "Network Infrastructure", "System Monitoring", "Hardware Support"],
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
    name: "University Application Site – Applicantor",
    summary:
      "A dynamic university application portal built with Laravel that provides an online platform for prospective students to explore application opportunities and submit their university admission applications.",
    stack: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/applicantor-portal.jpg",
    github: "https://github.com/PriyankaDewan06",
    live: "https://applicationportal.priyankaddewan.com/",
    features: [
      "Online university application platform",
      "Student application submission system",
      "Application form management",
      "Dynamic content management",
      "User-friendly application interface",
      "Responsive design for desktop and mobile devices",
      "Streamlined online admission application process",
    ],
  },
  {
    name: "E-commerce Website – Pixomart",
    summary:
      "A dynamic e-commerce website built with Laravel that provides an online shopping experience where customers can explore products, manage their shopping carts, and place orders through a user-friendly interface.",
    stack: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/pixomart-ecommerce.jpg",
    github: "https://github.com/PriyankaDewan06",
    live: "https://ecommerceproject.priyankaddewan.com/",
    features: [
      "Dynamic e-commerce website",
      "Product listing and category management",
      "Product details and search functionality",
      "Shopping cart management",
      "Customer order placement system",
      "User registration and authentication",
      "Order management functionality",
      "Responsive design for desktop and mobile devices",
      "Database-driven product and customer management",
    ],
  },
  {
    name: "Online News Portal – Prime News",
    summary:
      "A dynamic online news portal built with Laravel that allows users to explore the latest news, browse news by categories, and access articles across different sections through a responsive interface.",
    stack: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/prime-news-portal.jpg",
    github: "https://github.com/PriyankaDewan06",
    live: "https://newsportalproject.priyankaddewan.com/",
    features: [
      "Dynamic online news publishing platform",
      "Category-based news browsing system",
      "Latest and popular news sections",
      "Detailed news article pages",
      "News search and navigation functionality",
      "Responsive design for desktop and mobile devices",
      "Structured news content management",
    ],
  },
  {
    name: "School Donation Analysis",
    summary:
      "A Python-based data analysis project that explores over 4.6 million school donation records to identify donation trends, analyze teacher and school department data, and visualize insights across different US states.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "Cufflinks"],
    image: "/school-donation-analysis.jpg",
    github: "https://github.com/PriyankaDewan06/donation-analysis",
    features: [
      "Analyzes over 4.6 million school donation records",
      "Uses Pandas and NumPy for data cleaning and manipulation",
      "Explores school departments and teacher donation activities",
      "Analyzes donation projects across different US states",
      "Creates interactive data visualizations using Plotly and Cufflinks",
      "Uses Matplotlib and Pyplot to visualize analytical results",
      "Performs date and time-based data analysis",
    ],
  },
  {
    name: "Covid Death Data Exploration",
    summary:
      "A Python-based data exploration project focused on analyzing COVID-19 death statistics to identify trends, examine pandemic impacts, and extract meaningful insights through data analysis.",
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook", "MySQL"],
    image: "/covid-death-data-exploration.png",
    github: "https://github.com/PriyankaDewan06/Data-Exploration",
    features: [
      "COVID-19 death data exploration",
      "Data cleaning and preprocessing",
      "Statistical data analysis",
      "Exploration of death statistics and trends",
      "Data filtering and aggregation",
      "Data visualization and analytical insights",
    ],
  },
  {
    name: "Shutdown App with GUI",
    summary:
      "A Python-based desktop application with a graphical user interface (GUI) that allows users to easily manage computer power operations, including shutdown, restart, and related system controls.",
    stack: ["Python", "Tkinter", "OS Module", "Desktop GUI"],
    image: "/shutdown-app-gui.jpg",
    github: "https://github.com/PriyankaDewan06/Python-Projects",
    features: [
      "User-friendly graphical interface",
      "Computer shutdown functionality",
      "System restart functionality",
      "Easy-to-use control buttons",
      "GUI-based system operation management",
      "Simple and interactive desktop application",
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
  { id: "classroom", label: "Classroom" },
  { id: "teaching", label: "Teaching" },
  { id: "credentials", label: "Credentials" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
