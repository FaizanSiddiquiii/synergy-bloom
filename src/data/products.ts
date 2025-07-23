import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Digital Marketing Masterclass',
    description: 'Complete digital marketing course covering SEO, social media, PPC, and content marketing strategies.',
    price: 299,
    image: 'src/assets/marketing-course.jpg',
    category: 'Course',
    features: [
      '20+ hours of video content',
      'Downloadable resources',
      'Certificate of completion',
      'Lifetime access',
      'Email support'
    ],
    downloadLink: 'https://example.com/download/marketing-course',
    fileSize: '2.5 GB',
    format: 'MP4 + PDF',
    compatibility: ['Windows', 'Mac', 'Mobile']
  },
  {
    id: '2',
    name: 'Business Strategy Toolkit',
    description: 'Comprehensive toolkit with templates, frameworks, and guides for strategic business planning.',
    price: 149,
    image: 'src/assets/business-toolkit.jpg',
    category: 'Toolkit',
    features: [
      '50+ business templates',
      'Strategy frameworks',
      'Planning worksheets',
      'Case studies',
      'Implementation guide'
    ],
    downloadLink: 'https://example.com/download/business-toolkit',
    fileSize: '85 MB',
    format: 'PDF + Excel',
    compatibility: ['Windows', 'Mac', 'Mobile']
  },
  {
    id: '3',
    name: 'E-commerce Setup Guide',
    description: 'Step-by-step guide to setting up and scaling your online store from zero to profit.',
    price: 199,
    image: 'src/assets/ecommerce-guide.jpg',
    category: 'Guide',
    features: [
      'Complete setup tutorial',
      'Platform comparisons',
      'Marketing strategies',
      'Scaling techniques',
      'Legal considerations'
    ],
    downloadLink: 'https://example.com/download/ecommerce-guide',
    fileSize: '120 MB',
    format: 'PDF + Video',
    compatibility: ['All Devices']
  },
  {
    id: '4',
    name: 'Social Media Manager Kit',
    description: 'Everything you need to manage social media accounts professionally with templates and tools.',
    price: 89,
    image: 'src/assets/social-media-kit.jpg',
    category: 'Toolkit',
    features: [
      'Content calendar templates',
      'Post design templates',
      'Analytics tracking sheets',
      'Engagement strategies',
      'Platform-specific guides'
    ],
    downloadLink: 'https://example.com/download/social-media-kit',
    fileSize: '250 MB',
    format: 'PSD + PDF + Excel',
    compatibility: ['Windows', 'Mac']
  },
  {
    id: '5',
    name: 'SEO Optimization Course',
    description: 'Advanced SEO techniques to rank higher on Google and drive organic traffic to your website.',
    price: 249,
    image: 'src/assets/seo-course.jpg',
    category: 'Course',
    features: [
      '15 hours of tutorials',
      'Keyword research tools',
      'On-page optimization',
      'Link building strategies',
      'Technical SEO guide'
    ],
    downloadLink: 'https://example.com/download/seo-course',
    fileSize: '1.8 GB',
    format: 'MP4 + PDF',
    compatibility: ['All Devices']
  },
  {
    id: '6',
    name: 'Content Creation Bundle',
    description: 'Professional content creation assets including graphics, templates, and copywriting guides.',
    price: 179,
    image: 'src/assets/content-bundle.jpg',
    category: 'Bundle',
    features: [
      '500+ graphic templates',
      'Copywriting formulas',
      'Video editing presets',
      'Brand identity kit',
      'Content planning tools'
    ],
    downloadLink: 'https://example.com/download/content-bundle',
    fileSize: '3.2 GB',
    format: 'PSD + AI + PDF',
    compatibility: ['Windows', 'Mac']
  }
];