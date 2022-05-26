import React, { useCallback, useMemo, useState } from "react";

export default function useIndicatorObserver() {
  const [activeLink, setActiveLink] = useState("");

  // Indicator observer
  const indicatorObserver = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setActiveLink(entry.target.getAttribute("id"));
          }
        },
        { root: null, rootMargin: "-49% 0px", threshold: 0 }
      ),
    []
  );

  return [indicatorObserver, activeLink];
}
