import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <div className='footer'>
      <p>Bronnen</p>
      <div className='footer_partners'>
        <div className='footer_list'>
          <ul>
            <li>Contactgegevens</li>
            <li>Amsterdam</li>
            <li>temma.student@gmail.com</li>
            <li>+31 6 1111 1111</li>
          </ul>
          <ul>
            <li> AVG</li>
            <li>Algemene informatie</li>
            <li> Algemene voorwaarden</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <div> <span>Copyricht © Temma 2023</span></div>
        <div className='footer_icon_container '>
          <span className='footer_icon'>
            <InstagramIcon className='footer_icon' /><LinkedInIcon className='footer_icon' />
          </span>
        </div>
      </div>
    </div>
  )
}
