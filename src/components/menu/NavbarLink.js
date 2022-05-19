import React from "react";
import styles from "./NavbarLink.module.css";

export default function NavbarLink({ categoryName, activeLink }) {
  const scrollPage = (e) => {
    e.preventDefault();
    const query = e.target.getAttribute("href");
    const element = document.querySelector(query);
    window.scrollTo({
      left: 0,
      top: element.offsetTop - 160,
      behavior: "smooth",
    });
  };

  const hrefText = categoryName.toLowerCase().replace(" ", "");

  const linkActiveClass = activeLink === hrefText ? styles["active-link"] : "";

  return (
    <a
      onClick={scrollPage}
      className={`${styles["menu-navbar__link"]} ${linkActiveClass}`}
      href={`#${hrefText}`}
    >
      {categoryName}
    </a>
  );
}
