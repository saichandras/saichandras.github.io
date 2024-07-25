'use client';

import emailjs from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { styles } from '../app/styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Dynamic3DLoader from './Dynamic3DLoader';

const Contact = () => {
  const formRef = useRef();

  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          to_name: 'Sai Chandra',
          from_email: values.email,
          to_email: 'saichandrasriram42@gmail.com',
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      );
      toast.success('Thank you. I will get back to you as soon as possible.', { icon: '🚀' });
      resetForm();
    } catch (error) {
      toast.error('Something went wrong.');
    }
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-12 flex flex-col gap-8" noValidate>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <Field
                  type="text"
                  name="name"
                  placeholder="What's your good name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 mt-2" />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your email</span>
                <Field
                  type="email"
                  name="email"
                  placeholder="What's your web address?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 mt-2" />
              </label>

              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <Field
                  as="textarea"
                  rows={7}
                  name="message"
                  placeholder="What you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 mt-2" />
              </label>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-tertiary py-3 px-16 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
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
        <Dynamic3DLoader componentPath="./canvas/Earth" />
      </motion.div>
    </div>
  );
};

Contact.propTypes = {};

export default SectionWrapper(Contact, 'contact');
