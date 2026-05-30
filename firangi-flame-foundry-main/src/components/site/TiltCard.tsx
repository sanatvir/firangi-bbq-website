import { useRef, type ReactNode } from "react";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const isTouchDevice = () => window.matchMedia("(hover: none)").matches;

  const handleMove = (e: React.MouseEvent) => {
    if (isTouchDevice()) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 10;
    const ry = (x - 0.5) * 12;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, oklch(0.95 0.05 80 / 0.18), transparent 55%)`;
    }
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
    if (shineRef.current) shineRef.current.style.background = "transparent";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transition: "transform 0.3s ease" }}
      className={`group relative overflow-hidden rounded-3xl ${className}`}
    >
      {children}
      <div ref={shineRef} className="pointer-events-none absolute inset-0" />
    </div>
  );
}
