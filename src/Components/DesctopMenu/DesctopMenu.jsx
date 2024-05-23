import React from "react";
import { menuLinks } from "../../DB/store";

const DesctopMenu = ({ className }) => {
  const menuList = menuLinks.map((item) => {
    return (
      <li key={item.id}>
        <a href={item.href}>
          <pre>{item.name}</pre>
        </a>
      </li>
    );
  });

  return (
    <div className={className}>
      <nav>
        <ul>{menuList}</ul>
      </nav>
    </div>
  );
};

export default DesctopMenu;
