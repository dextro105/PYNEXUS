import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const endX = useRef(0);
  const endY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't run cursor logic on mobile devices
    if (isMobile) return;

    const dot = dotRef.current;
    const outline = outlineRef.current;

    if (!dot || !outline) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      endX.current = clientX;
      endY.current = clientY;

      // dot moves instantly
      dot.style.left = `${clientX}px`;
      dot.style.top = `${clientY}px`;
    };

    const animate = () => {
      currentX.current += (endX.current - currentX.current) * 1;
      currentY.current += (endY.current - currentY.current) * 1;

      if (outlineRef.current) {
        outlineRef.current.style.left = `${currentX.current}px`;
        outlineRef.current.style.top = `${currentY.current}px`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    const handleMouseDown = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    const handleMouseUp = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.transform = 'translate(-50%, -50%) scale()';
    };

    const handleLinkHover = () => {
      outline.classList.add('link-hover');
    };

    const handleLinkLeave = () => {
      outline.classList.remove('link-hover');
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
      cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] w-2 h-2 bg-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-in-out"
      />
      <div
        ref={outlineRef}
        className="fixed z-[9999] w-8 h-8 border-2 border-white rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-in-out"
      />
    </>
  );
};

export default CustomCursor;
