import { useEffect, useRef, useState } from "react";

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * once they scroll into view. Returns a ref to attach to a container.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = containerRef.current ?? document;
    const els = root.querySelectorAll<HTMLElement>(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}

/** Tracks whether the page has scrolled past a threshold. */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}
