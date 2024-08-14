import React from "react";
import { social } from "../data";
// import logo from "../assets/img/logo.svg";
function Footer() {
  const currentYear = new Date().getFullYear();
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
            <p className="font-body text-2xl text-center font-bold">Aman Kumar Sahani</p>
          </div>
          <p>&copy; {currentYear} All right reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
