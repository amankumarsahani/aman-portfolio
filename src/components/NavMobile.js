import React, { useState } from "react";
import { navigation } from "../data";
// import {XMarkIcon} from 'heroicons/react/outline'
import { MenuAlt3Outline, XOutline } from "heroicons-react";
import Link from "react-scroll/modules/components/Link";
import { motion } from "framer-motion";

function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const circleVariant = {
    hidden: { scale: 0 },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <div className="relative">
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Outline className="w-8 h-8" />
        {/* <XOutline className="w-8 h-8" /> */}
      </div>
      <motion.div
        variants={circleVariant}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-accent fixed top-0 right-0"
      ></motion.div>

      <motion.div
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="cursor-pointer absolute right-8 top-8"
        >
          <XOutline className="w-8 h-8" />
        </div>
        <ul className="text-center">
          {navigation.map((items, index) => {
            return (
              <li className="mb-5" key={index}>
                <Link
                  to={items.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-xl cursor-pointer capitalize"
                >
                  <p
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {items.name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}

export default NavMobile;
