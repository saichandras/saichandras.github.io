'use client';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../app/styles';
import { fadeIn, textVariant } from '../utils/motion';
import Image from 'next/image';

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
        <Image src={icon} alt="web-development" className="w-16 h-16 object-contain" />
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
        I have a strong track record of transforming complex applications into scalable SaaS
        products, integrating advanced features like payment solutions with{' '}
        <span className="font-bold">Stripe</span> and <span className="font-bold">PayPal</span>, and
        enhancing data analytics with refined NLP capabilities. My expertise lies in designing
        robust microservices architectures, configuring <span className="font-bold">NGINX</span> as
        a reverse proxy, and implementing secure authentication mechanisms using{' '}
        <span className="font-bold">SSO</span> and <span className="font-bold">SAML</span>
        .<br />
        <br />
        Specializing in architecting <span className="font-bold">CI/CD pipelines</span> and
        implementing serverless solutions, I leverage containerization for seamless testing and
        deployment, ensuring zero downtime and increased efficiency. I'm proficient in automating
        infrastructure provisioning and management using{' '}
        <span className="font-bold">Terraform</span>, configuring state management with{' '}
        <span className="font-bold">S3</span>, and streamlining deployment processes with{' '}
        <span className="font-bold">Jenkins</span> and{' '}
        <span className="font-bold">AWS CodePipeline</span>.<br />
        <br />
        With a strong background in developing advanced data visualization tools and integrating
        innovative features, I continually improve data accessibility and decision-making. My work
        consistently reduces operational costs, enhances system performance, and drives significant
        improvements in user satisfaction and business outcomes.
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
