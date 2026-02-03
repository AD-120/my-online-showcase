import { Project, Category } from '@/types/portfolio';

export const CATEGORIES: Category[] = ['UX/UI', 'LXD', 'Graphic Design', 'Digital Art', 'AI'];

export const PROJECTS: Project[] = [
  {
    id: 'gov-procurement',
    title: 'Government Procurement Platform',
    subtitle: 'Website & UX Redesign',
    client: 'Accountant General (GPA)',
    description: 'A unified information architecture connecting tenders, systems, procurement processes, and publications into a single, scalable framework.',
    thumbnail: '/projects/gov-procurement.jpg',
    categories: ['UX/UI'],
    highlightColor: 'pink',
    tags: ['UX', 'GovTech', 'IA'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'small-business-funding',
    title: 'Small Business Funding Portal',
    subtitle: 'Website & UX Redesign',
    client: 'Ministry of Economy and Industry',
    description: 'A central digital financing portal that enables small businesses to discover funding programs, compare options, and submit inquiries — all in one place.',
    thumbnail: '/projects/small-business-funding.jpg',
    categories: ['UX/UI'],
    highlightColor: 'blue',
    tags: ['Web', 'UX', 'Finance'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'kibu-app',
    title: 'KIBU App',
    subtitle: 'Educational App Design',
    client: 'Kibbutzim College',
    description: 'A portfolio management app for design students to track their progress, collaborate with peers, and showcase ongoing work.',
    thumbnail: '/projects/kibu-app.jpg',
    categories: ['LXD', 'UX/UI'],
    highlightColor: 'yellow',
    tags: ['EdTech', 'Mobile', 'Education'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'mammoth-o-matic',
    title: 'Mammoth-O-Matic',
    subtitle: 'Interactive Sculpture',
    description: 'An interactive sculpture of a mammoth head that responds to visitors with crude and sarcastic comments, reflecting the bitterness of prehistoric elephants hunted by early humans.',
    thumbnail: '/projects/mammoth-o-matic.jpg',
    categories: ['Digital Art', 'AI'],
    highlightColor: 'yellow',
    tags: ['AI', 'Interactive', 'Sculpture'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'installation-guides',
    title: 'Installation Guides',
    subtitle: 'Visual & Learning Design',
    client: 'Augury',
    description: 'Step-by-step industrial hardware setup instructions transformed into technician-friendly, visual learning experiences.',
    thumbnail: '/projects/installation-guides.jpg',
    categories: ['LXD', 'Graphic Design'],
    highlightColor: 'blue',
    tags: ['Technical', 'Visual Learning', 'Hardware'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'lost-souls-wing',
    title: 'Adventure at the Lost Souls Wing',
    subtitle: 'Mobile Game & Museum Experience',
    client: 'The Israel Museum, Jerusalem',
    description: "An interactive game that enhances the visitor experience in the museum's Archaeology Wing through narrative-driven exploration.",
    thumbnail: '/projects/lost-souls-wing.jpg',
    categories: ['LXD', 'UX/UI'],
    highlightColor: 'pink',
    tags: ['Gamification', 'Museum', 'Mobile'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'art-gallery-branding',
    title: 'Art Gallery Branding',
    subtitle: 'Print & Digital Marketing',
    client: 'Minshar Art Gallery',
    description: 'Branding for a contemporary art gallery, including posters, invitations, and digital identity systems that fit the gallery\'s brand while giving each exhibition its unique character.',
    thumbnail: '/projects/art-gallery-branding.jpg',
    categories: ['Graphic Design'],
    highlightColor: 'yellow',
    tags: ['Branding', 'Print', 'Art'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'cocktails-dreams',
    title: 'Cocktails and Dreams',
    subtitle: 'Digital Illustrations & Mobile Game',
    description: 'An interactive experience allowing visitors to reenact the 80s classic "Cocktails and Dreams", turning it into a visual karaoke.',
    thumbnail: '/projects/cocktails-dreams.jpg',
    categories: ['Digital Art', 'UX/UI', 'LXD'],
    highlightColor: 'pink',
    tags: ['80s', 'Video', 'Experience'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'viva-agriculture',
    title: 'Marketing Material',
    subtitle: 'Branding & Marketing',
    client: 'Viva Agriculture Ltd.',
    description: 'Comprehensive branding strategy for an international export company specializing in the distribution of fresh herbs worldwide.',
    thumbnail: '/projects/viva-agriculture.jpg',
    categories: ['Graphic Design'],
    highlightColor: 'blue',
    tags: ['Branding', 'Export', 'Print'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'digital-illustrations',
    title: 'Digital Illustrations',
    subtitle: 'Character & Concept Art',
    description: 'A collection of digital illustrations featuring character designs and concept art.',
    thumbnail: '/projects/digital-illustrations.jpg',
    categories: ['Digital Art'],
    highlightColor: 'pink',
    tags: ['Illustration', 'Character Design', 'Avner'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'exceeding-entirety',
    title: 'Exceeding the Entirety',
    subtitle: 'Code Art',
    description: 'A live coding artwork featured in Resen, an online art magazine. A piece that explores the boundaries between code and visual expression.',
    thumbnail: '/projects/exceeding-entirety.jpg',
    categories: ['Digital Art', 'AI'],
    highlightColor: 'blue',
    tags: ['Generative Art', 'AI', 'Concept'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
  {
    id: 'dragon-illusion',
    title: 'The Dragon Illusion',
    subtitle: 'Digital Art',
    description: 'A YouTube DIY trick transformed into a self-portrait, blending optical illusion with personal expression.',
    thumbnail: '/projects/dragon-illusion.jpg',
    categories: ['Digital Art'],
    highlightColor: 'yellow',
    tags: ['Illusion', 'Visual Art'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  }
];
