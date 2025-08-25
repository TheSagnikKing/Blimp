import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Layout = lazy(() => import("./Layout/Layout"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const HowItWorks = lazy(() => import("./pages/Works/Works"))

const App = () => {

  useEffect(() => {
    
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      p, h1, h2, h3, h4, h5, i, a, input, textarea, input::placeholder, textarea::placeholder, select, label {
        color: var(--text-primary);
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/works" element={<HowItWorks/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
