
import React from 'react';

import logoTemma from '../../assets/images/Temma.svg'
import helpPartner from '../../assets/images/helping-partner.png'
import Buttons from '../button/Button'
import { fonts } from '../../constants/fonts'

export default function Hero() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5rem" }}>
      <div className="text">
        <div>
          <div style={{ marginBottom: "4rem" }}>
            <img src={logoTemma} alt="not found" />
          </div>
          <ul style={{ padding: fonts.reset }}>
            <li style={{ fontSize: fonts.paragraph, margin: fonts.bottomMargin }}>Compare studies and study associations</li>
            <li style={{ fontSize: fonts.paragraph, margin: fonts.bottomMargin }}>ask general or very specific study questions</li>
            <li style={{ fontSize: fonts.paragraph, margin: fonts.bottomMargin }}>use our online community that helps with your rights and obligations as astudent.</li>
            <li style={{ fontSize: fonts.paragraph, margin: fonts.bottomMargin }}>Oh and stay up-to-date on all facilities and regulations that come with studying !</li>
          </ul>
          <p style={{ fontSize: fonts.paragraph }}>Temma: everything about, under and around your study time!</p>
        </div>
        <Buttons text='Get help !' />
      </div>
      <div>
        <img src={helpPartner} alt="" width={'544px'} height={'481px'} />
      </div>
    </div>
  )
}
