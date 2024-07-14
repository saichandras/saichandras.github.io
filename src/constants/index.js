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
  saml,
  sql_server,
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
} from '../assets';

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
    title: 'React / React Native Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'SQLA',
    icon: sqla,
  },
  {
    name: 'Go',
    icon: go,
  },
  {
    name: 'MUI',
    icon: mui,
  },
  {
    name: 'Jinja',
    icon: jinja,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'SQL Server',
    icon: sql_server,
  },
  {
    name: 'Oracle DB',
    icon: oracle_db,
  },
  {
    name: 'PL/SQL',
    icon: pl_sql,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'GitHub',
    icon: githubTech,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
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
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'AWS',
    icon: aws,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'React JS',
    icon: reactjs,
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
    name: 'Xcode',
    icon: xcode,
  },
  {
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'JWT',
    icon: jwt,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'Laravel',
    icon: laravel,
  },
  {
    name: 'Next.js',
    icon: nextjs,
  },
  {
    name: 'ExpressJS',
    icon: expressjs,
  },
  {
    name: 'CypressJS',
    icon: cypressjs,
  },
  {
    name: 'GitLab',
    icon: gitlab,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'FuseJS',
    icon: fusejs,
  },
  {
    name: 'ECharts',
    icon: echarts,
  },
  {
    name: 'Algolia',
    icon: algolia,
  },
  {
    name: 'CircleCI',
    icon: circleci,
  },
  {
    name: 'RabbitMQ',
    icon: rabbitmq,
  },
  {
    name: 'Electrode Native',
    icon: electrode_native,
  },
  {
    name: 'GCP',
    icon: gcp,
  },
  {
    name: 'SSO',
    icon: sso,
  },
  {
    name: 'SAML',
    icon: saml,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Terraform',
    icon: terraform,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Redis',
    icon: redis,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Redux Saga',
    icon: reduxSaga,
  },
  {
    name: 'Mongoose',
    icon: mongoose,
  },
  {
    name: 'JSON',
    icon: json,
  },
  {
    name: 'Android',
    icon: android,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Full Stack Engineer',
    company_name: 'Paradigm Healthcare Services',
    company_link: 'https://paradigm-healthcare.com/',
    icon: paradigm_logo,
    iconBg: '#F7F7F7',
    date: 'February 2023 - Present',
    points: [
      'Developed and maintained **customer-facing web applications** and **operational data management systems**, streamlining **Medicaid reimbursement processes** and delivering **comprehensive, real-time health insights** for each student, significantly improving data accessibility and decision-making.',
      'Engineered an **automated immunization card system** by leveraging **SQLAlchemy**, **PyPDF2**, **pdfrw**, and **Redis** to process vast student data into tailored PDFs for specific groups, generating over 10,000 PDFs daily without manual intervention.',
      'Enhanced the platform to support **batch processing of student health services**, including mental, behavioral, and social-emotional health needs, streamlining **operations** and increasing reimbursement accuracy by 30%.',
      'Architected a **CI/CD pipeline** using **Jenkins** and **AWS CodePipeline**, integrated automated unit, integration, and end-to-end testing, and implemented **blue-green deployment strategies** to ensure zero downtime during updates, reducing deployment times by 50% and increasing overall system reliability and efficiency.',
      'Implemented a **serverless notification system** using **AWS Lambda**, processing over 1,000 events per second to deliver real-time updates and alerts to healthcare providers, significantly reducing operational costs by 40%.',
      'Engineered a **Docker-based solution** integrating **Selenium** for automated web scraping and cross-browser testing, validating healthcare provider credentials, and ensuring data accuracy while reducing manual efforts by 80% and enhancing performance consistency across browsers.',
      'Monitored and optimized application performance using **New Relic** by setting up custom dashboards and alerts, tracking detailed route metrics, and identifying and resolving performance bottlenecks, resulting in a 20% improvement in response times and enhanced overall system reliability.',
      'Managed project tasks and workflows using **Jira**, ensuring timely delivery and effective collaboration across the development team.',
      'Developed additional data management and analysis tools, providing actionable insights on Medicaid reimbursement performance, leading to an average annual reimbursement increase of $500,000.',
    ],
    tech_stack: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Redux-Saga',
      'MUI',
      'Python',
      'Flask',
      'Golang',
      'SQL',
      'REST APIs',
      'Docker',
      'PostgreSQL',
      'SQLAlchemy',
      'NLP',
      'AWS',
      'Redis',
      'Agile Methodologies',
      'OOP',
      'HTML',
      'CSS',
      'JSON',
      'GitHub',
      'Cypress',
      'ECharts',
      'Fuse.js',
      'Axios',
      'Moment.js',
      'Lodash',
      'Algolia',
      'NGINX',
      'SSO',
      'SAML',
      'Terraform',
      'S3',
      'DynamoDB',
      'CircleCI',
      'Selenium',
      'RabbitMQ',
      'AMQP protocol',
      'CI/CD',
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
      'Developed and maintained the **Full-Stack Data Analytics** product using **JavaScript**, **React.js**, **Python**, **Go**, and **SQLAlchemy**, delivering user-friendly interfaces for constructing sophisticated analytics workflows that process and interpret natural language requests.',
      'Revolutionized the connection mechanism with **Flask**, **SQLAlchemy**, and **Material-UI**, enabling seamless integration with 10+ real-time **cloud databases** and test-before-connect functionality, enhancing live dynamic data visualization and boosting platform versatility and efficiency.',
      'Significantly contributed to the development of a scalable **microservices architecture**, enhancing system modularity, and designed **NGINX** as a reverse proxy, ensuring high availability through optimized load balancing and caching strategies.',
      'Refined the **NLP engine** using **Python**, expanding the auto-complete functionality with over 30+ data analytics commands, streamlining the creation, exploration, and analysis of multiple data visualization charts, and reducing query formulation time by 25%.',
      'Integrated 25+ innovative features, including advanced filtering, enhanced search capabilities with **Algolia integration**, and a streamlined sharing mechanism, facilitating effortless collaboration and sharing of data charts among multiple users and organizations.',
      'Transformed DataChat into a scalable **SaaS product** with differentiated subscription tiers, integrated **Google SSO** for streamlined authentication, and **Stripe** for payment processing, optimized billing workflows, enabled seamless user signups, and facilitated easy plan upgrades or downgrades.',
      'Leveraged **Terraform** to automate infrastructure provisioning and management, configuring **S3** for state management, significantly reducing setup time.',
      'Implemented a **CI/CD pipeline** using **CircleCI**, integrating **Selenium** and **Cypress** for comprehensive testing, ensuring high-quality releases, reducing deployment times by 50%, and ensuring zero downtime during updates.',
      'Developed and maintained a **RabbitMQ-based messaging system** to handle distributed tasks and inter-service communication, ensuring reliable and efficient processing of session actions and user requests through the **AMQP protocol**.',
    ],
    tech_stack: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Redux-Saga',
      'MUI',
      'Python',
      'Flask',
      'Golang',
      'SQL',
      'REST APIs',
      'Docker',
      'PostgreSQL',
      'SQLAlchemy',
      'NLP',
      'AWS',
      'Redis',
      'Agile Methodologies',
      'OOP',
      'HTML',
      'CSS',
      'JSON',
      'GitHub',
      'Cypress',
      'ECharts',
      'Fuse.js',
      'Axios',
      'Moment.js',
      'Lodash',
      'Algolia',
      'NGINX',
      'SSO',
      'SAML',
      'Terraform',
      'S3',
      'DynamoDB',
      'CircleCI',
      'Selenium',
      'RabbitMQ',
      'AMQP protocol',
      'CI/CD',
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
      'Spearheaded the development of a comprehensive **SaaS platform**, connecting over 500 trucking companies with potential truck drivers, significantly enhancing recruitment efficiency.',
      'Transitioned from native web technologies to modern frameworks like **React.js**, **Next.js**, and **Node.js**, enhancing site agility and responsiveness, and significantly reducing page load times.',
      'Pioneered the incorporation of a robust filtering mechanism, streamlining job matches for over 1,000 truck drivers and trucking companies, optimizing search efficiency by 40%.',
    ],
    tech_stack: [
      'JavaScript',
      'React.js',
      'Redux',
      'Next.js',
      'Node.js',
      'Docker',
      'MongoDB',
      'Mongoose',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Software Engineer Graduate Intern',
    company_name: 'Carlin Fit LLC',
    company_link: 'https://fit4friends.com/',
    icon: carlin_fit_llc_logo,
    iconBg: '#F7F7F7',
    date: 'May 2020 - August 2020',
    points: [
      'Revamped mobile application **UI/UX** for **Android** and **iOS** using **Kotlin** and **Swift**, adding 30+ features including individual and team challenges, authentication enhancements, and real-time weight loss tracking charts.',
      'Developed a multi-user networking feature and implemented a bidding algorithm with **PayPal integration** for handling monetary transactions, enabling users to participate in competitive weight loss challenges and incentivizing participation.',
      'Designed and upgraded 40+ **REST API endpoints**, 8 task schedulers, and the database schema using **Laravel**, and published new versions of the mobile application to the **Apple** and **Google Play Store**.',
      'Leveraged **Electrode Native** to integrate React Native components into the existing native codebase, improving cross-platform development efficiency and ensuring high performance and maintainability of the app across iOS and Android.',
    ],
    tech_stack: [
      'Kotlin',
      'Java',
      'Swift',
      'React Native',
      'PHP',
      'Laravel',
      'MySQL',
      'AWS',
      'PuTTY',
      'REST APIs',
      'JSON',
      'Bootstrap',
      'Scrum Environment',
      'Android Studio',
      'Xcode',
      'GitHub',
      'Mobile Application Development',
      'PayPal Integration',
      'Electrode Native',
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
      'Comprehensive training in diverse technologies and platforms, including **PL/SQL** programming language, **Oracle E-Business Suite**, **Python OOPs**, **Oracle EBS Workflow**, and **Oracle Reports Builder**.',
      'Designed and implemented the "Venue Management System" on **Oracle E-Business Suite** to streamline venue logistics, from managing supplies and equipment to assisting customers in selecting the ideal venue based on specific needs.',
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
      "I thought launching Fit4Friends would be challenging, but Sai's enthusiasm and initiative transformed our app beyond expectations. His dedication and innovative ideas were a game-changer for our team morale and productivity.",
    name: 'Samantha Carlin',
    designation: 'CEO & Co-Founder',
    company: 'Carlin Fit LLC',
    image: samantha_carlin,
  },
];

