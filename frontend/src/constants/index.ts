import { MenuItem } from '@/types';

/**
 * Assets
 */
import {
  ChartArea,
  Building2,
  Component,
  Code,
  BetweenHorizonalEnd,
  BrainCircuit,
  Blocks,
  Terminal,
  Package,
  SquareMousePointer,
  ChartPie,
  Files,
  UserRoundPen,
  GitFork,
  LaptopMinimal,
  ArrowBigDownDash,
  CreditCard,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  icons,
} from 'lucide-react';


import {
  // feature1,
  // feature2,
  f1,
  f2,
  blog1,
  blog2,
  blog3,
} from '@/assets';

// Header
export const navMenu: MenuItem[] = [
  {
    href: '/features',
    label: 'Features',
    submenu: [
      {
        href: '#',
        icon: ChartArea,
        label: 'User Analytics',
        desc: 'Powerful options to securely authenticate and manage',
      },
      {
        href: '#',
        icon: Building2,
        label: 'B2B SaaS Suite',
        desc: 'Add-on features built specifically for B2B applications',
      },
      {
        href: '#',
        icon: Component,
        label: 'React Components',
        desc: 'Embeddable prebuilt UI components for quick and seamless integrations',
      },
      {
        href: '#',
        icon: Code,
        label: 'Next.js Analytics',
        desc: 'The fastest and most seamless authentication solution for Next.js',
      },
      {
        href: '#',
        icon: BetweenHorizonalEnd,
        label: 'AnalytiX Elements',
        desc: 'Unstyled UI primitives for endless customization. Powered by AnalytiX',
      },
      {
        href: '#',
        icon: BrainCircuit ,
        label: 'Authentication for AI',
        desc: 'Authentication and abuse protection tailored to AI applications',
      },
    ],
  },
  // {
  //   href: '/features',
  //   label: 'Features',
  // },
  {
    href: '/docs',
    label: 'Docs',
    submenu: [
      {
        href: '#',
        icon: Terminal,
        label: 'Getting Started',
        desc: 'Powerful options to securely authenticate and manage',
      },
      {
        href: '#',
        icon: Package ,
        label: 'Core Concepts',
        desc: 'Add-on features built specifically for B2B applications',
      },
      {
        href: '#',
       icon: SquareMousePointer ,
        label: 'Customization',
        desc: 'Embeddable prebuilt UI components for quick and seamless integrations',
      },
      {
        href: '#',
        icon: Blocks,
        label: 'Official Plugins',
        desc: 'The fastest and most seamless authentication solution for Next.js',
      },
    ],
  },
  
];

// Hero
export const heroData = {
  sectionSubtitle: 'All in one Finance Hub',
  sectionTitle: 'The finance for Youth ',
  decoTitle: 'FinLit',
  sectionText:
    'Next-gen finance Knowledge: Gain valuable insights of finance and drive data-informed decision-making with our revolutionary platform.',
};

// Feature
export const featureData = {
  sectionSubtitle: 'Features',
  sectionTitle: 'SuperCharge Your Knowledge',
  sectionText:
    'Unleash the power of our platform with a multitude of useful features, empowering you to achieve your financial goals.',
  features: [
    {
      icon:ChartArea,
      iconBoxColor: 'bg-blue-600',
      title: 'Investment Insights',
      desc: 'Experience Investment analytics that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights',
      imgSrc: f1,
    },
    {
      icon: Files ,
      iconBoxColor: 'bg-cyan-500',
      title: 'Expense Mangement',
      desc: 'Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your expense Management',
      imgSrc: f2,
    },
    {
     icon: UserRoundPen,
      iconBoxColor: 'bg-yellow-500',
      title: 'Budget Tracking',
      desc: 'Enhance budget tracking with our report, maximizing user engagement and loyalty for aspired goals',
    },
    {
      icon: GitFork,
      iconBoxColor: 'bg-red-500',
      title: 'Portfolio Management',
      desc: 'Efficiently manage portfolios to determine the most effective strategies',
    },
    {
     icon: Blocks,
      iconBoxColor: 'bg-purple-500',
      title: 'Risk Management',
      desc: 'Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potentials',
    },
  ],
};

// Process
// export const processData = {
//   sectionSubtitle: 'How it works',
//   sectionTitle: 'Easy Process to Get Started',
//   sectionText:
//     'Discover how it works by leveraging advanced algorithms and data analysis techniques.',
//   list: [
//     {
//      // icon: <LaptopMinimal size={32} />,
//       title: 'Create your account',
//       text: 'Join us now and create your account to start exploring our platform and unlocking exciting features.',
//     },
//     {
//      // icon: <ArrowBigDownDash size={32} />,
//       title: 'Install our tracking app',
//       text: 'Install our tracking app to effortlessly monitor and manage your activities, gaining valuable insights and optimizing your performance.',
//     },
//     {
//       //icon: <CreditCard size={32} />,
//       title: 'Start tracking your website',
//       text: 'Start tracking your website effortlessly to gain valuable insights into visitor behavior, performance metrics, and optimization opportunities.',
//     },
//   ],
// };

