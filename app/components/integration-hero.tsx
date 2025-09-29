"use client";

import React from "react";

const ICONS_ROW1 = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", name: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", name: "C" },
];

const ICONS_ROW2 = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", name: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: "Express.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", name: "Flask" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", name: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", name: "TensorFlow" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", name: "OpenCV" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", name: "VS Code" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg", name: "Vite" },
];

export default function IntegrationHero() {
  return (
    <>
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          {/* Row 1 */}
          <div className="flex w-max animate-scroll-left">
            {[...ICONS_ROW1, ...ICONS_ROW1].map((icon, i) => (
              <div key={i} title={icon.name} className="flex-shrink-0 mx-5 h-20 w-20 rounded-full bg-gray-800/50 border border-white/10 shadow-md flex items-center justify-center p-3">
                <img src={icon.src} alt={icon.name} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-max mt-10 animate-scroll-right">
            {[...ICONS_ROW2, ...ICONS_ROW2].map((icon, i) => (
              <div key={i} title={icon.name} className="flex-shrink-0 mx-5 h-20 w-20 rounded-full bg-gray-800/50 border border-white/10 shadow-md flex items-center justify-center p-3">
                <img src={icon.src} alt={icon.name} className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-100% / 2)); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </>
  );
}
