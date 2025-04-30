// src/data/serviceDetails.js
const serviceDetails = {
  'branding': {
    title: 'Branding',
    description: 'Transform your brand with powerful, visually stunning designs that make a lasting impact. We create brand identities that resonate with your audience and leave a lasting impression.',
    image: '/images/branding.jpg',
    pricing: [
      {
        tier: 'Basic',
        features: [
          'Logo Design',
          'Color Palette',
          'Typography Selection',
          '2 Revisions'
        ]
      },
      {
        tier: 'Standard',
        features: [
          'Everything in Basic',
          'Business Cards',
          'Letterhead Design',
          'Social Media Kit',
          'Unlimited Revisions'
        ]
      },
      {
        tier: 'Premium',
        features: [
          'Everything in Standard',
          'Complete Brand Guide',
          'Marketing Materials',
          'Brand Strategy Session',
          'Digital Asset Package'
        ]
      }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Create user-centric, engaging interfaces that boost customer retention and elevate user experiences. Our intuitive designs turn visitors into loyal users through thoughtful interactions and visual appeal.',
    image: '/images/uiux.jpg',
    pricing: [
      {
        tier: 'Essential',
        features: [
          'User Research',
          'Wireframing',
          'Basic UI Design',
          'Interactive Prototype'
        ]
      },
      {
        tier: 'Advanced',
        features: [
          'Everything in Essential',
          'User Personas',
          'Journey Mapping',
          'Usability Testing',
          'Design System'
        ]
      },
      {
        tier: 'Enterprise',
        features: [
          'Everything in Advanced',
          'Multi-platform Design',
          'Animation & Micro-interactions',
          'A/B Testing',
          'Implementation Support'
        ]
      }
    ]
  },
  'web-development': {
    title: 'Web Development',
    description: 'Develop high-performance websites with robust, scalable architectures. Our web development services optimize your online presence for speed, functionality, and success in today\'s digital landscape.',
    image: '/images/webdev.jpg',
    pricing: [
      {
        tier: 'Startup',
        features: [
          'Responsive Design',
          'CMS Integration',
          'SEO Fundamentals',
          'Contact Form',
          '3 Pages'
        ]
      },
      {
        tier: 'Business',
        features: [
          'Everything in Startup',
          'Custom Animations',
          'Blog Setup',
          'Social Media Integration',
          'Up to 10 Pages'
        ]
      },
      {
        tier: 'Enterprise',
        features: [
          'Everything in Business',
          'E-commerce Functionality',
          'Custom API Integration',
          'Performance Optimization',
          'Unlimited Pages'
        ]
      }
    ]
  },
  'e-commerce-applications': {
    title: 'eCommerce Applications',
    description: 'Build dynamic, conversion-driven online stores with seamless user experiences. Our custom e-commerce solutions empower your business with all the tools needed for online retail success.',
    image: '/images/ecommerce.jpg',
    pricing: [
      {
        tier: 'Starter Store',
        features: [
          'Product Catalog',
          'Secure Checkout',
          'Payment Gateway Integration',
          'Mobile Responsive',
          'Up to 50 Products'
        ]
      },
      {
        tier: 'Growth',
        features: [
          'Everything in Starter',
          'Inventory Management',
          'Customer Accounts',
          'Discount Engine',
          'Up to 500 Products'
        ]
      },
      {
        tier: 'Enterprise',
        features: [
          'Everything in Growth',
          'Multi-currency Support',
          'Advanced Analytics',
          'API Integrations',
          'Unlimited Products'
        ]
      }
    ]
  },
  'consultations': {
    title: 'Consultations',
    description: 'Receive expert digital strategy guidance to refine your vision and achieve your goals. Our consultation services provide tailored solutions for impactful results in your digital transformation journey.',
    image: '/images/consult.jpg',
    pricing: [
      {
        tier: 'Strategy Session',
        features: [
          '90-Minute Consultation',
          'Current State Analysis',
          'Recommendations Document',
          'One Follow-up Call'
        ]
      },
      {
        tier: 'Roadmap Planning',
        features: [
          '3 Strategy Sessions',
          'Competitive Analysis',
          'Digital Transformation Plan',
          '30-Day Support'
        ]
      },
      {
        tier: 'Ongoing Advisory',
        features: [
          'Weekly Strategy Sessions',
          'Implementation Support',
          'Performance Monitoring',
          'Quarterly Reviews',
          'Priority Access'
        ]
      }
    ]
  },
  'custom-dashboards': {
    title: 'Custom Dashboards',
    description: 'Experience data like never before with customized dashboards designed to empower smarter, data-driven decisions. Our dashboards transform complex information into actionable insights.',
    image: '/images/dashboards.jpg',
    pricing: [
      {
        tier: 'Basic Analytics',
        features: [
          '5 Key Metrics',
          'Data Visualization',
          'Export Functionality',
          'Monthly Updates'
        ]
      },
      {
        tier: 'Advanced Analytics',
        features: [
          '15 Customizable Metrics',
          'Real-time Data',
          'User Permissions',
          'API Integrations',
          'Weekly Updates'
        ]
      },
      {
        tier: 'Enterprise Intelligence',
        features: [
          'Unlimited Metrics',
          'Predictive Analytics',
          'Custom Reporting',
          'Multiple Data Sources',
          'Daily Updates'
        ]
      }
    ]
  },
  'seo-optimization': {
    title: 'SEO Optimization',
    description: 'Maximize your online visibility and climb search engine rankings. Our SEO services transform traffic into measurable growth through strategic optimization techniques.',
    image: '/images/seo.jpg',
    pricing: [
      {
        tier: 'SEO Essentials',
        features: [
          'Keyword Research',
          'On-page Optimization',
          'Google My Business Setup',
          'Monthly Report'
        ]
      },
      {
        tier: 'SEO Growth',
        features: [
          'Everything in Essentials',
          'Content Strategy',
          'Competitor Analysis',
          'Link Building',
          'Bi-weekly Reports'
        ]
      },
      {
        tier: 'SEO Authority',
        features: [
          'Everything in Growth',
          'Technical SEO Audit',
          'Content Creation',
          'Local SEO Strategy',
          'Weekly Reports'
        ]
      }
    ]
  },
  'web-development-training': {
    title: 'Web Development Training',
    description: 'Gain hands-on experience with modern web development techniques. Master scalable solutions and future-ready skills for real-world projects through our comprehensive training programs.',
    image: '/images/training.jpg',
    pricing: [
      {
        tier: 'Fundamentals',
        features: [
          'HTML/CSS Basics',
          'JavaScript Essentials',
          '10 Hours of Instruction',
          'Practice Projects',
          'Certificate'
        ]
      },
      {
        tier: 'Professional',
        features: [
          'React Framework',
          'Backend Basics',
          '25 Hours of Instruction',
          'Mentorship Sessions',
          'Portfolio Project'
        ]
      },
      {
        tier: 'Expert',
        features: [
          'Full Stack Development',
          'DevOps Introduction',
          '50 Hours of Instruction',
          '3-Month Support',
          'Real Client Project'
        ]
      }
    ]
  },
  'devops-and-sre': {
    title: 'DevOps & SRE',
    description: 'Achieve continuous integration and deployment pipelines with robust infrastructure management. Ensure the reliability, scalability, and performance of your applications and services with best practices for DevOps and Site Reliability Engineering (SRE).',
    image: '/images/devops.jpg',
    pricing: [
      {
        tier: 'CI/CD Setup',
        features: [
          'Pipeline Configuration',
          'Basic Monitoring',
          'Deployment Automation',
          'Documentation'
        ]
      },
      {
        tier: 'Infrastructure as Code',
        features: [
          'Everything in CI/CD Setup',
          'Cloud Architecture',
          'Container Orchestration',
          'Security Implementation',
          'Performance Testing'
        ]
      },
      {
        tier: 'Full SRE',
        features: [
          'Everything in Infrastructure',
          '24/7 Monitoring',
          'Incident Response',
          'Chaos Engineering',
          'Custom SLIs/SLOs'
        ]
      }
    ]
  }
};

export default serviceDetails;