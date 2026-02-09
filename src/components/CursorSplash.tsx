"use client";

import { useEffect, useRef } from "react";

export default function CursorSplash() {
  const splashRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!splashRef.current) return;
      const { clientX, clientY } = event;
      splashRef.current.style.left = `${clientX}px`;
      splashRef.current.style.top = `${clientY}px`;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return <div ref={splashRef} className="cursor-splash" aria-hidden="true" />;
}
