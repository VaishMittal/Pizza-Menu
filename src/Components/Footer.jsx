import React from 'react'
import Order from './Order';

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour =12;
  const isOpen = hour>=openHour && hour<=closeHour;
  console.log(isOpen);

  return (
    
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ):(
        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
      )}
    </footer>
  )
}

export default Footer
