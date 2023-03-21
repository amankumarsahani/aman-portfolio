import React from "react";
import { social } from "../data";
import logo from "../assets/img/logo.svg";
function Footer() {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
        <div className="flex space-x-6 items-center justify-center">
          {social.map((item, index) => {
            return (
              <a className="text-accenttext-base " href={item.href} key={index}>
                {item.icon}
              </a>
            );
          })}
          </div>
          <div>
            <img src={logo} alt={logo} />
          </div>
          <p>&copy; 2023 All right reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
