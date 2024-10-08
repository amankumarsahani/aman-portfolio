import React from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";

function Nav() {
  // console.log(navigation);
  //   {
  //     name: 'home',
  //     href: 'home',
  //   },
  //   {
  //     name: 'about',
  //     href: 'about',
  //   },
  //   {
  //     name: 'portfolio',
  //     href: 'portfolio',
  //   },
  //   {
  //     name: 'services',
  //     href: 'services',
  //   },
  //   {
  //     name: 'testimonials',
  //     href: 'testimonials',
  //   },
  //   {
  //     name: 'contact',
  //     href: 'contact',
  //   },
  // ];
  return (
    <div>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((items, index) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer"
              key={index}
            >
              <Link
                to={items.href}
                activeclass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {items.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
