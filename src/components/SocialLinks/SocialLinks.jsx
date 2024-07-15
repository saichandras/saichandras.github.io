import React from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi'; // Icon for resume

const SocialLinks = () => {
  return (
    <div className="flex justify-start mt-10 space-x-6">
      <a
        href="https://www.linkedin.com/in/saichandras/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-700 transition-colors duration-300"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/saichandras"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-700 transition-colors duration-300"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://drive.google.com/file/d/1s6VpI7O_BdBWYc9vHlQvhb1I0-D_uZ2y/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-700 transition-colors duration-300"
      >
        <HiOutlineDocumentText size={30} />
      </a>
    </div>
  );
};

SocialLinks.propTypes = {};

export default SocialLinks;
