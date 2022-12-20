import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Testimonal from "../home/testimonial/Testimonal";
import Hblog from "./Hblog";
import Hprice from './Hprice'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice/>
    </div>
  );
};

export default Home;
