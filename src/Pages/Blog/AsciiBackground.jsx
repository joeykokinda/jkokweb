import React, { useEffect, useRef } from "react";

const CHARS =
  "!@#$%&*-_=+[]{}|;:,.?<>/\\0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function AsciiBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const FONT_SIZE = 13;
    const COL_W = FONT_SIZE * 0.62;
    let cols, rows, grid;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / COL_W);
      rows = Math.ceil(canvas.height / FONT_SIZE);
      grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () =>
          CHARS[Math.floor(Math.random() * CHARS.length)]
        )
      );
    };

    const draw = () => {
      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px "Courier New", monospace`;
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.fillText(grid[r][c], c * COL_W, (r + 1) * FONT_SIZE);
        }
      }
    };

    init();
    draw();
    window.addEventListener("resize", () => { init(); draw(); });

    // Slowly mutate ~0.8% of chars each tick
    const iv = setInterval(() => {
      const n = Math.ceil(cols * rows * 0.008);
      for (let i = 0; i < n; i++) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        grid[r][c] = CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      draw();
    }, 120);

    return () => {
      clearInterval(iv);
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default AsciiBackground;
