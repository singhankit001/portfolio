const config = {
  title: "Ankit Singh | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Ankit, an AI/ML and Full-Stack Developer specializing in scalable SaaS applications, AI-powered platforms, and developer tools. Discover my latest work, including CampusConnect, Novaris, QueueOS, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Ankit, an AI/ML and full-stack developer creating intelligent systems and innovative projects.",
  },
  keywords: [
    "Ankit",
    "portfolio",
    "full-stack developer",
    "AI/ML developer",
    "web development",
    "3D animations",
    "interactive websites",
    "CampusConnect",
    "Novaris",
    "QueueOS",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Ankit Singh",
  email: "ankit.singh01@adypu.edu.in",
  site: "https://ankitsingh.site",

  // for github stars button
  githubUsername: "Singhankit001",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/devankit001",
    linkedin: "https://www.linkedin.com/in/singhankit001/",
    instagram: "https://www.instagram.com/singh_ankit.001",
    github: "https://github.com/Singhankit001",
  },
};
export { config };
