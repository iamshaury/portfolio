'use client'

import { useEffect, useState } from 'react'

export function Logo() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="w-16 h-16" />

    /**
     * High-visibility calligraphic "S".
     * Optimized with a thicker stroke and larger viewbox for maximum impact.
     */
    const sPath = "M 45 105 C 45 80, 85 50, 85 30 C 85 10, 55 10, 50 35 C 45 65, 110 85, 80 120 C 55 140, 25 120, 35 90"

    return (
        <div className="relative w-16 h-16 flex items-center justify-center p-2 group overflow-visible">

            {/* Background grid dots - Slightly more visible for "plotted" feel */}
            <div className="absolute inset-0 opacity-[0.12] pointer-events-none select-none flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-6">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-0.5 h-0.5 bg-foreground rounded-full" />
                    ))}
                </div>
            </div>

            <svg
                width="80"
                height="80"
                viewBox="0 0 160 160"
                className="relative z-10 transform -rotate-12 transition-all duration-700 ease-in-out group-hover:rotate-0 group-hover:scale-105"
            >
                {/* Thick, high-visibility script S path */}
                <path
                    d={sPath}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    style={{
                        strokeDasharray: "1",
                        strokeDashoffset: mounted ? "0" : "1",
                        transition: 'stroke-dashoffset 2.2s cubic-bezier(0.65, 0, 0.35, 1)',
                        opacity: 1
                    }}
                />
            </svg>
        </div>
    )
}