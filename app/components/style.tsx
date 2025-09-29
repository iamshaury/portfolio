"use client";
import myPic from "../../lib/images/myPic.png";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Card = () => {
  return (
    <div className="mt-4 group w-[150px] h-[160px] [perspective:1200px]">
      <div className="relative w-full h-full text-center transition-transform duration-[900ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.05)]">
        {/* Front Side */}
        <div className="absolute w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] flex items-center justify-center rounded-xl bg-[#111] shadow-[0_8px_25px_rgba(0,0,0,0.4)]">
          <Image
            src={myPic}
            alt="A picture of Shaury"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] flex flex-col items-center justify-center gap-2 rounded-xl [transform:rotateY(180deg)] text-white bg-[rgba(20,20,20,0.6)] backdrop-blur-md border border-[rgba(168,85,247,0.4)] shadow-[0_0_20px_rgba(168,85,247,0.3),0_8px_25px_rgba(0,0,0,0.5)]">
          <h2
            className={`${caveat.className} text-3xl font-bold text-[#e0e0e0] [text-shadow:0_0_8px_rgba(168,85,247,0.6)]`}
          >
            Yeah !
          </h2>
          <p className={`${caveat.className} text-xl`}>That's Me :)</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
