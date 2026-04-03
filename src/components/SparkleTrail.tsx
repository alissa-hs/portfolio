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

export default function SparkleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const sparkles: Sparkle[] = [];
    const mouse = { x: 0, y: 0 };
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let lastSpawn = 0;
    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const now = Date.now();
      if (now - lastSpawn < 30) return;
      lastSpawn = now;

      for (let i = 0; i < 3; i++) {
        sparkles.push({
          x: mouse.x + (Math.random() - 0.5) * 12,
          y: mouse.y + (Math.random() - 0.5) * 12,
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
    window.addEventListener("mousemove", handleMove);

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

      // four-point sparkle star
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        ctx.moveTo(0, 0);
        ctx.lineTo(
          Math.cos(angle) * size,
          Math.sin(angle) * size
        );
      }
      ctx.strokeStyle = "#f5d87a";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // bright center dot
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = "#fff8dc";
      ctx.fill();

      // outer glow
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.5);
      grad.addColorStop(0, "rgba(184, 151, 61, 0.4)");
      grad.addColorStop(1, "rgba(184, 151, 61, 0)");
      ctx.beginPath();
      ctx.arc(0, 0, size * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

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
      window.removeEventListener("mousemove", handleMove);
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
