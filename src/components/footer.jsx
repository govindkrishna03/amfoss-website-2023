import React from 'react';
import amrita from '../assets/amrita.png'

const Footer = () => {
  return (
    <div className='bg-gray-900 p-5 flex justify-between items-center'>
    <img src={amrita} alt='amrita_logo' style={{width:'160px',height:'39px'}} />
    <p className='text-white'>&copy; Team amFOSS 2007-2023. All Rights Reserved.</p>
    <div className='flex space-x-4 p-2 text-white'>
      <a href='#privacy' className='text-white'>Privacy</a>
      <a href='mailto:amritapurifoss@gmail.com' className='text-white'>Feedback</a>
      <a href='https://coc.amfoss.in/' className='text-white'>Code Of Conduct</a>
    </div>
  </div>

  );
};

export default Footer;
