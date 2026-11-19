'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Tilt } from 'react-tilt';
import { styles } from '../app/styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const B = ({ children }) => <span className="font-bold">{children}</span>;

B.propTypes = {
  children: PropTypes.node.isRequired,
};

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
        <Image src={icon} alt={title} className="object-contain" width={64} height={64} />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        <p>
          I&apos;m a <B>Lead Software Engineer</B> with <B>5+ years of experience</B> designing and
          building full-stack applications, distributed systems, and data-intensive platforms across
          marketing technology, healthcare, and SaaS. My experience spans frontend engineering,
          backend architecture, cloud infrastructure, and application security. I enjoy tackling
          complex engineering problems, improving existing systems, and building software that
          performs reliably at scale.
        </p>

        <p className="mt-4">
          Currently at <B>Epsilon</B>, I work on the architecture and development of the{' '}
          <B>Digital Customer Data Platform (DCDP)</B>, focusing on{' '}
          <B>enterprise authorization and data security</B>. I build Python-based services, Angular
          and TypeScript applications, and access-control solutions using <B>Okta</B>,{' '}
          <B>Open Policy Agent (OPA)</B>, and <B>Databricks Unity Catalog</B>. My work also involves
          optimizing <B>Kafka</B>-driven event processing, automating permission auditing, and
          improving reliability across distributed services and cloud environments.
        </p>

        <p className="mt-4">
          Previously at <B>Paradigm Healthcare Services</B>, I helped develop the{' '}
          <B>Student Health Network (SHN)</B>, an EHR platform supporting hundreds of California
          school districts and over <B>$100M in annual Medicaid reimbursements</B>. I engineered
          healthcare API integrations for <B>8+ partners</B>, developed analytics dashboards that
          improved billing efficiency by <B>25%</B> and helped recover <B>$1M+</B> in previously
          denied claims, and built a <B>fully offline AI search system</B> using LangChain, FAISS,
          and Mistral. I also tackled production performance issues, resolving memory leaks and
          optimizing infrastructure to <B>reduce costs by 40%</B>.
        </p>

        <p className="mt-4">
          At <B>DataChat</B>, I developed conversational analytics capabilities with{' '}
          <B>100+ domain-aware commands</B>, helping business users explore data and generate
          visualizations through natural language. I also built{' '}
          <B>revenue-generating SaaS features</B>, worked on database connectivity across
          Snowflake, BigQuery, and Databricks, and automated Kubernetes infrastructure provisioning
          with Terraform, reducing environment setup from <B>weeks to hours</B>.
        </p>

        <p className="mt-4">
          Beyond writing code, I lead technical design discussions, review architecture and code,
          and work with engineering teams to troubleshoot production issues. I like staying close to
          the implementation while taking responsibility for the bigger picture, whether that&apos;s
          designing a new system, improving performance, or making an existing platform more secure
          and reliable.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
