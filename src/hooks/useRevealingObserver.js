import React, { useState } from "react";

export default function useIndicatorObserver() {
  const [currentCategory, setCurrentCategory] = useState("");
  // Revealing observer
  const revealingObserver = new IntersectionObserver(
    (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setCurrentCategory(entry.target.getAttribute("id"));
        observer.unobserve(entry.target);
      }
    },
    {
      root: null,
      rootMargin: " 0px 0px 10% 0px",
      threshold: 0,
    }
  );
  return [revealingObserver, currentCategory];
}
