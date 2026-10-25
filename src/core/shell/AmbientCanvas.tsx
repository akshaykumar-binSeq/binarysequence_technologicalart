'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ambient-canvas.module.css';

/**
 * AmbientCanvas — Living Foundation Ambient Wave & Node Field
 *
 * Implements:
 * - Subtle, organic mathematical particle & vector wave field
 * - Pure GPU canvas 2D rendering at 60fps with zero layout thrashing
 * - Micro-deflection on pointer move
 * - Strict reduced-motion pause
 * - VisibilityState listener to suspend loop when backgrounded
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§24, §25)
 */
export function AmbientCanvas(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const isMotionStandard =
      typeof document !== 'undefined' &&
      document.documentElement.getAttribute('data-motion') === 'standard';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !isMotionStandard) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvasResolution = () => {
      if (!canvas || !ctx) return;
      const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    };

    setupCanvasResolution();

    const handleResize = () => {
      setupCanvasResolution();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    // Pointer coordinates
    const pointer = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handlePointerMove = (e: MouseEvent) => {
      pointer.targetX = e.clientX;
      pointer.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        pointer.targetX = e.touches[0].clientX;
        pointer.targetY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Node generation
    const NODE_COUNT = Math.min(36, Math.floor((width * height) / 38000));
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
      phase: number;
      speed: number;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
        phase: Math.random() * Math.PI * 2,
        speed: 0.001 + Math.random() * 0.0015,
      });
    }

    let time = 0;

    const render = () => {
      time += 1;
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Harmonic oscillation
        node.phase += node.speed;
        const waveX = Math.sin(node.phase + time * 0.01) * 20;
        const waveY = Math.cos(node.phase + time * 0.008) * 20;

        node.baseX += node.vx;
        node.baseY += node.vy;

        // Wrap edges
        if (node.baseX < 0) node.baseX = width;
        if (node.baseX > width) node.baseX = 0;
        if (node.baseY < 0) node.baseY = height;
        if (node.baseY > height) node.baseY = 0;

        // Localized pointer deflection
        const dx = pointer.x - (node.baseX + waveX);
        const dy = pointer.y - (node.baseY + waveY);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        let deflectX = 0;
        let deflectY = 0;
        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 15;
          deflectX = -(dx / dist) * force;
          deflectY = -(dy / dist) * force;
        }

        node.x = node.baseX + waveX + deflectX;
        node.y = node.baseY + waveY + deflectY;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(217, 119, 6, 0.45)'; // Amber telemetry hue
        ctx.fill();

        // Connect nearby nodes with filaments
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const cdx = other.x - node.x;
          const cdy = other.y - node.y;
          const cDist = Math.sqrt(cdx * cdx + cdy * cdy);
          const connectDist = 140;

          if (cDist < connectDist) {
            const alpha = (1 - cDist / connectDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(246, 245, 240, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    let isRunning = false;
    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (isRunning) {
        cancelAnimationFrame(animationFrameId);
        isRunning = false;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    const handlePageShow = () => {
      startLoop();
    };

    const handlePageHide = () => {
      stopLoop();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);
    startLoop();

    return () => {
      stopLoop();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.ambientCanvas} aria-hidden="true" />;
}
