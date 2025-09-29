// components/CoolBackground.tsx

export default function CoolBackground() {
    return (
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20"></div>
  
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
  
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
  
        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 200">
          <path
            d="M50,100 Q150,50 250,100 T350,100"
            stroke="#3b82f6"
            strokeWidth="1"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;50,50;100,0;0,100"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M100,50 Q200,150 300,50"
            stroke="#8b5cf6"
            strokeWidth="1"
            fill="none"
          >
            <animate
              attributeName="stroke-dasharray"
              values="100,0;50,50;0,100;100,0"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
          <circle cx="150" cy="80" r="2" fill="#3b82f6" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="250" cy="120" r="1.5" fill="#8b5cf6" opacity="0.3">
            <animate
              attributeName="opacity"
              values="0.8;0.3;0.8"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
  
        {/* Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
    );
  }
  