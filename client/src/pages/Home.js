import React from 'react';

import Navbar from "../components/nav/Navbar";
import Hero from "../components/hero/Hero";
import { fonts } from "../constants/fonts";
import StudyForm from "../components/study/StudyForm";
import Cards from "../components/cards/Cards";
import Marque from "../components/marque/Marque";
import { imgBanner, imgPartner } from "../constants/marqueImgs";
import NewsFlash from "../components/newsFlash/NewsFlash";

function Home() {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: fonts.container, margin: 'auto' }}>
        <Hero />
        <StudyForm />
        <Cards />
        <Marque imgs={imgBanner} />
        <NewsFlash />
        <Marque imgs={imgPartner} />
      </div>
    </>
  );
}

export default Home;