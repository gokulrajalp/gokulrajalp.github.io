export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Gentrobyte AI Agent Platform',
    description: 'Advanced AI agent development platform with multi-agent orchestration',
    longDescription: 'A comprehensive platform for building, deploying, and managing AI agents. Features include natural language processing, multi-agent communication, and intelligent task automation. Built with cutting-edge AI technologies to enable businesses to leverage AI agents for complex workflows.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['AI/ML', 'Python', 'FastAPI', 'React', 'Docker'],
    link: 'https://gentrobyte.com',
    category: 'AI Agents'
  },
  {
    id: 2,
    title: 'Smart Invoice Automation System',
    description: 'AI-powered invoice processing and automation solution',
    longDescription: 'An intelligent invoice processing system that uses OCR and machine learning to extract, validate, and process invoices automatically. Reduces manual data entry by 95% and processes invoices in real-time with high accuracy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['AI/ML', 'OCR', 'Python', 'Django', 'PostgreSQL'],
    link: '#',
    category: 'Software Development'
  },
  {
    id: 3,
    title: 'NanoTaxi Cloud Backend',
    description: 'Scalable cloud backend for ride-sharing platform',
    longDescription: 'A robust, scalable backend system built with Django and deployed on Google Cloud Platform. Handles millions of requests per day with real-time location tracking, payment processing, and intelligent route optimization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Django', 'GCP', 'PostgreSQL', 'Redis', 'REST API'],
    github: 'https://github.com/gokulrajalp',
    category: 'Software Development'
  },
  {
    id: 4,
    title: 'Digital Marketing Analytics Dashboard',
    description: 'Real-time analytics and insights for digital marketing campaigns',
    longDescription: 'A comprehensive analytics dashboard that aggregates data from multiple marketing channels. Provides real-time insights, campaign performance metrics, and predictive analytics to optimize marketing ROI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'API Integration'],
    link: '#',
    category: 'Digital Marketing'
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: 'AI Agent Development',
    description: 'Build intelligent AI agents that automate complex workflows and enhance business operations',
    icon: '🤖',
    features: [
      'Custom AI agent architecture',
      'Multi-agent orchestration',
      'Natural language processing',
      'Intelligent task automation',
      'Integration with existing systems',
      'Continuous learning & optimization'
    ]
  },
  {
    id: 2,
    title: 'Software Development Services',
    description: 'End-to-end software development from concept to deployment - Web Apps, Mobile Apps, Enterprise Apps, ERP, CRM, LMS, HRM & Business Automation Platforms',
    icon: '💻',
    features: [
      'Web Application Development',
      'Mobile App Development (iOS & Android)',
      'Enterprise Application Development',
      'Business Automation Platforms (ERP, CRM, LMS, HRM)',
      'Cloud-native applications',
      'Microservices architecture',
      'API development & integration',
      'DevOps & CI/CD',
      'Scalable system design'
    ]
  },
  {
    id: 3,
    title: 'Digital Marketing & SEO Services',
    description: 'Global SEO optimization for Software Projects, AI Agents, and Digital Marketing - Data-driven strategies to accelerate growth worldwide',
    icon: '📈',
    features: [
      'SEO for Software Projects globally',
      'SEO for AI Agent platforms',
      'SEO for Digital Marketing services',
      'International SEO optimization',
      'Social media marketing',
      'Content strategy & optimization',
      'Analytics & reporting',
      'Campaign management',
      'Performance optimization',
      'Keyword research & optimization'
    ]
  }
];

export const milestones: Milestone[] = [
  {
    year: '2020',
    title: 'Journey Begins',
    description: 'Started as a passionate developer with a vision to transform businesses through technology',
    icon: '🚀'
  },
  {
    year: '2021',
    title: 'First Major Project',
    description: 'Delivered first enterprise-level software solution, establishing credibility in the market',
    icon: '⭐'
  },
  {
    year: '2022',
    title: 'Gentrobyte AI Labs Founded',
    description: 'Established Gentrobyte AI Labs to focus on AI-driven solutions and innovation',
    icon: '🏢'
  },
  {
    year: '2023',
    title: 'AI Agent Platform Launch',
    description: 'Successfully launched AI Agent Platform, serving multiple enterprise clients',
    icon: '🤖'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanding services globally with a vision to put India on top of global tech',
    icon: '🌍'
  }
];

export const socialLinks = {
  linkedin: 'https://in.linkedin.com/in/gokulrajalp',
  instagram: 'https://www.instagram.com/gokulrajalp/?hl=en',
  github: 'https://github.com/gokulrajalp',
  twitter: 'https://twitter.com/gokulrajalp?lang=bg',
  whatsapp: 'https://wa.me/9659245977'
};

export const contactInfo = {
  email: 'gokulrajalp@gentrobyte.com',
  whatsapp: '9659245977',
  whatsappLink: 'https://wa.me/9659245977'
};

