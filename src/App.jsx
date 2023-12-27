import React from "react";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const App = () => {
  return (
    <>
      <Menu />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
    </>
  );
};

export default App;
