"use client";
import { useEffect, useRef, type ReactNode } from "react";

export default function RevealGrid({
  children,
  className = "",
  stagger = 80,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];

    // Set initial hidden state client-side only (SSR renders visible, JS hides before animating)
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(22px)";
      item.style.transition =
        "opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1), transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
              // After reveal completes, remove inline overrides so hover effects work normally
              item.addEventListener(
                "transitionend",
                () => {
                  item.style.removeProperty("opacity");
                  item.style.removeProperty("transform");
                  item.style.removeProperty("transition");
                },
                { once: true }
              );
            }, i * stagger);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
