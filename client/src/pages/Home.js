import React from 'react';

import Hero from "../components/hero/Hero";
import { fonts } from "../constants/fonts";
import StudyForm from "../components/study/StudyForm";
import Cards from "../components/cards/Cards";
import Marque from "../components/marque/Marque";
import { imgBanner, imgPartner } from "../constants/marqueImgs";
import NewsFlash from "../components/newsFlash/NewsFlash";
import SupportCards from '../components/support/SupportCards';

function Home() {
  return (
    <>
      <Hero />
      <StudyForm />
      <Cards />
      <Marque imgs={imgBanner} />
      <NewsFlash />
      <Marque imgs={imgPartner} />
      <SupportCards />

    </>
  );
}

export default Home;