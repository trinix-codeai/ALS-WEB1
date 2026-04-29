"use client";

import type { ReactNode } from "react";
import { memo, useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function FadeInSectionComponent({
  children,
  className = "",
  id,
}: FadeInSectionProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section
      ref={ref}
      id={id}
      className={`fade-section ${visible ? "fade-section--visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export const FadeInSection = memo(FadeInSectionComponent);
