"use client";

import { useEffect, useRef } from "react";

export function Plum() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpi = window.devicePixelRatio || 1;
        let size = { width: window.innerWidth, height: window.innerHeight };
        canvas.width = size.width * dpi;
        canvas.height = size.height * dpi;
        ctx.scale(dpi, dpi);

        const random = Math.random;

        const r15 = Math.PI / 12;
        const r90 = Math.PI / 2;
        const r180 = Math.PI;

        const polar2cart = (x: number, y: number, r: number, theta: number) => {
            const dx = r * Math.cos(theta);
            const dy = r * Math.sin(theta);
            return [x + dx, y + dy];
        };

        let steps: (() => void)[] = [];
        let prevSteps: (() => void)[] = [];

        let iterations = 0;
        const init = 5;
        const len = 5;

        const step = (x: number, y: number, rad: number) => {
            const length = random() * len;

            const [nx, ny] = polar2cart(x, y, length, rad);

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(nx, ny);
            ctx.stroke();

            const rad1 = rad + random() * r15;
            const rad2 = rad - random() * r15;

            if (nx < -100 || nx > size.width + 100 || ny < -100 || ny > size.height + 100)
                return;

            if (iterations <= init || random() > 0.5)
                steps.push(() => step(nx, ny, rad1));
            if (iterations <= init || random() > 0.5)
                steps.push(() => step(nx, ny, rad2));
        };

        let reqId: number;

        const frame = () => {
            iterations += 1;
            prevSteps = steps;
            steps = [];

            if (!prevSteps.length) {
                cancelAnimationFrame(reqId);
                return;
            }

            prevSteps.forEach((i) => i());
            reqId = window.requestAnimationFrame(frame);
        };

        const start = () => {
            cancelAnimationFrame(reqId);
            iterations = 0;
            ctx.clearRect(0, 0, size.width, size.height);
            ctx.lineWidth = 1;
            // Using a white/gray semi-transparent that blends in perfectly
            // with the dark mode aesthetic matching "#00000040" density inverted
            ctx.strokeStyle = "rgba(125, 125, 125, 0.25)";
            prevSteps = [];

            // Dynamic placement on edges based on Exact Vue source translation
            steps = random() < 0.5
                ? [
                    () => step(0, random() * size.height, 0),
                    () => step(size.width, random() * size.height, r180),
                ]
                : [
                    () => step(random() * size.width, 0, r90),
                    () => step(random() * size.width, size.height, -r90),
                ];

            reqId = window.requestAnimationFrame(frame);
        };

        start();

        let timeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                size = { width: window.innerWidth, height: window.innerHeight };
                canvas.width = size.width * dpi;
                canvas.height = size.height * dpi;
                ctx.scale(dpi, dpi);
                start();
            }, 500);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(reqId);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
            style={{
                maskImage: "radial-gradient(circle, transparent 20%, black)",
                WebkitMaskImage: "radial-gradient(circle, transparent 20%, black)"
            }}
        >
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    );
}
