'use client';

import { useRef, useState, type ReactNode, type PointerEvent } from 'react';
import { Button } from '@/components/ui/button';

export function ResetDesk({ label = 'Reset arrangement ↺' }: { label?: string }) {
  return <Button className="reset-desk" variant="ghost" onClick={() => window.location.reload()}>{label}</Button>;
}

let front = 20;

// Keep real links: a click opens the case study, a drag only moves the card.
export function DraggableProject({ href, className, label, instructions, children }: {
  href: string; className: string; label: string; instructions?: string; children: ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [z, setZ] = useState<number>();
  const [dragging, setDragging] = useState(false);
  const gesture = useRef<{ id: number; x: number; y: number; origin: typeof position; moved: boolean } | null>(null);
  const suppressClick = useRef(false);

  function down(e: PointerEvent<HTMLAnchorElement>) {
    if (e.button !== 0 || !e.isPrimary) return;
    suppressClick.current = false;
    gesture.current = { id: e.pointerId, x: e.clientX, y: e.clientY, origin: position, moved: false };
    setZ(++front);
    e.currentTarget.setPointerCapture(e.pointerId);
  }
  function move(e: PointerEvent<HTMLAnchorElement>) {
    const g = gesture.current;
    if (!g || g.id !== e.pointerId) return;
    const dx = e.clientX - g.x, dy = e.clientY - g.y;
    if (!g.moved && Math.hypot(dx, dy) < 6) return;
    g.moved = true;
    suppressClick.current = true;
    setDragging(true);
    setPosition({ x: g.origin.x + dx, y: g.origin.y + dy });
  }
  function end(e: PointerEvent<HTMLAnchorElement>) {
    if (gesture.current?.id !== e.pointerId) return;
    gesture.current = null;
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  }

  return <a href={href} className={`${className} draggable-project${dragging ? ' is-dragging' : ''}`}
    aria-label={label} title={instructions ?? 'Drag to arrange · Click to explore · Arrow keys to move · Escape to reset'}
    draggable={false} style={{ translate: `${position.x}px ${position.y}px`, zIndex: z }}
    onPointerDown={down} onPointerMove={move} onPointerUp={end} onPointerCancel={end}
    onLostPointerCapture={() => { gesture.current = null; setDragging(false); }}
    onDragStart={e => e.preventDefault()}
    onClick={e => { if (suppressClick.current && e.detail !== 0) { e.preventDefault(); suppressClick.current = false; } }}
    onKeyDown={e => {
      const directions: Record<string, [number, number]> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
      if (e.key === 'Escape') { setPosition({ x: 0, y: 0 }); return; }
      if (!directions[e.key]) return;
      e.preventDefault();
      const [x, y] = directions[e.key];
      const step = e.shiftKey ? 40 : 10;
      setZ(++front);
      setPosition(p => ({ x: p.x + x * step, y: p.y + y * step }));
    }}>{children}</a>;
}
