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
          <span className="font-bold">enterprise-scale healthcare platforms</span> and{' '}
          <span className="font-bold">AI-powered analytics systems</span> that serve{' '}
          <span className="font-bold">millions of users</span> across healthcare, SaaS, and
          logistics domains with <span className="font-bold">$100M+ revenue impact</span>. I
          specialize in transforming complex business requirements into{' '}
          <span className="font-bold">scalable, FERPA/HIPAA-compliant platforms</span> that drive
          measurable business outcomes.
        </p>

        <p className="mt-4">
          My expertise centers on <span className="font-bold">healthcare technology</span> and{' '}
          <span className="font-bold">enterprise platform architecture</span>. I&apos;ve architected
          the <span className="font-bold">Student Health Network (SHN) platform</span> serving{' '}
          <span className="font-bold">millions of students</span> through{' '}
          <span className="font-bold">$100M+ annual Medicaid reimbursements</span> across{' '}
          <span className="font-bold">hundreds of California school districts</span>, built{' '}
          <span className="font-bold">FHIR/HL7-compliant API ecosystems</span> connecting{' '}
          <span className="font-bold">15+ healthcare partners</span>, and created{' '}
          <span className="font-bold">AI-powered knowledge platforms</span> that enable{' '}
          <span className="font-bold">natural language search</span> across{' '}
          <span className="font-bold">500K+ lines of healthcare code</span> and federal billing
          datasets.
        </p>

        <p className="mt-4">
          At the technical level, I build with <span className="font-bold">React.js</span>,{' '}
          <span className="font-bold">Flask</span>, <span className="font-bold">TypeScript</span>,{' '}
          <span className="font-bold">SQLAlchemy</span>, and{' '}
          <span className="font-bold">Oracle</span>, deploying on{' '}
          <span className="font-bold">AWS</span> and <span className="font-bold">Kubernetes</span>{' '}
          with <span className="font-bold">Terraform</span> automation. I&apos;ve pioneered{' '}
          <span className="font-bold">conversational AI analytics platforms</span> with{' '}
          <span className="font-bold">100+ domain-aware commands</span>, developed{' '}
          <span className="font-bold">comprehensive healthcare design systems</span> with{' '}
          <span className="font-bold">ShadCN</span> and <span className="font-bold">React</span>,
          and built <span className="font-bold">real-time analytics dashboards</span> that{' '}
          <span className="font-bold">increased billing efficiency by 25%</span> and{' '}
          <span className="font-bold">recovered $1M+ in previously denied claims</span>.
        </p>

        <p className="mt-4">
          My infrastructure experience includes{' '}
          <span className="font-bold">multi-AZ Kubernetes clusters</span>,{' '}
          <span className="font-bold">full-stack CI/CD pipelines</span> with{' '}
          <span className="font-bold">GitHub Actions</span>, and{' '}
          <span className="font-bold">distributed messaging systems</span> using{' '}
          <span className="font-bold">RabbitMQ</span>. I&apos;ve orchestrated{' '}
          <span className="font-bold">enterprise migrations from GitLab to GitHub</span>,
          implemented <span className="font-bold">New Relic APM monitoring</span> that{' '}
          <span className="font-bold">reduced server costs by 40%</span> while supporting{' '}
          <span className="font-bold">2x traffic growth</span>, and automated deployment processes
          that reduced provisioning from <span className="font-bold">weeks to hours</span>.
        </p>

        <p className="mt-4">
          I focus on delivering{' '}
          <span className="font-bold">mission-critical healthcare systems</span> that are{' '}
          <span className="font-bold">secure</span>, <span className="font-bold">observable</span>,
          and <span className="font-bold">compliant</span>. Whether I&apos;m engineering{' '}
          <span className="font-bold">self-service API platforms</span> with{' '}
          <span className="font-bold">HIPAA-compliant cross-system data exchange</span>, building{' '}
          <span className="font-bold">EduClaim analytics dashboards</span> for{' '}
          <span className="font-bold">K-12 districts</span>, or developing{' '}
          <span className="font-bold">revenue-generating SaaS solutions</span> with{' '}
          <span className="font-bold">Stripe billing</span> and{' '}
          <span className="font-bold">enterprise SSO</span>, I bring a{' '}
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
