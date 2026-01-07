"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
// import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  const [showHero, setShowHero] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showHero && <Hero onFinish={() => setShowHero(false)} />}
      {!showHero && (
        <>
          {/* <Header /> */}
          <hr className="border-b border-gray-100 w-full" />
          <SubHeader />
          <About />
          <Skills />
          <Experience />
          <ProjectList />
          <Contact />
          <Footer />
          <button
            onClick={scrollToTop}
            className="w-[40px] fixed bottom-6 right-6 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-sm shadow-md transition cursor-pointer"
            aria-label="Back to top"
          >
            <span className="text-lg">↑</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
