"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";

const Home = () => {
  const [showHero, setShowHero] = useState(true);

  return (
    <div>
      {showHero && <Hero onFinish={() => setShowHero(false)} />}
      {!showHero && (
        <>
          <h1>프로젝트 카드 </h1>
        </>
      )}
    </div>
  );
};

export default Home;
