import React from "react";
import { Hero } from "../Components/Homepage/Hero";
import { Nav } from "../Components/Homepage/Navbar";
import { About } from "../Components/Homepage/About";

function Homepage() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}

export default Homepage;
