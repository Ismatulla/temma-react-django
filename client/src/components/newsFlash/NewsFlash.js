import React from 'react';
import { Link } from '@mui/material';

import Carousel from 'react-bootstrap/Carousel'
import { Typography } from "@mui/material"
import newsflash1 from '../../assets/images/newsflash.png'
import newsflash2 from '../../assets/images/newsflash-3.png'
import newsflash3 from '../../assets/images/newsflash-2.png'
import logo from '../../assets/images/newsflash-logo.svg'
import logo3 from '../../assets/images/newsflash-logo3.svg'
import logo2 from '../../assets/images/newsflash-2.svg'
import Buttons from '../button/Button';
import { fonts } from '../../constants/fonts';
export default function NewsFlash() {


  return (
    <>
      <Typography variant="h2" sx={{ fontFamily: fonts.fontBase, fontWeight: 'bold', }}>News-<i>flash</i></Typography>
      <Typography variant="p" sx={{ fontSize: "1.2rem", fontWeight: 400, margin: '2rem 0', display: 'block' }}>Useful information, tips and tricks for your studies.</Typography>
      <Carousel style={{ maxHeight: "355px", marginBottom: "10rem", position: "relative", backgroundColor: '#fbfbfb' }}>
        {/* first slide */}
        <Carousel.Item >
          <img src={newsflash1} alt="not found" width="100%" />
          <img src={logo} style={{ position: 'absolute', top: 0, right: '2rem' }} alt="not found" />
          <Carousel.Caption style={{ position: "absolute", top: '0rem', left: '3rem' }}>
            <h1 style={{ textAlign: "left", color: 'black', fontFamily: fonts.fontBase, fontWeight: 'bold' }}>Register in time!</h1>
            <p style={{ textAlign: "left", color: '#000000', fontSize: "1.2rem", maxWidth: "442px", }}><span style={{ color: '#ffb74a' }}>LET OP!</span>ALERT! After 1 May, universities of applied sciences and universities may refuse your application or set additional conditions for your admission (suchas a compulsory study choice check). So do it NOW!
              <br />
              <br />
              For more information, go here
              to the website of studiekeuze123
              or www.studielink.nl</p>
            <Link sx={{ textDecoration: 'none', textAlign: 'left', display: 'block' }} href="https://www.studiekeuze123.nl/" target="_blank">
              <Buttons text={"Ga naar website"} />
            </Link>
            <p class="note-of-slide" style={{ right: "-8rem" }}>#zethetinjeagendaofzo</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* end */}
        {/* 2nd slide */}
        <Carousel.Item style={{ height: "355px" }}>
          <img src={newsflash2} alt="not found" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "650px", marginTop: "2rem" }} />
          <img src={logo2} style={{ position: 'absolute', top: '-2.5rem', right: '0' }} alt="not found" />
          <Carousel.Caption style={{ right: "0", left: "2rem", top: 0 }}>
            <h1 style={{ textAlign: "left", color: 'black', fontFamily: fonts.fontBase, fontWeight: 'bold' }}>DUO supplementary grant!</h1>
            <p style={{ textAlign: "left", color: '#000000', fontSize: "1.2rem", maxWidth: "442px", }}>Supplementary grant <span style={{ color: '#ffb74a' }}>from 2023</span>op tot €430,27 per maand! <br />
              Check the website for more information</p>
            <Link sx={{ textDecoration: 'none', textAlign: 'left', display: 'block', marginTop: "4rem" }} href="https://duo.nl/particulier/" target="_blank">
              <Buttons text={"Ga naar website"} />
            </Link>
            <p class="note-of-slide">#Laatgeengeldliggen</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* end */}
        {/* 3rd image  */}
        <Carousel.Item style={{ height: "420px", backgroundColor: "#FCEFDD" }}>
          <img src={newsflash3} alt="not found" width="100%" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "580px", marginTop: "0" }} />
          <img src={logo3} style={{ position: 'absolute', top: '-2.5rem', right: '0' }} alt="not found" />
          <Carousel.Caption style={{ right: "0", left: "2rem", top: 0 }}>
            <h1 style={{ textAlign: "left", color: 'black', fontFamily: fonts.fontBase, fontWeight: 'bold', }}>DUO <br /> Study term extension settlement!</h1>
            <p style={{ textAlign: "left", color: '#000000', fontSize: "1.2rem", maxWidth: "442px" }}><span style={{ color: '#ffb74a' }}>LET OP!</span> This settlement from DUO can save you more than €35.000</p>

            <Link sx={{ textDecoration: 'none', textAlign: 'left', display: 'block', marginTop: "4rem" }} href="https://duo.nl/particulier/" target="_blank">
              <Buttons text={"Ga naar website"} />
            </Link>
            <p class="note-of-slide" style={{ marginTop: "2rem" }}>#kunjeookmeeopvakantieofzo</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}
