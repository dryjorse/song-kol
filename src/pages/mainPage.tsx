import React, { useEffect, useRef } from "react";
import Slider from "../components/mainPage/Slider";
import { Reviews } from "../components/mainPage/Reviews";
import About from "../components/mainPage/About";
import Questions from "../components/mainPage/Questions";
import { useLocation } from "react-router-dom";

const MainPage: React.FC = () => {
  const location = useLocation();
  const questionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.search.includes("questions") && questionsRef)
      questionsRef.current?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0 });
  }, [location.search, questionsRef.current]);

  return (
    <div>
      <Slider />
      <div className="container py-80">
        <Reviews />
      </div>
      {/* <About /> */}
      <div ref={questionsRef}>
        <Questions />
      </div>
    </div>
  );
};

export default MainPage;
