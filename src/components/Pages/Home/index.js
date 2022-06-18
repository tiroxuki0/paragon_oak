import React from "react";
import Hero from "../../Modules/Hero";
import Products from "../../Modules/Products";
import Testimonials from "../../Modules/Testimonials";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Products />
      <Testimonials />
    </section>
  );
};

export default Home;
