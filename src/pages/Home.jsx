import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <>
      <Layout>
        <div className="">
          <Hero />
          <Service />
          <Gallery/>
        </div>
      </Layout>
    </>
  );
}

export default Home;
