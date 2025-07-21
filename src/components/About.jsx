'use client';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Tilt } from 'react-tilt';
import { styles } from '../app/styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import DynamicImageLoader from './DynamicImageLoader'; // Import the DynamicImageLoader component

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <DynamicImageLoader
          unoptimized
          src={icon}
          alt={title}
          className="object-contain"
          width={64}
          height={64}
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        <p>
          I&apos;m a <span className="font-bold">Senior Full Stack Engineer</span> with{' '}
          <span className="font-bold">5+ years of experience</span> building{' '}
          <span className="font-bold">enterprise healthcare platforms</span> and{' '}
          <span className="font-bold">AI-powered analytics systems</span> that serve{' '}
          <span className="font-bold">millions of users</span> across healthcare, SaaS, and
          logistics domains. I specialize in transforming complex business requirements into{' '}
          <span className="font-bold">scalable, compliant, and performant platforms</span> that
          drive real business outcomes.
        </p>

        <p className="mt-4">
          My expertise centers on <span className="font-bold">healthcare technology</span> and{' '}
          <span className="font-bold">enterprise platform architecture</span>. I&apos;ve architected
          platforms serving{' '}
          <span className="font-bold">3M+ students across 50+ California school districts</span>,
          built <span className="font-bold">FERPA/HIPAA-compliant systems</span> that recovered{' '}
          <span className="font-bold">$1M+ in Medicaid reimbursements</span>, and created{' '}
          <span className="font-bold">self-service API platforms</span> connecting{' '}
          <span className="font-bold">15+ healthcare partners</span> to enterprise databases. I
          operate at the intersection of <span className="font-bold">regulatory compliance</span>,{' '}
          <span className="font-bold">system scalability</span>, and{' '}
          <span className="font-bold">user experience</span>.
        </p>

        <p className="mt-4">
          At the technical level, I build with <span className="font-bold">React.js</span>,{' '}
          <span className="font-bold">Flask</span>, <span className="font-bold">TypeScript</span>,
          and <span className="font-bold">SQLAlchemy</span>, deploying on{' '}
          <span className="font-bold">AWS</span> and <span className="font-bold">Kubernetes</span>{' '}
          with <span className="font-bold">Terraform</span> automation. I&apos;ve pioneered{' '}
          <span className="font-bold">AI-powered development workflows</span> using{' '}
          <span className="font-bold">LangChain</span> and{' '}
          <span className="font-bold">vector embeddings</span> for{' '}
          <span className="font-bold">natural language code search</span> across{' '}
          <span className="font-bold">500K+ lines of code</span>, and built{' '}
          <span className="font-bold">conversational analytics platforms</span> with{' '}
          <span className="font-bold">100+ domain-aware commands</span> that eliminate manual chart
          construction.
        </p>

        <p className="mt-4">
          My infrastructure experience includes{' '}
          <span className="font-bold">multi-AZ Kubernetes clusters</span>,{' '}
          <span className="font-bold">CI/CD pipelines</span> with{' '}
          <span className="font-bold">GitHub Actions</span>, and{' '}
          <span className="font-bold">distributed messaging systems</span> using{' '}
          <span className="font-bold">RabbitMQ</span>. I&apos;ve reduced{' '}
          <span className="font-bold">deployment times from weeks to hours</span>, achieved{' '}
          <span className="font-bold">99.9% uptime</span>, and implemented{' '}
          <span className="font-bold">performance monitoring</span> that cut{' '}
          <span className="font-bold">server costs by 40%</span> while supporting{' '}
          <span className="font-bold">2x traffic growth</span>.
        </p>

        <p className="mt-4">
          I focus on delivering <span className="font-bold">mission-critical systems</span> that are{' '}
          <span className="font-bold">secure</span>, <span className="font-bold">observable</span>,
          and <span className="font-bold">compliant</span>. Whether I&apos;m architecting{' '}
          <span className="font-bold">revenue-generating SaaS platforms</span> with{' '}
          <span className="font-bold">Stripe billing</span> and{' '}
          <span className="font-bold">enterprise SSO</span>, or building{' '}
          <span className="font-bold">real-time analytics dashboards</span> that increase
          operational efficiency by <span className="font-bold">25%</span>, I bring a{' '}
          <span className="font-bold">product-minded approach</span> backed by{' '}
          <span className="font-bold">deep technical expertise</span> and{' '}
          <span className="font-bold">healthcare domain knowledge</span>.
        </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

About.propTypes = {};

export default SectionWrapper(About, 'about');
