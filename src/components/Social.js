import React from "react";
import Link from "react-scroll/modules/components/Link";
import { social } from "../data";

function Social() {
  return (
    <div>
      <ul className="flex space-x-6">
        {social.map((items, index) => {
          return (
            <li
              className="flex justify-center items-center text-accent
            "
              key={index}
            >
              <a href={items.href}>{items.icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Social;
