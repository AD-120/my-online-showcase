import { Project, Category } from '@/types/portfolio';

export const CATEGORIES: Category[] = ['UX/UI', 'LXD', 'Graphic Design', 'Digital Art', 'AI'];

export const PROJECTS: Project[] = [
  {
    id: 'small-business-funding',
    title: 'Small Business Funding Portal',
    subtitle: 'Website & UX Redesign',
    client: 'Ministry of Economy and Industry',
    description: 'A central digital financing portal that enables small businesses to discover funding programs, compare options, and submit inquiries — all in one place.',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    categories: ['UX/UI'],
    highlightColor: 'blue',
    tags: ['GovTech', 'UX Lead', 'Fintech'],
    details: {
      challenge: 'Previously, business owners had to navigate scattered websites, complex eligibility criteria, and inconsistent forms. The goal was to create a clear, guided, and user-friendly funding journey for small business owners, including those with limited digital proficiency.',
      process: 'Designed a guided 4-step funnel, transforming a complicated government process into a streamlined digital journey. Used progressive disclosure where only relevant fields appear. Created a clean, card-based comparison page showing eligibility match, loan parameters, pros & cons, and required documents.',
      results: 'A calm, friendly introduction with minimal cognitive load. Users immediately understand the 4 stages and what they will receive at the end. A minimal, non-intrusive lead form that appears only after the user sees their options, boosting trust and conversion.',
      galleryImages: [
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'gov-procurement',
    title: 'Government Procurement Platform',
    subtitle: 'Website & UX Redesign',
    client: 'Accountant General (GPA)',
    description: 'A unified information architecture connecting tenders, systems, procurement processes, and publications into a single, scalable framework.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    categories: ['UX/UI'],
    highlightColor: 'pink',
    tags: ['UX', 'IA', 'GovTech'],
    details: {
      challenge: 'Fragmented content across many unconnected platforms. Complex, regulation-heavy information and very different user types (suppliers, officers, employees).',
      process: 'Started with user research, including interviews with suppliers and government employees. Designed a dynamic framework that adapts to user needs. The tender flow always knows where users are and what they need.',
      results: 'New unified Information Architecture. Dynamic Homepage. Tender Experience Redesign. Personal Area for different user types.',
      galleryImages: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'kibu-app',
    title: 'KIBU',
    subtitle: 'Educational App Design',
    client: 'Kibbutzim College',
    description: 'A portfolio management app for design students to track their progress, collaborate with peers, and showcase ongoing work.',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    categories: ['UX/UI', 'LXD'],
    highlightColor: 'yellow',
    tags: ['EdTech', 'Product', 'Mobile'],
    details: {
      challenge: 'The Faculty of Arts at Kibbutzim College identified a need for a comprehensive digital platform to enhance the learning experience of students and streamline faculty operations. 78% of students expressed interest in a centralized platform for portfolio creation.',
      process: 'Conducted user research and developed user personas for students and faculty. Created a comprehensive information architecture to support various user needs from project submission to peer review. There was a strong demand for a virtual gallery to showcase ongoing work.',
      results: 'A clean, visually appealing interface focusing on accessibility and consistency. Simplified the grading process and enhanced portfolio visibility for students.',
      galleryImages: [
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'lost-souls-wing',
    title: 'Adventure at the Lost Souls Wing',
    subtitle: 'Mobile Game & Museum Experience',
    client: 'The Israel Museum, Jerusalem',
    description: "An interactive game that enhances the visitor experience in the museum's Archaeology Wing through narrative-driven exploration.",
    thumbnail: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
    categories: ['Digital Art', 'UX/UI'],
    highlightColor: 'pink',
    tags: ['Gaming', 'Interactive', 'Museum'],
    details: {
      challenge: 'Museum exhibits can sometimes feel static or overwhelming, especially for younger audiences. The goal was to add a mysterious, challenging and engaging experience that can be played individually or in groups.',
      process: 'Designed treasure hunt mechanics and shape-matching games linked to specific artifacts. Integrated narrative elements to connect items to their historical contexts. Part of a Master\'s degree in Digital Game Design.',
      results: 'Increased engagement in the Archaeology Wing. Visitors reported a more immersive and educational experience through the lens of a "Lost Soul".',
      galleryImages: [
        'https://images.unsplash.com/photo-1554941068-a252680d25d9?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'augury-guides',
    title: 'Technical Installation Guides',
    subtitle: 'Visual & Learning Design',
    client: 'Augury',
    description: 'Step-by-step industrial hardware setup instructions transformed into technician-friendly, visual learning experiences.',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    categories: ['LXD', 'Graphic Design'],
    highlightColor: 'blue',
    tags: ['Instructional', 'Tech', 'Visual'],
    details: {
      challenge: 'Technical installation can be prone to errors if manuals are overly dense or text-heavy. The goal was to turn complex operational steps into simple, intuitive guidance that technicians could follow with confidence in the field.',
      process: 'Designed clear, visual, and instruction-focused manuals for hardware including the Cordant Edge Gateway, Ranger Pro Endpoint, and Ranger Pro Gen6 Sensor. Simplified complex operational steps into intuitive guidance.',
      results: 'A set of professional, user-centered manuals that reduce errors, speed up deployment, and support technicians through a visual-first, frictionless learning experience.',
      galleryImages: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'mammoth-o-matic',
    title: 'Mammoth-O-Matic',
    subtitle: 'Interactive Sculpture',
    description: 'An interactive sculpture of a mammoth head that responds to visitors with crude and sarcastic comments, reflecting the bitterness of prehistoric elephants hunted by early humans.',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800',
    categories: ['Digital Art', 'AI'],
    highlightColor: 'yellow',
    tags: ['Interactive', 'AI', 'Installation'],
    details: {
      challenge: 'Create an engaging, humorous interactive experience that connects visitors to prehistoric history through an unexpected medium.',
      process: 'Designed an AI-driven system that generates sarcastic responses based on visitor interactions. The remains of a prehistoric elephant were inhabitants of the region approximately 120,000 years ago.',
      results: 'A memorable installation that entertains visitors while educating them about the relationship between early humans and mammoths.',
      galleryImages: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'cocktails-dreams',
    title: 'Cocktails and Dreams',
    subtitle: 'Digital Illustrations & Mobile Game',
    description: 'An interactive experience allowing visitors to reenact the 80s classic "Cocktails and Dreams", turning it into a visual karaoke.',
    thumbnail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    categories: ['Digital Art', 'AI'],
    highlightColor: 'pink',
    tags: ['Mobile', 'Video', 'Art']
  },
  {
    id: 'art-gallery-branding',
    title: 'Art Gallery Branding',
    subtitle: 'Print & Digital Marketing',
    client: 'Minshar Art Gallery',
    description: 'Branding for a contemporary art gallery, including posters, invitations, and digital identity systems that fit the gallery\'s brand while giving each exhibition its unique character.',
    thumbnail: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800',
    categories: ['Graphic Design'],
    highlightColor: 'yellow',
    tags: ['Branding', 'Print', 'Typography']
  },
  {
    id: 'viva-agriculture',
    title: 'Viva Agriculture Ltd.',
    subtitle: 'Branding & Marketing',
    client: 'Viva Agriculture Ltd.',
    description: 'Comprehensive branding strategy for an international export company specializing in the distribution of fresh herbs worldwide.',
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800',
    categories: ['Graphic Design'],
    highlightColor: 'blue',
    tags: ['Branding', 'Packaging', 'Export'],
    details: {
      challenge: 'Develop a brand identity that reflects the company\'s commitment to freshness and global reach for an international export company specializing in fresh herbs.',
      process: 'Created product packaging, exhibition materials, catalogs, and labels. The design aligns with the agricultural focus while maintaining a premium, international feel.',
      results: 'Each element enhances Viva\'s market presence and supports their international expansion efforts.',
      galleryImages: [
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'exceeding-entirety',
    title: 'Exceeding the Entirety',
    subtitle: 'Code Art',
    description: 'A live coding artwork featured in Resen, an online art magazine. A piece that explores the boundaries between code and visual expression.',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    categories: ['Digital Art', 'AI'],
    highlightColor: 'blue',
    tags: ['Code Art', 'Live Coding', 'Magazine']
  },
  {
    id: 'dragon-illusion',
    title: 'The Dragon Illusion',
    subtitle: 'Digital Art',
    description: 'A YouTube DIY trick transformed into a self-portrait, blending optical illusion with personal expression.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    categories: ['Digital Art'],
    highlightColor: 'pink',
    tags: ['Illusion', 'Self-Portrait', 'Art']
  }
];
