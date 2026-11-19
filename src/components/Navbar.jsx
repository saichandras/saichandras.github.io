'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { close, menu } from '../../public/assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the bar while scrolling down, show it while scrolling up.
      const current = window.scrollY;
      setIsVisible(!(current > lastScrollY.current && current > 100));
      lastScrollY.current = current;

      // Highlight the link of the last section whose start has passed 40% of the viewport.
      const threshold = window.innerHeight * 0.4;
      let activeTitle = '';
      navLinks.forEach(({ id, title }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) {
          activeTitle = title;
        }
      });
      setActive(activeTitle);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Image src="/assets/s_logo.png" alt="Sai Chandra logo" width={40} height={40} />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span>Sai Chandra</span>
            <span className="hidden md:inline-block pl-1.5 pr-1.5">|</span>
            <span className="hidden md:inline-block">Lead Software Engineer</span>
          </p>
        </Link>
        <ul className="hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-[#22d3ee]' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link href={`/#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden flex items-center">
          <button
            type="button"
            aria-label={toggle ? 'Close menu' : 'Open menu'}
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
            className="flex items-center justify-center"
          >
            <Image
              src={toggle ? close : menu}
              alt=""
              className="object-contain cursor-pointer"
              width={28}
              height={28}
            />
          </button>
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
                    active === link.title ? 'text-[#22d3ee]' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                >
                  <Link href={`/#${link.id}`} onClick={() => setToggle(false)}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
