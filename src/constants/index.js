'use client';

import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  algolia,
  android,
  angular,
  aws,
  bootstrap,
  c,
  circleci,
  css,
  cypressjs,
  docker,
  echarts,
  electrode_native,
  expressjs,
  figma,
  flask,
  fusejs,
  gcp,
  git,
  githubTech,
  go,
  html,
  html_svg,
  java,
  javascript,
  jetbrains,
  jinja,
  gitlab,
  json,
  jwt,
  kotlin,
  laravel,
  mongodb,
  mongoose,
  mui,
  mysql,
  nextjs,
  nodejs,
  oracle_db,
  php,
  pl_sql,
  postgresql,
  preloader,
  python,
  rabbitmq,
  react,
  reactjs,
  redis,
  redux,
  reduxSaga,
  sql,
  sqla,
  sso,
  swift,
  tailwind,
  terraform,
  threejs,
  typescript,
  vscode,
  xcode,
  paradigm_logo,
  datachat_logo,
  the_nine_logo,
  carlin_fit_llc_logo,
  infosys_logo,
  tracker_1,
  tracker_2,
  tracker_3,
  meals_1,
  meals_2,
  meals_3,
  blogs_1,
  blogs_2,
  blogs_3,
  tictactoe,
  target_sum,
  food_app,
  samantha_carlin,
  shreya_nayak,
  admin,
  singup,
  user_dashboard,
  registration_appointment,
  typeorm,
  prisma,
  radix_ui,
  shadcn,
  react_hook_form,
  zod,
  d3js,
  langchain,
  mistral,
  selenium,
  formik,
  auth0,
  stripe,
  paypal,
  kubernetes,
  github_actions,
  nginx,
  new_relic,
} from '../../public/assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: web,
  },
  {
    title: 'Full Stack Engineer',
    icon: mobile,
  },
  {
    title: 'Mobile Developer',
    icon: backend,
  },
  {
    title: 'AI Engineer',
    icon: creator,
  },
];

const technologies = [
  // Programming Languages
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Go',
    icon: go,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'PL/SQL',
    icon: pl_sql,
  },
  {
    name: 'HTML5',
    icon: html,
  },
  {
    name: 'CSS3',
    icon: css,
  },

  // Frontend Frameworks & Libraries
  {
    name: 'React.js',
    icon: reactjs,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'Redux-Saga',
    icon: reduxSaga,
  },

  // Backend Frameworks
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'Node.js',
    icon: nodejs,
  },
  {
    name: 'Express.js',
    icon: expressjs,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },

  // Database & ORM
  {
    name: 'SQLAlchemy',
    icon: sqla,
  },
  {
    name: 'TypeORM',
    icon: typeorm,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
  {
    name: 'Mongoose',
    icon: mongoose,
  },

  // UI Libraries & Styling
  {
    name: 'Material-UI',
    icon: mui,
  },
  {
    name: 'Radix UI',
    icon: radix_ui,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'ShadCN',
    icon: shadcn,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },

  // Form Handling & Validation
  {
    name: 'React Hook Form',
    icon: react_hook_form,
  },
  {
    name: 'Formik',
    icon: formik,
  },
  {
    name: 'Zod',
    icon: zod,
  },

  // Data Visualization
  {
    name: 'D3.js',
    icon: d3js,
  },
  {
    name: 'ECharts',
    icon: echarts,
  },
  {
    name: 'Three.js',
    icon: threejs,
  },

  // AI/ML & Search
  {
    name: 'LangChain',
    icon: langchain,
  },
  {
    name: 'Mistral',
    icon: mistral,
  },
  {
    name: 'Algolia',
    icon: algolia,
  },

  // Testing
  {
    name: 'Cypress',
    icon: cypressjs,
  },
  {
    name: 'Selenium',
    icon: selenium,
  },

  // Authentication & Payments
  {
    name: 'Auth0',
    icon: auth0,
  },
  {
    name: 'Stripe',
    icon: stripe,
  },
  {
    name: 'PayPal API',
    icon: paypal,
  },
  {
    name: 'JWT',
    icon: jwt,
  },

  // Version Control & Development Tools
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'GitHub',
    icon: githubTech,
  },
  {
    name: 'GitLab',
    icon: gitlab,
  },
  {
    name: 'VSCode',
    icon: vscode,
  },
  {
    name: 'JetBrains',
    icon: jetbrains,
  },
  {
    name: 'Xcode',
    icon: xcode,
  },
  {
    name: 'Figma',
    icon: figma,
  },

  // DevOps & Infrastructure
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
  },
  {
    name: 'Terraform',
    icon: terraform,
  },
  {
    name: 'GitHub Actions',
    icon: github_actions,
  },
  {
    name: 'CircleCI',
    icon: circleci,
  },
  {
    name: 'NGINX',
    icon: nginx,
  },
  {
    name: 'RabbitMQ',
    icon: rabbitmq,
  },
  {
    name: 'New Relic',
    icon: new_relic,
  },

  // Databases
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Oracle Database',
    icon: oracle_db,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Redis',
    icon: redis,
  },

  // Cloud Services
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'Google Cloud Storage',
    icon: gcp,
  },

  // Specialized Libraries
  {
    name: 'FuseJS',
    icon: fusejs,
  },
  {
    name: 'Electrode Native',
    icon: electrode_native,
  },
];

