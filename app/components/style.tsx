"use client";
import myPic from "../../lib/images/myPic.png";
import Image from "next/image";
import styled from "styled-components";
import { Caveat } from "next/font/google";

// Import Caveat font
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          {/* Front Side */}
          <div className="card-front">
            <Image
              src={myPic}
              alt="A picture of Shaury"
              className="card-image"
            />
          </div>

          {/* Back Side */}
          <div className="card-back">
            <h2 className={`${caveat.className} text-3xl font-bold`}>
              Yeah !
            </h2>
            <p className={`${caveat.className} text-xl`}>That's Me :)</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  margin-top: 1rem;

  .card {
    width: 150px; 
    height: 160px;
    perspective: 1200px;
    border-radius: 12px;
    overflow: hidden;
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.9s cubic-bezier(0.4, 0.2, 0.2, 1);
    transform-style: preserve-3d;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg) scale(1.05);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  .card-front {
    background: #111;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }

  .card-back {
    background: rgba(20, 20, 20, 0.6);
    backdrop-filter: blur(10px);
    color: white;
    transform: rotateY(180deg);
    flex-direction: column;
    gap: 0.5rem;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3), 0 8px 25px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(168, 85, 247, 0.4);
  }

  .card-back h2 {
    color: #e0e0e0;
    text-shadow: 0 0 8px rgba(168, 85, 247, 0.6);
  }

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export default Card;
