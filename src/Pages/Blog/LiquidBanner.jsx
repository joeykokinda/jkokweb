import React, { useEffect, useRef } from "react";

function LiquidBanner({ height = 54 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = height;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Deep, dark greens — slow and ominous
    const blobs = [
      { ox: 0.05, oy: 0.5,  color: "#003319", r: 1.1, sx: 0.28, sy: 0.22, px: 0.0,  py: 1.2 },
      { ox: 0.3,  oy: 0.3,  color: "#005533", r: 0.85, sx: 0.19, sy: 0.31, px: 2.1,  py: 0.5 },
      { ox: 0.55, oy: 0.65, color: "#002211", r: 1.2, sx: 0.35, sy: 0.18, px: 4.0,  py: 2.3 },
      { ox: 0.78, oy: 0.4,  color: "#004422", r: 0.95, sx: 0.24, sy: 0.27, px: 1.0,  py: 3.5 },
      { ox: 0.2,  oy: 0.7,  color: "#006644", r: 0.75, sx: 0.31, sy: 0.36, px: 3.2,  py: 0.9 },
      { ox: 0.68, oy: 0.2,  color: "#001a0d", r: 1.3,  sx: 0.15, sy: 0.24, px: 0.5,  py: 4.1 },
      { ox: 0.45, oy: 0.5,  color: "#007744", r: 0.65, sx: 0.42, sy: 0.14, px: 5.5,  py: 2.7 },
      { ox: 0.88, oy: 0.6,  color: "#003322", r: 0.90, sx: 0.20, sy: 0.40, px: 1.8,  py: 5.0 },
    ];

    const draw = () => {
      t += 0.0018; // slow crawl
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "screen";

      blobs.forEach((b) => {
        const bx = (Math.sin(t * b.sx + b.px) * 0.5 + b.ox) * w;
        const by = (Math.sin(t * b.sy + b.py) * 0.5 + b.oy) * h;
        const r = b.r * Math.max(w, h) * 0.6;

        const grad = ctx.createRadialGradient(bx, by, 0, bx, by, r);
        grad.addColorStop(0,    b.color + "ff");
        grad.addColorStop(0.4,  b.color + "99");
        grad.addColorStop(1,    b.color + "00");

        ctx.beginPath();
        ctx.arc(bx, by, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";

      // Scanline overlay
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      for (let y = 0; y < h; y += 3) {
        ctx.fillRect(0, y, w, 1);
      }

      // Vignette edges
      const vg = ctx.createLinearGradient(0, 0, w, 0);
      vg.addColorStop(0,    "rgba(0,0,0,0.55)");
      vg.addColorStop(0.15, "rgba(0,0,0,0)");
      vg.addColorStop(0.85, "rgba(0,0,0,0)");
      vg.addColorStop(1,    "rgba(0,0,0,0.55)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setSize);
    };
  }, [height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: `${height}px` }}
    />
  );
}

export default LiquidBanner;
