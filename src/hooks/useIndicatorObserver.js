import React, { useState } from "react";

export default function useIndicatorObserver() {
  const [activeLink, setActiveLink] = useState("");

  // Indicator observer
  const indicatorObserver = new IntersectionObserver(
    (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setActiveLink(entry.target.getAttribute("id"));
        observer.unobserve(entry.target);
      }
    },
    { root: null, rootMargin: "-49% 0px", threshold: 0 }
  );

  return [indicatorObserver, activeLink];
}
