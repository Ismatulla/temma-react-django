import React from 'react';

import SingleCard from '../cards/SingleCard'
import { Box } from '@mui/system';
function Cards() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { sm: 'column', md: 'row' }, gap: '2rem', justifyContent: "space-around" }}>
      <SingleCard name={"Youssra"} bodyText={"What about resits if I fail my first exam?"} date={"april 21, 2022"} />
      <SingleCard name={'Emy'} bodyText={"What are the most difficult subjects if I am going to study medicine?"} date={"March 19, 2022"} />
      <SingleCard name={'Sander'} bodyText={"Is there a big difference between a study association and a student sorority?"} date={"March 15, 2022"} />
    </Box >
  );
}

export default Cards;