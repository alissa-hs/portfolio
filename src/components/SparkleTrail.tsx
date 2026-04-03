"use client";

import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

interface TouchFork {
  x: number;
  y: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function SparkleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const sparkles: Sparkle[] = [];
    const touchForks: TouchFork[] = [];
    const isTouchDevice = "ontouchstart" in window;
    let animId: number;

    // Preload fork image for touch rendering
    const forkImg = new Image();
    forkImg.src = "/fork-pointer.svg";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnSparkles = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        sparkles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          size: Math.random() * 4 + 2,
          opacity: 1,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.15,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 1 + 0.5,
          life: 0,
          maxLife: 40 + Math.random() * 30,
        });
      }
    };

    // --- Mouse handlers (desktop) ---
    let lastSpawn = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawn < 30) return;
      lastSpawn = now;
      spawnSparkles(e.clientX, e.clientY);
    };

    // --- Touch handlers (mobile) ---
    const handleTouchStart = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        touchForks.push({
          x: t.clientX,
          y: t.clientY,
          opacity: 1,
          life: 0,
          maxLife: 50,
        });
        spawnSparkles(t.clientX, t.clientY);
      }
    };

    let lastTouchSpawn = 0;
    const handleTouchMove = (e: TouchEvent) => {
      const now = Date.now();
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        // Update the most recent fork position to follow the finger
        if (touchForks.length > 0) {
          const latest = touchForks[touchForks.length - 1];
          latest.x = t.clientX;
          latest.y = t.clientY;
          latest.life = 0;
          latest.opacity = 1;
        }
        if (now - lastTouchSpawn < 50) continue;
        lastTouchSpawn = now;
        spawnSparkles(t.clientX, t.clientY);
      }
    };

    const handleTouchEnd = () => {
      // Let existing forks fade out naturally (don't remove immediately)
    };

    if (isTouchDevice) {
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
    } else {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const drawStar = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
      }
      ctx.strokeStyle = "#f5d87a";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = "#fff8dc";
      ctx.fill();

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.5);
      grad.addColorStop(0, "rgba(184, 151, 61, 0.4)");
      grad.addColorStop(1, "rgba(184, 151, 61, 0)");
      ctx.beginPath();
      ctx.arc(0, 0, size * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.restore();
    };

    const FORK_W = 42;
    const FORK_H = 64;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw touch forks (mobile)
      for (let i = touchForks.length - 1; i >= 0; i--) {
        const f = touchForks[i];
        f.life++;
        f.opacity = 1 - f.life / f.maxLife;

        if (f.life >= f.maxLife) {
          touchForks.splice(i, 1);
          continue;
        }

        if (forkImg.complete) {
          ctx.save();
          ctx.globalAlpha = f.opacity;
          ctx.drawImage(
            forkImg,
            f.x - FORK_W / 2,
            f.y - FORK_H / 2,
            FORK_W,
            FORK_H
          );
          ctx.restore();
        }
      }

      // Draw sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotationSpeed;
        s.opacity = 1 - s.life / s.maxLife;
        s.size *= 0.98;

        if (s.life >= s.maxLife) {
          sparkles.splice(i, 1);
          continue;
        }

        drawStar(s.x, s.y, s.size, s.rotation, s.opacity);
      }

      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
