export interface ProjectDetailedData {
  id: string;
  title: string;
  client?: string;
  role: string | string[];
  description: string;
  challenges?: string[];
  process?: string;
  deliverables?: {
    title: string;
    description: string;
  }[];
  tools?: string[];
  externalLink?: string;
}

export const PROJECTS_DETAILED: ProjectDetailedData[] = [
  {
    id: 'gov-procurement',
    title: 'Accountant General (GPA) – Platform Redesign',
    client: 'Government Procurement Administration',
    role: [
      'UX Lead – Responsible for research, IA, UX strategy, wireframes, prototypes, usability validation, and guiding the UI and development teams',
      'Responsible for research and user flows',
      'Information architecture redesign',
      'UX concept for homepage, AI agent, tenders, and personal area'
    ],
    description: 'The Government Procurement Administration (GPA) manages Israel\'s public-sector procurement processes and digital systems. Information was scattered across multiple outdated platforms, making it difficult for suppliers and government employees to find tenders, understand procedures, or complete procurement tasks.\n\nThe goal: create one modern, intuitive, centralized hub for all procurement information and tools.',
    challenges: [
      'Fragmented content across many unconnected platforms',
      'Complex, regulation-heavy information',
      'Very different user types: suppliers, procurement officers, government employees',
      'Outdated tender experience and confusing terminology'
    ],
    process: 'We began with user research, including interviews with suppliers, procurement officers, and government employees, along with a full breakdown of the existing site and its connected systems. These insights informed a unified information architecture that connected tenders, procurement tools, and content into a single, scalable framework.\n\nFrom there, we designed a dynamic homepage that surfaces key actions and adapts to user needs. The tender flow was re-imagined with clearer timelines, improved filtering, and a structured card layout. An AI-powered guidance widget was added to help users ask questions in plain language and navigate more confidently across the platform. Process pages were redesigned with step-by-step content to ensure users always know where they are and what comes next.',
    deliverables: [
      {
        title: 'New Information Architecture',
        description: 'A unified structure that connects tenders, systems, procurement processes, publications, and the personal area. Impact: Clear, predictable navigation across the entire ecosystem.'
      },
      {
        title: 'Dynamic Homepage',
        description: 'Shifted from static content to a functional dashboard with AI assistant, personalized modules, and quick access to tenders, tasks, and systems. Impact: Faster task completion and reduced cognitive load.'
      },
      {
        title: 'Tender Experience Redesign',
        description: 'Intuitive status timeline, clear separation between tenders and informational content, and improved filtering and browsing. Impact: Suppliers can quickly understand timelines and relevance.'
      },
      {
        title: 'Personal Area',
        description: 'Centralizes saved tenders, notifications, and actions in progress. Impact: A continuous, repeat-use experience for frequent users.'
      },
      {
        title: 'Guided Content Pages',
        description: 'Step-by-step procurement processes with consistent patterns and expandable content. Impact: Fewer mistakes and less reliance on external guidance.'
      }
    ],
    tools: ['User Research', 'Information Architecture', 'Wireframing', 'Prototyping', 'Usability Testing']
  },
  {
    id: 'kibu-app',
    title: 'KIBU',
    client: 'Kibbutzim College',
    role: ['UI/UX Designer', 'UX Researcher'],
    description: 'The Faculty of Arts at Kibbutzim College, a well known institution for art and design education, identified a need for a comprehensive digital platform to enhance the learning experience of students and streamline faculty workflows. The project aimed to develop an application that would serve as a central hub for course management, portfolio creation, and collaboration.',
    challenges: [
      '78% of students expressed interest in a centralized platform for portfolio creation',
      '92% of faculty members desired better tools for providing feedback on digital projects',
      '85% of students wanted to improve their digital skills beyond their core curriculum',
      'Strong demand for a virtual gallery to showcase ongoing work'
    ],
    process: 'We developed a comprehensive information architecture to support the various user needs. Through user interviews and research, we identified key pain points and opportunities to create a platform that serves both students and faculty effectively.',
    deliverables: [
      {
        title: 'Portfolio Management System',
        description: 'A centralized platform for students to create, manage, and showcase their design portfolios.'
      },
      {
        title: 'Feedback Tools',
        description: 'Enhanced tools for faculty to provide structured feedback on digital projects.'
      },
      {
        title: 'Virtual Gallery',
        description: 'A digital space for showcasing ongoing student work and collaborations.'
      },
      {
        title: 'Information Architecture',
        description: 'A comprehensive IA to support various user needs and workflows.'
      }
    ],
    tools: ['Adobe Suite', 'User Interview', 'Research', 'Prototyping', 'Figma']
  },
  {
    id: 'small-business-funding',
    title: 'Small Business Funding Portal',
    client: 'Ministry of Economy and Industry',
    role: [
      'UX Lead – Responsible for user flow design',
      'UX research & pain-point analysis',
      'Information hierarchy & step-by-step funnel',
      'Wireframes & prototypes',
      'Aligning cross-government requirements',
      'Preparing UI handoff and validating the flows'
    ],
    description: 'The Small Business Agency (part of the Ministry of Economy) set out to build a central digital financing portal that enables small businesses to discover relevant loan programs, compare options, and submit inquiries — all in one place. Previously, business owners had to navigate scattered websites, complex eligibility criteria, and inconsistent forms.\n\nThe goal: to create a clear, guided, and user-friendly funding journey for small business owners, including those with limited digital proficiency.',
    challenges: [
      'Scattered information across multiple government websites',
      'Complex eligibility criteria difficult to understand',
      'Inconsistent forms and processes',
      'Users with limited digital proficiency'
    ],
    process: 'We designed a guided 4-step funnel, transforming a complicated government process into a streamlined digital journey.',
    deliverables: [
      {
        title: 'First-Time Homepage',
        description: 'A calm, friendly introduction with minimal cognitive load. Users immediately understand the 4 stages and what they will receive at the end.'
      },
      {
        title: 'Business & Loan Definition',
        description: 'A conversational multi-step form for defining business type, stage & revenues, purpose of the loan, desired amount, and collateral/guarantees using progressive disclosure.'
      },
      {
        title: 'Comparison Page',
        description: 'A clean, card-based results page showing eligibility match, main loan parameters, pros & cons, and required documents. Allows business owners to compare programs at a glance.'
      },
      {
        title: 'Submit Details',
        description: 'A minimal, non-intrusive lead form that appears only after the user sees their options. This boosts trust and conversion.'
      }
    ],
    tools: ['User Research', 'Pain-point Analysis', 'Wireframing', 'Prototyping', 'Cross-government Alignment']
  },
  {
    id: 'lost-souls-wing',
    title: 'Adventure at the Lost Souls Wing',
    client: 'The Israel Museum, Jerusalem',
    role: ['UI/UX Designer', 'UX Researcher', 'Storyline Development'],
    description: 'The "Lost Souls Wing" is an interactive game developed in collaboration with the Archaeology Department of the Israel Museum. This project was created as part of a Master\'s degree in Digital Game Design and Development at Shenkar College. The game enhances the visitor experience in the museum\'s Archaeology Wing by adding a mysterious, challenging, and entertaining narrative layer. Designed for all ages, it can be played individually or in groups.',
    challenges: [
      'Balancing game engagement with museum educational goals',
      'Designing for all ages and group play',
      'Encouraging focus on artifacts rather than phone screens',
      'Creating emotional connections between players and historical objects'
    ],
    process: 'The game is intended to accompany, not replace, the museum visit experience. It aims to highlight key artifacts while encouraging players to focus on the museum\'s objects, not their phone screens. By incorporating narrative elements that connect the items to their natural historical context, the game fosters an emotional bond between the players and the artifacts. In each room, curators can choose three highlighted objects that the players must discover. These discoveries will encourage visitors to engage with the other exhibits in the room, potentially sparking curiosity and prompting further exploration.\n\nThe design is heavily inspired by the real museum environment, particularly the Archaeology Wing, seamlessly blending the physical space with the digital experience. It also draws from popular games and movies that combine historical exploration with supernatural elements, enhancing user engagement while preserving the educational focus of the museum visit. Key inspirations include Ghostbusters, Night at the Museum, and Goosebumps book covers.',
    deliverables: [
      {
        title: 'Interactive Game Design',
        description: 'A narrative-driven exploration game that enhances the museum visit experience.'
      },
      {
        title: 'Design Principles',
        description: 'Guidelines ensuring the game complements rather than distracts from the museum experience.'
      },
      {
        title: 'Prototype',
        description: 'A fully designed prototype blending physical and digital experiences.'
      },
      {
        title: 'Detailed Visual Design',
        description: 'Immersive visuals inspired by the Archaeology Wing and supernatural adventure themes.'
      }
    ],
    tools: ['Figma', 'Adobe Suite', 'User Interview', 'Research', 'Prototyping']
  },
  {
    id: 'viva-agriculture',
    title: 'Viva Agriculture Ltd.',
    client: 'Viva Agriculture Ltd.',
    role: 'Brand Designer',
    description: 'I developed a comprehensive branding strategy for Viva Agriculture Ltd., an international export company specializing in the distribution of fresh herbs worldwide. The project included designing a cohesive visual identity that reflects the company\'s commitment to freshness and global reach. From product packaging and exhibition booths to catalogs and labels, the design emphasized natural elements and clarity, aligning with the agricultural focus. Each branding element was crafted to enhance Viva\'s market presence and support their international expansion.',
    deliverables: [
      {
        title: 'Visual Identity',
        description: 'A cohesive brand identity reflecting freshness and global reach.'
      },
      {
        title: 'Product Packaging',
        description: 'Packaging design emphasizing natural elements and clarity.'
      },
      {
        title: 'Exhibition Booth Design',
        description: 'Trade show booth design for international market presence.'
      },
      {
        title: 'Catalogs & Labels',
        description: 'Marketing materials aligned with the agricultural focus.'
      }
    ],
    tools: ['Adobe Suite', 'Brand Strategy', 'Packaging Design', 'Print Design']
  },
  {
    id: 'installation-guides',
    title: 'Technical Installation Guides',
    client: 'Augury',
    role: 'Visual & Learning Designer',
    description: 'For Augury, I designed clear, visual, and instruction-focused manuals for hardware installation and onboarding. The goal was to turn complex operational steps into simple, intuitive guidance that technicians could follow with confidence in the field.\n\nThe result is a set of professional, user-centered manuals that reduce errors, speed up deployment, and support technicians through a visual-first, frictionless learning experience.',
    deliverables: [
      {
        title: 'Installation Manuals',
        description: 'Clear, visual manuals for hardware installation that technicians can follow with confidence.'
      },
      {
        title: 'Onboarding Materials',
        description: 'Step-by-step guidance for new technician training.'
      },
      {
        title: 'Visual-First Design',
        description: 'Instruction-focused layouts that reduce errors and speed up deployment.'
      }
    ],
    tools: ['Adobe Suite', 'Technical Writing', 'Visual Design', 'Learning Design']
  },
  {
    id: 'art-gallery-branding',
    title: 'Art Gallery Branding',
    client: 'Minshar Art Gallery',
    role: 'Graphic Designer',
    description: 'I created a series of invitations for multiple exhibitions at Minshar Art Gallery, designed to fit the gallery\'s brand while giving each exhibition its own unique visual identity. The invitations were crafted for both print and digital formats, ensuring cohesive branding across platforms and enhancing audience engagement.',
    deliverables: [
      {
        title: 'Exhibition Invitations',
        description: 'A series of invitations for multiple exhibitions, each with unique visual identity.'
      },
      {
        title: 'Print Materials',
        description: 'Physical invitations maintaining brand consistency.'
      },
      {
        title: 'Digital Assets',
        description: 'Digital format invitations for online distribution and social media.'
      }
    ],
    tools: ['Adobe Suite', 'Print Design', 'Digital Design', 'Brand Guidelines']
  },
  {
    id: 'cocktails-dreams',
    title: 'Cocktails and Dreams',
    client: undefined,
    role: ['Digital Illustrator', 'Experience Designer'],
    description: 'This app allows visitors to reenact the 80s classic "Cocktails and Dreams", turning it into a kind of visual karaoke. The end result is a remake of the entire movie with the participants as the movie stars, living the American dream.',
    deliverables: [
      {
        title: 'Interactive Experience',
        description: 'A visual karaoke app allowing visitors to reenact the 80s classic.'
      },
      {
        title: 'Digital Illustrations',
        description: 'Custom illustrations bringing the movie scenes to life.'
      },
      {
        title: 'Movie Remake System',
        description: 'A system for creating personalized movie remakes with participants as stars.'
      }
    ],
    tools: ['Digital Illustration', 'Experience Design', 'App Design']
  },
  {
    id: 'digital-illustrations',
    title: 'Digital Illustrations',
    client: undefined,
    role: 'Digital Illustrator',
    description: 'An assortment of digital illustration works showcasing character designs and concept art.',
    deliverables: [
      {
        title: 'Character Designs',
        description: 'Original character illustrations and concepts.'
      },
      {
        title: 'Concept Art',
        description: 'Visual explorations and artistic concepts.'
      }
    ],
    tools: ['Digital Illustration', 'Adobe Suite', 'Procreate']
  },
  {
    id: 'mammoth-o-matic',
    title: 'Mammoth-O-Matic',
    client: undefined,
    role: ['Interactive Artist', 'AI Developer'],
    description: 'An interactive sculpture of a mammoth head. In response to visitors, the head keeps making crude and sarcastic comments.\n\nThe remains of a prehistoric elephant were actually discovered during excavations conducted in the city of Holon (1964-65). Early human inhabitants of the region approximately 120,000 years ago hunted and consumed mammoths, which are the source of the mammoth bitterness in this project.',
    deliverables: [
      {
        title: 'Interactive Sculpture',
        description: 'A mammoth head sculpture that responds to visitors with AI-generated comments.'
      },
      {
        title: 'AI Response System',
        description: 'Sarcastic and crude commentary system reflecting prehistoric resentment.'
      }
    ],
    tools: ['AI', 'Sculpture', 'Interactive Design', 'Arduino']
  },
  {
    id: 'exceeding-entirety',
    title: 'Exceeding the Entirety',
    client: undefined,
    role: 'Code Artist',
    description: 'Live coding artwork featured in Resen, an online art magazine. A piece that explores the boundaries between code and visual expression.',
    externalLink: 'https://oulipoh.com/resen/exceeding/?en',
    deliverables: [
      {
        title: 'Live Coding Artwork',
        description: 'An interactive code-based artwork exploring the intersection of programming and visual art.'
      }
    ],
    tools: ['Live Coding', 'Generative Art', 'JavaScript']
  }
];

// Helper function to get detailed data by project ID
export const getProjectDetailedData = (id: string): ProjectDetailedData | undefined => {
  return PROJECTS_DETAILED.find(project => project.id === id);
};
