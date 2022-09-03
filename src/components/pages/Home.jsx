import React from "react";
import Banner from "../Banner";
import Blogs from "../Blogs";
import Collection from "../Collection";
import Footer from "../Footer";
import Hero from "../Hero";
import Special from "../Special";

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Special />
      <Banner />
      <Blogs />
      <Footer />
    </>
  );
}
