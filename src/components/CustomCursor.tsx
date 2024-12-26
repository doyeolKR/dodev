import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const windowX = window.innerWidth;

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      if (windowX - 20 > e.pageX) {
        const cursor = cursorRef.current;

        if (cursor) {
          cursor.style.left = `${mouseX}px`;
          cursor.style.top = `${mouseY}px`;
          cursor.style.transform = "rotate(-90deg)";
        }
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
  });

  useEffect(() => {
    document.body.style.cursor = "none";

    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  return (
    <div
      className="cursor fixed pointer-events-none w-20 h-20 transform -translate-x-1/2 -translate-y-1/2"
      style={{ zIndex: 999 }}
      ref={cursorRef}
    >
      <img src="/images/rocket-icon.png" className="w-20 h-20"></img>
    </div>
  );
}
