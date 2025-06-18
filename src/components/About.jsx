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
          I’m a <span class="font-bold">full stack engineer</span> with a track record of
          <span class="font-bold">leading architecture</span> and
          <span class="font-bold">implementation for scalable SaaS platforms</span> across
          healthcare, analytics, and infrastructure-heavy domains. I operate at the intersection of{' '}
          <span class="font-bold">engineering depth</span> and{' '}
          <span class="font-bold">product impact</span>, transforming brittle systems into
          performant, secure, and extensible platforms used at scale.
        </p>

        <p class="mt-4">
          I specialize in <span class="font-bold">backend architecture</span>,
          <span class="font-bold">CI/CD automation</span>, and
          <span class="font-bold">cloud-native infrastructure</span>. My experience spans building{' '}
          <span class="font-bold">resilient microservices</span> with Flask and Golang, designing
          deployment pipelines with <span class="font-bold">Terraform</span> and
          <span class="font-bold">AWS CodePipeline</span>, and orchestrating
          <span class="font-bold">zero-downtime releases</span> across distributed systems. I’ve led{' '}
          <span class="font-bold">platform migrations</span>, serverless system rollouts, and
          cost-optimized infrastructure designs that serve millions of data records with high
          availability.
        </p>

        <p class="mt-4">
          At the application layer, I’ve architected{' '}
          <span class="font-bold">HIPAA-compliant platforms</span>, built{' '}
          <span class="font-bold">real-time engines</span> to process thousands of requests per
          second, and integrated AI tooling like <span class="font-bold">LangChain</span> and local
          LLMs to accelerate internal dev workflows. I’ve also delivered{' '}
          <span class="font-bold">Stripe</span> and{' '}
          <span class="font-bold">PayPal-based billing flows</span>,
          <span class="font-bold">multi-tenant role systems</span>, and data pipelines that drive
          reporting, compliance, and decision-making at scale.
        </p>

        <p class="mt-4">
          I focus on delivering systems that are <span class="font-bold">testable</span>,
          <span class="font-bold">observable</span>, and aligned with{' '}
          <span class="font-bold">business outcomes</span>. Whether I’m unblocking teams with{' '}
          <span class="font-bold">architectural direction</span> or pushing critical features to
          production, I bring a <span class="font-bold">product-led mindset</span> backed by
          <span class="font-bold">engineering excellence</span>.
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
