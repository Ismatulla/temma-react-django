import React from 'react';

import { Typography } from "@mui/material";
import {fonts}  from "../../constants/fonts";
import Buttons from "../button/Button";
function StudyForm() {
  return (
    <div style={{marginBottom:"3rem"}}>
      <Typography variant="h3" sx={{ fontWeight: fonts.fontWeight, fontFamily: fonts.fontBase, display: 'block' }}>Studie forum</Typography>
      <Typography variant="p" sx={{ fontSize: fonts.paragraph, lineHeight: fonts.lineHeight, display: 'block', marginBottom: { sm: '2rem', md: "3rem" } }}>Because we believe that good preparation is half the battle! Ask your most burning and brutally honest questions about your study here , and get answers from older students! About how YOU get your propaedeutic diploma right away to all the fun extracurricular activities that are being organized.</Typography>
      <Buttons text={'Zoek jouw studievereniging'} />
    </div>
  );
}

export default StudyForm;