// Overview
// export const overviewData = {
//   sectionSubtitle: 'Overview',
//   sectionTitle: 'All-In-One Analytics Tool',
//   sectionText:
//     'Powerful analytics made easy. Make data-driven decisions with our all-in-one tool.',
//   listTitle: 'More than 1M+ people around the world are already using',
//   list: [
//     {
//       title: '1M+',
//       text: 'Active Downloads',
//     },
//     {
//       title: '4.86',
//       text: 'Average Rating',
//     },
//     {
//       title: '60K+',
//       text: 'Active Users',
//     },
//   ],
// };

// Review
export const reviewData = {
  sectionSubtitle: 'Reviews',
  sectionTitle: 'What Our Users Are Saying..',
  reviewCard: [
    {
      title: 'We’re building a better application now, thanks to AnalytiX.',
      text: 'Our application is undergoing significant improvements with the help of NioLand, resulting in enhanced functionality, improved user experience',
      reviewAuthor: 'Wade Warren',
      date: '3month ago',
    },
    {
      title: 'Great Service from a expert support system of AnalytiX',
      text: 'Experience exceptional service and support from AnalytiX expert team, dedicated to providing knowledgeable assistance and ensuring a seamless',
      reviewAuthor: 'Dianne Russell',
      date: '3month ago',
    },
    {
      title: 'Pricing is amazing for the small businesses around the world',
      text: 'Our pricing is tailored to suit the needs of small businesses worldwide, offering affordable and competitive rates that provide excellent value for',
      reviewAuthor: 'Marvin McKinney',
      date: '3month ago',
    },
  ],
};

// Blog
// export const blogData = {
//   sectionSubtitle: 'Our Blog',
//   sectionTitle: 'Resource Center',
//   sectionText:
//     'Unlock the potential of our resource center, accessing valuable information and insights for your business growth.',
//   blogs: [
//     {
//       imgSrc: blog1,
//       badge: 'Growth',
//       title: 'Why customer retention is the ultimate growth strategy?',
//       author: {
//         avatarSrc: avatar1,
//         authorName: 'John Carte',
//         publishDate: 'Oct 10, 2024',
//         readingTime: '8 min read',
//       },
//     },
//     {
//       imgSrc: blog2,
//       badge: 'Marketing',
//       title: 'Optimizing your advertising campaigns for higher ROAS',
//       author: {
//         avatarSrc: avatar2,
//         authorName: 'Annette Black',
//         publishDate: 'Jul 15, 2024',
//         readingTime: '5 min read',
//       },
//     },
//     {
//       imgSrc: blog3,
//       badge: 'Growth',
//       title: 'How to build the ultimate tech stack for growth',
//       author: {
//         avatarSrc: avatar3,
//         authorName: 'Ralph Edwards',
//         publishDate: 'Mar 24, 2024',
//         readingTime: '2 min read',
//       },
//     },
//   ],
// };

// Cta
export const ctaData = {
  text: 'Start tracking your user analytics to boost your business',
};

// Footer
export const footerData = {
  links: [
    {
      title: 'Product',
      items: [
        {
          href: '#',
          label: 'Components',
        },
        {
          href: '#',
          label: 'Pricing',
        },
        {
          href: '#',
          label: 'Dashboard',
        },
        {
          href: '#',
          label: 'Feature requests',
        },
      ],
    },
    {
      title: 'Developers',
      items: [
        {
          href: '#',
          label: 'Documentation',
        },
        {
          href: '#',
          label: 'Discord server',
        },
        {
          href: '#',
          label: 'Support',
        },
        {
          href: '#',
          label: 'Glossary',
        },
        {
          href: '#',
          label: 'Changelog',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          href: '#',
          label: 'About',
        },
        {
          href: '#',
          label: 'Careers',
        },
        {
          href: '#',
          label: 'Blog',
        },
        {
          href: '#',
          label: 'Contact',
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          href: '#',
          label: 'Terms and Conditions',
        },
        {
          href: '#',
          label: 'Privacy Policy',
        },
        {
          href: '#',
          label: 'Data Processing Agreement',
        },
        {
          href: '#',
          label: 'Cookie manager',
        },
      ],
    },
  ],
  copyright: '© 2025 Finlit',
  // socialLinks: [
  //   {
  //     href: 'https://x.com/codewithsadee_',
  //     icon: Twitter ,
  //   },
  //   {
  //     href: 'https://github.com/codewithsadee',
  //     //icon: <Github size={18} />,
  //   },
  //   {
  //     href: 'https://www.linkedin.com/in/codewithsadee/',
  //     //icon: <Linkedin size={18} />,
  //   },
  //   {
  //     href: 'https://www.instagram.com/codewithsadee',
  //     //icon: <Instagram size={18} />,
  //   },
  //   {
  //     href: 'https://www.youtube.com/codewithsadee',
  //     //icon: <Youtube size={18} />,
  //   },
  // ],
};