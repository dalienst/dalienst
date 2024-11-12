import About from "@/components/landing/About";
import Header from "@/components/landing/Header";
import Services from "@/components/landing/Services";
import Works from "@/components/landing/Works";
import React from "react";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Works />
    </>
  );
}

export default Home;
