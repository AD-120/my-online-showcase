import { Project, Category } from '@/types/portfolio';

export const CATEGORIES: Category[] = ['UX/UI', 'LXD', 'Graphic Design', 'Digital Art', 'AI'];

export const PROJECTS: Project[] = [
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
      process: 'Started with user research, including interviews with suppliers and government employees. Designed a dynamic homepage that surfaces key actions and adapts to user needs.',
      results: 'New unified Information Architecture. Dynamic homepage with AI assistant. Redesigned tender experience with intuitive status timelines.',
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
      challenge: 'Students lacked a centralized platform for feedback and portfolio management, leading to fragmented learning artifacts.',
      process: 'Developed user personas for students and faculty. Created a comprehensive information architecture to support various user needs from project submission to peer review.',
      results: 'A clean, visually appealing interface focusing on accessibility and consistency. Simplified the grading process and enhanced portfolio visibility.',
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
      challenge: 'Museum exhibits can sometimes feel static or overwhelming, especially for younger audiences.',
      process: 'Designed treasure hunt mechanics and shape-matching games linked to specific artifacts. Integrated narrative elements to connect items to their historical contexts.',
      results: 'Increased engagement in the Archaeology Wing. Visitors reported a more immersive and educational experience through the lens of a "Lost Soul".',
      galleryImages: [
        'https://images.unsplash.com/photo-1554941068-a252680d25d9?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'augury-guides',
    title: 'Installation Guides',
    subtitle: 'Visual & Learning Design',
    client: 'Augury',
    description: 'Step-by-step industrial hardware setup instructions transformed into technician-friendly, visual learning experiences.',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    categories: ['LXD', 'Graphic Design'],
    highlightColor: 'blue',
    tags: ['Instructional', 'Tech', 'Visual'],
    details: {
      challenge: 'Technical installation can be prone to errors if manuals are overly dense or text-heavy.',
      process: 'Designed clear, visual, and instruction-focused manuals for hardware. Simplified complex operational steps into intuitive guidance.',
      results: 'Reduced deployment errors and supported technicians through a visual-first, frictionless learning experience.',
      galleryImages: [
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
      ]
    }
  },
  {
    id: 'cocktails-dreams',
    title: 'Cocktails and Dreams',
    subtitle: 'Mobile Game',
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
    description: 'Branding for a contemporary art gallery, including posters, invitations, and digital identity systems.',
    thumbnail: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800',
    categories: ['Graphic Design'],
    highlightColor: 'yellow',
    tags: ['Branding', 'Print', 'Typography']
  }
];