const projects = [
  {
    name: 'Tracker APP',
    description:
      'Developed a mobile app with real-time tracking and mapping of user paths, implementing polylines on maps to visualize the traversed route, and engineered a secure backend for user authentication, account management, and REST API endpoints to manage and synchronize track data.',
    tags: ['React Native', 'MongoDB', 'Mongoose', 'Express.js', 'Node.js', 'JWT'],
    images: [tracker_1, tracker_2, tracker_3],
    source_code_link: 'https://github.com/saichandras/TrackerApp',
  },
  {
    name: 'Meals APP',
    description:
      'Crafted a React Native app with Redux, offering a curated selection of over 50 categorized meal recipes, complete with detailed descriptions and preparation instructions, featuring robust filtering and favoriting capabilities.',
    tags: ['React Native', 'React Redux'],
    images: [meals_1, meals_2, meals_3],
    source_code_link: 'https://github.com/saichandras/MealsApp',
  },
  {
    name: 'Blogs APP',
    description:
      'Designed an app in React Native and React Context using JSON API server calls to create, edit, and delete the blogs.',
    tags: ['React Native', 'React Context', 'JSON API'],
    images: [blogs_1, blogs_2, blogs_3],
    source_code_link: 'https://github.com/saichandras/BlogApp',
  },
  {
    name: 'Tic Tac Toe',
    description:
      'A classic Tic Tac Toe game built using Android Studio and Kotlin. It allows two players to input their names and play on a single device with a dynamic game board that updates with player moves, ensuring fair play and declaring a winner or a tie.',
    tags: ['Android Studio', 'Kotlin', 'Java'],
    images: [tictactoe],
    source_code_link: 'https://github.com/saichandras/TicTacToe',
  },
  {
    name: 'Search Restaurants',
    description:
      'An intuitive app using the Yelp API to find nearby restaurants. It categorizes results based on ratings, cost, and reviews, offering a responsive UI for searching by name or browsing categories, with detailed restaurant information including ratings and images.',
    tags: ['React Native', 'React Redux', "Yelp API's"],
    images: [food_app],
    source_code_link: 'https://github.com/saichandras/RestaurantsApp',
  },
  {
    name: 'Target Sum',
    description:
      'A number puzzle game developed with Android Studio and Kotlin. Players select numbers to match a target sum within a time limit, featuring a simple interface, clear instructions, and dynamic gameplay to enhance problem-solving skills and speed.',
    tags: ['React Native', 'React Context'],
    images: [target_sum],
    source_code_link: 'https://github.com/saichandras/TargetSum',
  },
];

export { services, technologies, experiences, testimonials, projects };
