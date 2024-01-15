import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jack Sellwood",
  initials: "JS",
  location: "Omaha, NE",
  locationLink: "https://www.google.com/maps/place/Omaha",
  about:
    "Technical product manager, systems thinker, writer, and wanderer.",
  summary:
    "I’m a curious technologist stumbling into design and minimalism. I find joy in tidying up technology. Cooking with friends, long walks, and yoga help me find purpose. Streamlining life helps me stay focused on these priorities. A minimal wardrobe, few possessions, and unstructured time help me feel grounded.",
  avatarUrl: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/11cb9078-8cad-490a-8a80-723494902050/jack-sellwood-lisbon_copy/w=3840,quality=80",
  personalWebsiteUrl: "https://jacksellwood.com",
  contact: {
    email: "jacksellwood@me.com",
    tel: "+16519558945",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jackonawalk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jacksellwood/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jackonawalk",
        icon: XIcon,
      },
    ],
  },
  // education: [
  //   {
  //     school: "University of Minnesota",
  //     degree: "Comparative Literature",
  //     start: "2015",
  //     end: "2010",
  //   },
  // ],
  work: [
    {
      company: "Apollo GraphQL",
      link: "https://apollographql.com",
      badges: [],
      title: "Staff Product Manager",
      logo: ParabolLogo,
      start: "2022",
      end: "Present",
      description:
        "Apollo is the all-purpose hub for your GraphQL API, empowering developers across your stack to ship early, ship often, and ship safely.",
    },
    {
      company: "GatsbyJS",
      link: "https://gatsbyjs.com",
      badges: [],
      title: "Principal Product Manager",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description:
        "GatsbyJS is the fast and flexible framework that makes building websites with any CMS, API, or database fun again.",
    },
    {
      company: "Flywheel",
      link: "https://getflywheel.com/",
      badges: [],
      title: "Senior Product Manager",
      logo: JojoMobileLogo,
      start: "2019",
      end: "2020",
      description:
        "Local is the fuss-free way to develop WordPress sites locally. Powered by a community of over 100k developers, Local is the gold-standard for WordPress developers.",
    },
    {
      company: "WEDGE",
      link: "https://web.archive.org/web/20190717133329/http://wedgeus.com/",
      badges: [],
      title: "Technologist, Founder",
      logo: NSNLogo,
      start: "2013",
      end: "2019",
      description: "WEDGE helps small businesses and nonprofits focus their day so they can accomplish more. Streamlined branding, web, and IT services.",
    },
  ],
  skills: [
    "Tableau",
    "BigQuery",
    "Segment",
    "Figma",
    "Jira",
    "PHP",
    "React",
  ],
  projects: [
    {
      title: "Grapple",
      techStack: [
        "Side Project",
        "TypeScript",
        "Laravel",
        "React",
        "Tailwind",
      ],
      description: "Join data across apps in minutes",
      logo: ConsultlyLogo,
      link: {
        label: "cloudgrapple.com",
        href: "https://cloudgrapple.com/",
      },
    },
    {
      title: "Hellodeco",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Turn Notion into your email inbox",
      logo: MonitoLogo,
      link: {
        label: "hellodeco.so",
        href: "https://web.archive.org/web/20221005195718/https://hellodeco.so/",
      },
    },
    {
      title: "Jack on a Walk",
      techStack: ["Side Project", "Writing", "Creative"],
      description:
        "Personal blog",
      logo: Minimal,
      link: {
        label: "jackonawalk.com",
        href: "https://jackonawalk.com/",
      },
    },
  ],
} as const;