const experiences = [
  {
    title: 'Senior Full Stack Engineer',
    company_name: 'Paradigm Healthcare Services',
    company_link: 'https://paradigm-healthcare.com/',
    icon: paradigm_logo,
    iconBg: '#F7F7F7',
    date: 'February 2023 - Present',
    points: [
      'Architected **Student Health Network (SHN) platform** serving **3M+ students** across **50+ California school districts**, integrating **EHR management**, **Medicaid reimbursement**, and **CYBHI mental health billing** using **React**, **Flask**, **SQLAlchemy**, and **Oracle** while ensuring **FERPA/HIPAA compliance**.',
      'Engineered **self-service API platform** empowering **15+ healthcare partners** to integrate student health data through **RESTful APIs**, featuring interactive documentation, usage analytics, and real-time status monitoring for **HIPAA-compliant data access**.',
      'Developed **enterprise AI knowledge platform** using **React, LangChain, and vector embeddings**, enabling cross-functional teams to instantly search **500K+ lines of code** and healthcare datasets through natural language queries with **fully offline AI infrastructure**.',
      'Designed **FERPA-compliant design system** with **React, ShadCN, and TypeScript**, creating reusable UI components for immunization tracking, health records, and Medicaid reporting with standardized form validation and audit-ready data entry workflows.',
      'Led **enterprise GitLab to GitHub migration** for healthcare platform deployment, designing **full-stack CI/CD pipelines** that automated React component testing, Python API validation, and **HIPAA-compliant database migrations** across development, staging, and production environments.',
      'Developed **EduClaim analytics dashboard** providing real-time billing insights for K-12 districts, featuring automated claims tracking and denial pattern analysis that **increased billing efficiency by 25%**.',
      'Architected **application performance monitoring** using **New Relic APM** and custom alerting workflows, identifying memory leaks in Flask applications and implementing resource optimization that **reduced server costs by 40%** while supporting **2x traffic growth**.',
    ],
    tech_stack: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Flask',
      'SQLAlchemy',
      'Python',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'ShadCN',
      'Oracle',
      'PL/SQL',
      'PostgreSQL',
      'Redis',
      'AWS (Lambda, EC2, S3, boto3)',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Terraform',
      'New Relic',
      'Selenium',
      'WebDriver Manager',
      'LangChain',
      'FAISS',
      'Mistral',
      'Code Llama',
      'ECharts',
      'REST APIs',
      'JWT Authentication',
      'CI/CD',
      'Microservices Architecture',
      'Git',
      'GitLab',
      'Jira',
      'Agile',
      'OOP',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'DataChat Inc.',
    company_link: 'https://datachat.ai/',
    icon: datachat_logo,
    iconBg: '#F7F7F7',
    date: 'July 2021 - January 2023',
    points: [
      'Streamlined **data exploration** for enterprise users by building **conversational AI analytics platform** with **React, Material-UI, Flask, Go, and SQLAlchemy**, enabling natural language query-to-visualization workflows with **100+ domain-aware commands** that eliminated manual chart construction',
      'Launched **revenue-generating SaaS platform** by integrating **Stripe billing, Google SSO, and tiered subscription management**, transforming DataChat from internal tool into **commercial no-code analytics platform** serving **enterprise customers**',
      'Eliminated **database integration bottlenecks** by building test-before-connect architecture, unlocking real-time visualization across **Snowflake, BigQuery, Redshift, Databricks, and 15+ other data sources** for no-code analytics',
      'Engineered **enterprise collaboration features** with **Algolia-powered search**, enabling cross-organizational data sharing and advanced filtering capabilities, transforming individual dashboards into team workspaces used by business users',
      'Automated **infrastructure provisioning** using **Terraform and AWS EKS**, implementing **multi-AZ Kubernetes clusters** with S3 state management that **reduced customer environment deployment from manual weeks to automated hours**',
      'Developed **end-to-end testing infrastructure** using **Cypress and Go/Flask test suites**, validating conversational AI accuracy across **15+ data sources** with automated regression testing',
      'Implemented **distributed messaging infrastructure** using **RabbitMQ and AMQP protocols**, implementing self-interrupting request optimization and async message handling that eliminated request bottlenecks for real-time analytics workloads',
    ],
    tech_stack: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Redux-Saga',
      'Material-UI',
      'Formik',
      'Yup',
      'Python',
      'Flask',
      'Go',
      'SQLAlchemy',
      'PostgreSQL',
      'D3.js',
      'ECharts',
      'REST APIs',
      'OOP',
      'HTML',
      'CSS',
      'Docker',
      'Kubernetes',
      'AWS EKS',
      'S3',
      'Terraform',
      'RabbitMQ',
      'AMQP',
      'NGINX',
      'CI/CD',
      'CircleCI',
      'Cypress',
      'Selenium',
      'Algolia',
      'Stripe',
      'Google SSO',
      'Natural Language Processing',
      'Microservices Architecture',
      'Git',
      'Agile',
    ],
  },
  {
    title: 'Full Stack Engineer',
    company_name: 'The Nine',
    company_link: 'https://www.nine.is/',
    icon: the_nine_logo,
    iconBg: '#F7F7F7',
    date: 'May 2021 - July 2021',
    points: [
      'Architected **logistics recruitment platform** using **Next.js, Material-UI, Express.js, TypeORM** serving **500+ trucking companies** with real-time job matching, driver analytics dashboards, and automated workflow management for the transportation industry',
      'Optimized **platform performance by 60%** through **Next.js SSR implementation**, lazy loading, and API caching, **migrating legacy jQuery architecture** to modern component-based design with **microservices integration**',
      'Developed **intelligent job matching algorithm** using **Express.js backend services**, analyzing driver qualifications, route preferences, and company requirements to **increase placement accuracy by 40%** for **1,000+ active drivers**',
    ],
    tech_stack: [
      'Next.js',
      'React.js',
      'TypeScript',
      'JavaScript',
      'Express.js',
      'Node.js',
      'PostgreSQL',
      'TypeORM',
      'Material-UI',
      'Tailwind CSS',
      'Auth0',
      'Google Cloud Storage',
      'JWT Authentication',
      'REST APIs',
      'Docker',
      'Git',
      'Microservices Architecture',
      'Server-Side Rendering (SSR)',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Carlin Fit LLC',
    company_link: 'https://fit4friends.com/',
    icon: carlin_fit_llc_logo,
    iconBg: '#F7F7F7',
    date: 'May 2020 - August 2020',
    points: [
      'Enhanced **mobile fitness applications** using **Swift** and **Kotlin**, implementing **30+ features** including **real-time progress tracking**, **team challenges**, and **OAuth authentication**, improving user engagement across **iOS and Android platforms**',
      'Developed **multi-user competition system** with **custom bidding logic** and **PayPal API integration**, enabling **monetized weight loss challenges** and increasing user retention through **gamification mechanics**',
      'Optimized **backend performance** by refactoring **40+ REST API endpoints** in **Laravel/PHP**, redesigning **MySQL database schema**, and implementing **8 automated schedulers** for background task processing',
      'Integrated **React Native components** into native mobile apps using **Electrode Native**, enabling **code reuse** between platforms while maintaining **native performance** and **cross-platform consistency**',
    ],
    tech_stack: [
      'Swift',
      'Kotlin',
      'React Native',
      'Laravel',
      'PHP',
      'MySQL',
      'REST APIs',
      'PayPal API',
      'OAuth',
      'JSON',
      'AWS',
      'Electrode Native',
      'iOS Development',
      'Android Development',
      'Database Design',
      'Background Processing',
      'GitHub',
      'Android Studio',
      'Xcode',
      'Bootstrap',
      'Agile',
    ],
  },
  {
    title: 'Systems Engineer',
    company_name: 'Infosys',
    company_link: 'https://www.infosys.com/',
    icon: infosys_logo,
    iconBg: '#F7F7F7',
    date: 'January 2019 - May 2019',
    points: [
      'Streamlined **logistics operations** by building a **Venue Management System** on **Oracle E-Business Suite**, improving **supply tracking**, **equipment handling**, and **venue recommendations** for customer-specific needs.',
      'Applied **enterprise tools in production** to support logistics workflows after completing hands-on training in **PL/SQL**, **Oracle EBS Workflow**, **Reports Builder**, and **Python OOP**.',
    ],
    tech_stack: [
      'PL/SQL',
      'SQL',
      'Oracle E-Business Suite',
      'Python',
      'OOP',
      'Oracle EBS Workflow',
      'Oracle Reports Builder',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sai was a 2020 summer graduate intern at Carlin Fit LLC, and was responsible for improving upon our existing mobile application, Fit4Friends, and implementing new features to prepare the app for launch. Sai was genuinely excited by the work and always presented his updates with a high level of enthusiasm and pride, which positively contributed to the overall team moral! And if Sai ever didn't know how to do something, he would take the initiative to research it on his own and learn, which is a great quality to have in a team member! He loved brainstorming user stories, and was never afraid to share his thoughts in team discussions. ",
    name: 'Samantha Carlin',
    designation: 'CEO & Co-Founder',
    connector: 'of',
    company: 'Carlin Fit LLC',
    image: samantha_carlin,
  },
  {
    testimonial:
      "I've had the pleasure of working with Sai on numerous projects, including our time together at Carlin Fit LLC. Sai's technical prowess and problem-solving skills are unparalleled. His ability to seamlessly collaborate and drive projects to successful completion is a testament to his expertise and dedication. Sai is not only a brilliant software engineer but also a supportive teammate who consistently goes above and beyond.",
    name: 'Shreya Nayak',
    designation: 'Software Engineer',
    connector: 'at',
    company: 'UNM Hospitals',
    image: shreya_nayak,
  },
];

const projects = [
  {
    name: 'Patient Management APP',
    description:
      'Engineered a comprehensive healthcare patient management application that streamlines the process for patients to register, book, and manage appointments with doctors. Developed robust administrative tools for scheduling, confirming, and canceling appointments, providing administrators with full control over the appointment lifecycle. Integrated a user-friendly dashboard where patients can easily view, reschedule, or cancel their appointments. Enhanced the application with features such as secure user authentication, responsive UI design, and a sidebar for patients to update their information, schedule new appointments, and manage their profiles, significantly improving the overall user experience.',
    tags: [
      'Next.js',
      'React',
      'ShadCN',
      'TailwindCSS',
      'Typescript',
      'Prisma',
      'PostgreSQL',
      'Zod',
      'JWT',
      'Swiper',
    ],
    images: [user_dashboard, registration_appointment, singup, admin],
    source_code_link: 'https://github.com/saichandras/carepulse',
    variant: 'website',
  },
  {
    name: 'Tracker APP',
    description:
      'Developed a mobile app with real-time tracking and mapping of user paths, implementing polylines on maps to visualize the traversed route, and engineered a secure backend for user authentication, account management, and REST API endpoints to manage and synchronize track data.',
    tags: ['React Native', 'MongoDB', 'Mongoose', 'Express.js', 'Node.js', 'JWT'],
    images: [tracker_1, tracker_2, tracker_3],
    source_code_link: 'https://github.com/saichandras/TrackerApp',
    variant: 'mobile',
  },
  {
    name: 'Meals APP',
    description:
      'Crafted a React Native app with Redux, offering a curated selection of over 50 categorized meal recipes, complete with detailed descriptions and preparation instructions, featuring robust filtering and favoriting capabilities.',
    tags: ['React Native', 'React Redux'],
    images: [meals_1, meals_2, meals_3],
    source_code_link: 'https://github.com/saichandras/MealsApp',
    variant: 'mobile',
  },
  {
    name: 'Blogs APP',
    description:
      'Designed an app in React Native and React Context using JSON API server calls to create, edit, and delete the blogs.',
    tags: ['React Native', 'React Context', 'JSON API'],
    images: [blogs_1, blogs_2, blogs_3],
    source_code_link: 'https://github.com/saichandras/BlogApp',
    variant: 'mobile',
  },
  {
    name: 'Tic Tac Toe',
    description:
      'A classic Tic Tac Toe game built using Android Studio and Kotlin. It allows two players to input their names and play on a single device with a dynamic game board that updates with player moves, ensuring fair play and declaring a winner or a tie.',
    tags: ['Android Studio', 'Kotlin', 'Java'],
    images: [tictactoe],
    source_code_link: 'https://github.com/saichandras/TicTacToe',
    variant: 'mobile',
  },
  {
    name: 'Search Restaurants',
    description:
      'An intuitive app using the Yelp API to find nearby restaurants. It categorizes results based on ratings, cost, and reviews, offering a responsive UI for searching by name or browsing categories, with detailed restaurant information including ratings and images.',
    tags: ['React Native', 'React Redux', "Yelp API's"],
    images: [food_app],
    source_code_link: 'https://github.com/saichandras/RestaurantsApp',
    variant: 'mobile',
  },
  {
    name: 'Target Sum',
    description:
      'A number puzzle game developed with Android Studio and Kotlin. Players select numbers to match a target sum within a time limit, featuring a simple interface, clear instructions, and dynamic gameplay to enhance problem-solving skills and speed.',
    tags: ['React Native', 'React Context'],
    images: [target_sum],
    source_code_link: 'https://github.com/saichandras/TargetSum',
    variant: 'mobile',
  },
];

const social_icons = [
  {
    name: 'LinkedIn',
    icon_path: './linkedin/linkedin1.gltf',
    link: 'https://www.linkedin.com/in/saichandras/',
    args: {
      scale: 2.65,
      position: [0, -3.3, 0],
    },
  },
  {
    name: 'GitHub',
    icon_path: './github/github2.gltf',
    link: 'https://github.com/saichandras',
    args: {
      scale: 0.889,
      position: [0, -0.2, 0],
    },
  },
  {
    name: 'Resume',
    icon_path: './resume/resume1.gltf',
    link: 'https://drive.google.com/file/d/1s6VpI7O_BdBWYc9vHlQvhb1I0-D_uZ2y/view?usp=sharing',
    args: {
      scale: 1.25,
      position: [0, -0.65, 0],
    },
  },
];

export { services, technologies, experiences, testimonials, projects, social_icons };
