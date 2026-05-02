"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Variant = "up" | "left" | "right" | "scale";

type Props = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  variant?: Variant;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px 200px 0px", threshold: 0 }
    );
    obs.observe(el);

    const t = setTimeout(() => setVisible(true), 2500);

    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[variant]} ${
        delay > 0 ? `reveal-delay-${delay}` : ""
      } ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
