import React from "react";
import { Navigation } from "./components/navigation";
import Header from "./components/header";

import { About } from "./components/about";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { MainForm } from "./components/mainForm";
import { Footer } from "./components/footer";
import { Testimonials } from "./components/testimonials";
// import { MainFormIndia } from "./components/mainForm-india";
// import { MainFormDubai } from "./components/mainForm-oecdubai";

// const Header = lazy(() => import("./components/header"));
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <MainForm />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
