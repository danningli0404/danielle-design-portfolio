'use client';

import { useEffect, useRef } from 'react';

export function EditorialCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!dot || !finePointer.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const draw = () => {
      x += (targetX - x) * 0.16;
      y += (targetY - y) * 0.16;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.dataset.visible = 'true';
    };
    const leave = () => { dot.dataset.visible = 'false'; };
    const press = () => { dot.dataset.pressed = 'true'; };
    const release = () => { dot.dataset.pressed = 'false'; };

    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('pointerleave', leave);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerleave', leave);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
    };
  }, []);

  return <div ref={dotRef} className="editorial-cursor" aria-hidden="true" />;
}
