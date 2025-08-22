import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Layout = lazy(() => import("./Layout/Layout"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
