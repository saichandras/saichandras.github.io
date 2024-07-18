'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { SectionWrapper } from '../hoc';
import { styles } from '../app/styles';
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_run5ctg',
        'template_nnipbsm',
        {
          from_name: form.name,
          to_name: 'Sai Chandra',
          from_email: form.email,
          to_email: 'saichandrasriram42@gmail.com',
          message: form.message,
        },
        'xa7KvhEQukgrpTMnc',
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          alert('Something went wrong.');
        },
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-tertiary py-3 px-16 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.1, 0.55)}
        className="
          xl:flex-1 
          xl:h-[490px] xl:w-[450px] 
          md:h-[420px] md:w-[490px] 
          sm:h-[380px] sm:w-[470px]  
          xs:h-[350px] xs:w-[400px] 
          h-[310px] w-[350px]
          xl:mb-0 mb-16
          self-center
        "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

Contact.propTypes = {};

export default SectionWrapper(Contact, 'contact');
