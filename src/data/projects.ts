import { Project, Category } from '@/types/portfolio';

export const CATEGORIES: Category[] = ['UX/UI', 'LXD', 'Graphic Design', 'Digital Art', 'AI'];

export const PROJECTS: Project[] = [
  {
    id: 'gov-procurement',
    title: 'Government Procurement Platform',
    subtitle: 'Website & UX Redesign',
    client: 'Accountant General (GPA)',
    description: 'A unified information architecture connecting tenders, systems, procurement processes, and publications into a single, scalable framework.',
    thumbnail: '/projects/rechesh_16.png',
    fullWidthOverview: true,
    categories: ['UX/UI'],
    highlightColor: 'pink',
    tags: ['UX', 'GovTech', 'IA'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/rechesh_12.png',
        '/projects/rechesh_3.png',
        '/projects/rechesh_4.png',
        '/projects/rechesh_5.png',
        '/projects/rechesh_7.png',
        '/projects/rechesh_8.png',
        '/projects/rechesh_10.png',
        '/projects/rechesh_11.png'
      ]
    }
  },
  {
    id: 'steps-to-hebrew',
    title: 'Steps to Hebrew',
    subtitle: 'Gamified Language Learning App',
    client: 'Steps to Hebrew',
    description: 'An interactive platform for English speakers learning Hebrew, transforming education into a dynamic, gamified experience with AI-driven conversations.',
    thumbnail: '/projects/steps_1.png',
    stackedOverview: true,
    categories: ['LXD', 'UX/UI', 'Graphic Design'],
    highlightColor: 'blue',
    tags: ['EdTech', 'Gamification', 'AI'],
    details: {
      challenge: 'Transforming an existing educational product into a dynamic, engaging experience.',
      process: 'Redesigning user flow, brand character, gamification layer, and AI conversation interface.',
      results: 'A comprehensive gamified learning platform with AI-powered practice.',
      galleryImages: [
        '/projects/steps_cards.png',
        '/projects/steps_18.png',
        '/projects/steps_12.png',
        '/projects/steps_6.png',
        '/projects/steps_14.png',
        '/projects/steps_16.png'
      ]
    }
  },
  {
    id: 'kibu-app',
    title: 'KIBU App',
    subtitle: 'Educational App Design',
    client: 'Kibbutzim College',
    description: 'A portfolio management app for design students to track their progress, collaborate with peers, and showcase ongoing work.',
    thumbnail: '/projects/kibu_hero.png',
    categories: ['LXD', 'UX/UI'],
    highlightColor: 'yellow',
    tags: ['EdTech', 'Mobile', 'Education'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/kibu_1.png',
        '/projects/kibu_2.png',
        '/projects/kibu_3.png',
        '/projects/kibu_4.png',
        '/projects/kibu_5.png'
      ]
    }
  },
  {
    id: 'small-business-funding',
    title: 'Small Business Funding Portal',
    subtitle: 'Website & UX Redesign',
    client: 'Ministry of Economy and Industry',
    description: 'A central digital financing portal that enables small businesses to discover funding programs, compare options, and submit inquiries, all in one place.',
    thumbnail: '/projects/portal_19.png',
    categories: ['UX/UI'],
    highlightColor: 'blue',
    tags: ['Web', 'UX', 'Finance'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/portal_1.png',
        '/projects/portal_2.png',
        '/projects/portal_3.png',
        '/projects/portal_4.png',
        '/projects/portal_5.png',
        '/projects/portal_6.png',
        '/projects/portal_7.png',
        '/projects/portal_8.png',
        '/projects/portal_9.png',
        '/projects/portal_10.png',
        '/projects/portal_11.png',
        '/projects/portal_12.png',
        '/projects/portal_13.png',
        '/projects/portal_14.png',
        '/projects/portal_15.png',
        '/projects/portal_16.png',
        '/projects/portal_17.png',
        '/projects/portal_18.png'
      ]
    }
  },
  {
    id: 'mammoth-o-matic',
    title: 'Mammoth-O-Matic',
    subtitle: 'Interactive Sculpture',
    description: 'An interactive sculpture of a mammoth head that responds to visitors with crude and sarcastic comments, reflecting the bitterness of prehistoric elephants hunted by early humans.',
    thumbnail: '/projects/mamoth_1.jpg',
    thumbnailFocus: 'center 15%',
    categories: ['Digital Art', 'AI'],
    highlightColor: 'yellow',
    tags: ['AI', 'Interactive', 'Sculpture'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/mamoth_2.jpg',
        '/projects/mamoth_3.jpg'
      ]
    }
  },
  {
    id: 'installation-guides',
    title: 'Installation Guides',
    subtitle: 'Visual & Learning Design',
    client: 'Augury',
    description: 'Step-by-step industrial hardware setup instructions transformed into technician-friendly, visual learning experiences.',
    thumbnail: '/projects/instructional7.png',
    categories: ['LXD', 'Graphic Design'],
    highlightColor: 'blue',
    tags: ['Visual Learning', 'Graphic Design'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/instructional1.png',
        '/projects/instructional2.png',
        '/projects/instructional3.png',
        '/projects/instructional4.png',
        '/projects/instructional5.png',
        '/projects/instructional7.png',
        '/projects/instructional9.png'
      ]
    }
  },
  {
    id: 'lost-souls-wing',
    title: 'Adventure at the Lost Souls Wing',
    subtitle: 'Mobile Game & Museum Experience',
    client: 'The Israel Museum, Jerusalem',
    description: "An interactive game that enhances the visitor experience in the museum's Archaeology Wing through narrative-driven exploration.",
    thumbnail: '/projects/souls_1.jpg',
    categories: ['LXD', 'UX/UI'],
    highlightColor: 'pink',
    tags: ['Gamification', 'Museum', 'Mobile'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/souls_2.jpg',
        '/projects/souls_3.jpg',
        '/projects/souls_4.jpg',
        '/projects/souls_5.jpg',
        '/projects/souls_6.jpg',
        '/projects/souls_7.jpg',
        '/projects/souls_8.jpg',
        '/projects/souls_9.jpg',
        '/projects/souls_10.jpg',
        '/projects/souls_11.jpg',
        '/projects/souls_12.jpg',
        '/projects/souls_13.jpg',
        '/projects/souls_14.jpg',
        '/projects/souls_15.jpg',
        '/projects/souls_16.jpg',
        '/projects/souls_17.jpg',
        '/projects/souls_18.jpg',
        '/projects/souls_19.jpg',
        '/projects/souls_20.jpg',
        '/projects/souls_21.jpg',
        '/projects/souls_22.jpg',
        '/projects/souls_23.jpg',
        '/projects/souls_24.jpg',
        '/projects/souls_25.jpg',
        '/projects/souls_26.jpg',
        '/projects/souls_27.jpg',
        '/projects/souls_28.jpg',
        '/projects/souls_29.jpg',
        '/projects/souls_30.jpg',
        '/projects/souls_31.jpg',
        '/projects/souls_32.jpg'
      ]
    }
  },
  {
    id: 'art-gallery-branding',
    title: 'Art Gallery Branding',
    subtitle: 'Print & Digital Marketing',
    client: 'Minshar Art Gallery',
    description: 'Branding for a contemporary art gallery, including posters, invitations, and digital identity systems that fit the gallery\'s brand while giving each exhibition its unique character.',
    thumbnail: '/projects/invites_6.png',
    categories: ['Graphic Design'],
    highlightColor: 'yellow',
    tags: ['Branding', 'Print', 'Art'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/invites_1.jpg',
        '/projects/invites_2.jpg',
        '/projects/invites_3.jpg',
        '/projects/invites_4.jpg',
        '/projects/invites_5.jpg',
        '/projects/invites_6.png'
      ]
    }
  },
  {
    id: 'cocktails-dreams',
    title: 'Cocktails and Dreams',
    subtitle: 'Digital Illustrations & Mobile Game',
    description: 'An interactive experience allowing visitors to reenact the 80s classic "Cocktails and Dreams", turning it into a visual karaoke.',
    thumbnail: '/projects/cocktail_1.png',
    categories: ['Digital Art', 'UX/UI', 'LXD'],
    highlightColor: 'pink',
    tags: ['80s', 'Video', 'Experience'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/cocktail_2.png',
        '/projects/cocktail_3.jpg',
        '/projects/cocktail_3.png',
        '/projects/cocktail_6.png'
      ]
    }
  },
  {
    id: 'viva-agriculture',
    title: 'Marketing Material',
    subtitle: 'Branding & Marketing',
    client: 'Viva Agriculture Ltd.',
    description: 'Comprehensive branding strategy for an international export company specializing in the distribution of fresh herbs worldwide.',
    thumbnail: '/projects/viva1.jpg',
    categories: ['Graphic Design'],
    highlightColor: 'blue',
    tags: ['Branding', 'Print'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/viva2.jpg',
        '/projects/viva3.jpg',
        '/projects/viva4.jpg',
        '/projects/viva5.jpg'
      ]
    }
  },
  {
    id: 'digital-illustrations',
    title: 'Digital & Analog Illustrations',
    subtitle: 'Digital Art',
    description: 'A collection of digital illustrations, character designs, and concept art.',
    thumbnail: '/projects/shoot_him.jpg',
    categories: ['Digital Art'],
    highlightColor: 'pink',
    tags: ['Illustration', 'Visual Art'],
    uniformGallery: true,
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: [
        '/projects/digital art3.jpg',
        '/projects/3.png',
        '/projects/shoot_him.jpg',
        '/projects/digital drawings_6.jpg',
        '/projects/digital art1.gif',
        '/projects/1.png',
        '/projects/mermaid_3.gif',
        '/projects/digital drawings_1.jpg',
        '/projects/4.png',
        '/projects/digital art5.gif',
        '/projects/2.png',
        '/projects/digital drawings_7.jpg',
        '/projects/digital art2.jpg',
        '/projects/5.png',
        '/projects/digital drawings_5.jpg'
      ]
    }
  },
  {
    id: 'exceeding-entirety',
    title: 'Exceeding the Entirety',
    subtitle: 'Code Art',
    description: 'A live coding artwork featured in Resen, an online art magazine. A piece that explores the boundaries between code and visual expression.',
    thumbnail: '/projects/Entirety_1.png',
    categories: ['Digital Art', 'AI'],
    highlightColor: 'blue',
    tags: ['Generative Art', 'AI'],
    details: {
      challenge: 'Challenge details to be added.',
      process: 'Process details to be added.',
      results: 'Results details to be added.',
      galleryImages: []
    }
  },
];
