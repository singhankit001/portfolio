import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Python", "python-svgrepo-com (1).svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "campusconnect",
    category: "University Management Platform",
    title: "CampusConnect",
    src: "/assets/projects-screenshots/campusconnect/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    github: "https://github.com/Singhankit001/CampusConnect",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A comprehensive university management platform for streamlined campus operations.
          </TypographyP>
          <TypographyP className="font-mono ">
            CampusConnect is built to digitize and simplify university administration, student interactions, and academic tracking. 
            It provides dedicated modules for attendance, grades, scheduling, and notifications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Streamlined Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            The clean, responsive dashboard offers a unified view of critical metrics, allowing administrators and students alike 
            to quickly access the tools they need. Data visualization provides instant insights into enrollment, academic performance, and more.
          </p>
          <SlideShow images={[`${BASE_PATH}/campusconnect/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "novaris",
    category: "AI & Analytics",
    title: "Novaris",
    src: "/assets/projects-screenshots/novaris/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/Singhankit001/Novaris",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-powered GitHub repository intelligence platform.
          </TypographyP>
          <TypographyP className="font-mono ">
            Novaris offers deep insights into your codebase by analyzing commits, pull requests, and code quality. 
            It leverages AI to provide actionable recommendations for improving repository health and developer velocity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Developer Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Features a high-tech dark mode UI with interactive graphs detailing code complexity, contributor impact, and merge cycles.
            Perfect for engineering leaders looking to optimize their team's workflow.
          </p>
          <SlideShow images={[`${BASE_PATH}/novaris/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "queueos",
    category: "Operations Management",
    title: "QueueOS",
    src: "/assets/projects-screenshots/queueos/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "#",
    github: "https://github.com/Singhankit001/QueueOS",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Advanced queue management system web application.
          </TypographyP>
          <TypographyP className="font-mono ">
            Designed to minimize wait times and improve service efficiency, QueueOS handles real-time ticket allocation 
            and customer tracking with an intuitive, minimalist interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Real-time Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Live dashboards provide staff with an instant overview of active agents, average wait times, and queue capacity,
            ensuring smooth operations even during peak hours.
          </p>
          <SlideShow images={[`${BASE_PATH}/queueos/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "foundry",
    category: "Creative Platform",
    title: "Foundry",
    src: "/assets/projects-screenshots/foundry/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Singhankit001/Foundry",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Innovative digital platform showcasing creative technology.
          </TypographyP>
          <TypographyP className="font-mono ">
            Foundry serves as a sleek, modern UI for hosting generative art, WebGL experiments, and immersive web experiences.
            Its dark theme and curated layout highlight visual excellence.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Immersive Experience</TypographyH3>
          <p className="font-mono mb-2">
            The platform integrates 3D elements and smooth page transitions to create a captivating portfolio of digital explorations.
          </p>
          <SlideShow images={[`${BASE_PATH}/foundry/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "skillsync-ai",
    category: "EdTech & Careers",
    title: "SkillSync AI",
    src: "/assets/projects-screenshots/skillsync-ai/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "#",
    github: "https://github.com/Singhankit001/skillsync-ai",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-driven student opportunities and career guidance platform.
          </TypographyP>
          <TypographyP className="font-mono ">
            SkillSync AI matches students with ideal internships and mentorship opportunities based on their evolving career profiles,
            using intelligent matching algorithms and a friendly, accessible interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Smart Matching</TypographyH3>
          <p className="font-mono mb-2">
            The dashboard visualizes career paths and provides personalized recommendations for skill building and networking.
          </p>
          <SlideShow images={[`${BASE_PATH}/skillsync-ai/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "shopsphere-platform",
    category: "E-Commerce",
    title: "ShopSphere Platform",
    src: "/assets/projects-screenshots/shopsphere-platform/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
      ],
    },
    live: "#",
    github: "https://github.com/Singhankit001/shopsphere-platform",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Instant-commerce grocery delivery platform.
          </TypographyP>
          <TypographyP className="font-mono ">
            ShopSphere provides a fast, modern retail UI for quick-commerce operations. It features an intuitive product grid,
            flash deals, and a seamless checkout experience designed to maximize conversions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Optimized Storefront</TypographyH3>
          <p className="font-mono mb-2">
            With real-time cart updates and a categorized browsing experience, it handles high-volume inventory efficiently.
          </p>
          <SlideShow images={[`${BASE_PATH}/shopsphere-platform/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "realtime-shuttle-tracker",
    category: "Transportation",
    title: "Real-time Shuttle Tracker",
    src: "/assets/projects-screenshots/realtime-shuttle-tracker/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.sockerio,
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "#",
    github: "https://github.com/Singhankit001/realtime-shuttle-tracker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Live GPS campus shuttle tracking web app.
          </TypographyP>
          <TypographyP className="font-mono ">
            Built to improve campus commute efficiency, this app visualizes active shuttles on an interactive map, 
            providing accurate arrival time predictions and route details.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Live Visualization</TypographyH3>
          <p className="font-mono mb-2">
            Utilizes WebSockets for low-latency location updates, ensuring students never miss a bus and can plan their journeys efficiently.
          </p>
          <SlideShow images={[`${BASE_PATH}/realtime-shuttle-tracker/landing.png`]} />
        </div>
      );
    },
  },
];
export default projects;
