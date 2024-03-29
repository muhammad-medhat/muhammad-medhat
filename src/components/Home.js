import React from "react";
import { NavBar } from "../com/Navbar/NavBar";
import { Banner } from "./Banner";
import { ContactInfo } from "./ContactInfo";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { PortfolioItems } from "../com/PortfolioItems";

function Home() {
  return (
    <div className="App color-overlay">
      <Banner />
      {/* <Skills /> */}
      {/* <ContactInfo /> */}
      <PortfolioItems />
    </div>
  );
}

export default Home;
