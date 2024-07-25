'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { close, menu } from '../../public/assets';
import { navLinks } from '../constants';
import DynamicImageLoader from './DynamicImageLoader';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-primary transition-transform duration-300 ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        <Link
          href="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-4"
        >
          <DynamicImageLoader
            unoptimized
            src="/assets/s_logo.png"
            alt="logo"
            width={40}
            height={40}
            useLazy={false}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span>Sai Chandra</span>
            <span className="hidden md:inline-block pl-1.5 pr-1.5">|</span>
            <span className="hidden md:inline-block">Full Stack Engineer</span>
          </p>
        </Link>
        <ul className="hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link href={`/#${link.id}`}>{link.title} </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex items-center">
          <DynamicImageLoader
            unoptimized
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            width={28}
            height={28}
            useLazy={false}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link href={`/#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
