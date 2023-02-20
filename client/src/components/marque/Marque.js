import React from 'react';

import Marquee from "react-fast-marquee";

const Marque = ({ imgs }) => {

  return (
    <Marquee class="marque" pauseOnHover="true">
      {imgs.map((img, idx) => {
        return <img src={img} key={idx} alt="no image" />
      })}
    </Marquee>
  )
}
export default Marque