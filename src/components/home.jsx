import React from 'react';
// import { Fade } from 'react-reveal';
import Logo from '../assets/logo.png';
// import { Slide } from 'react-reveal';
import Navbar from './navbar';
import ParticleBackground from './ParticlesBackground';


const Home = () => {


  return (
<div>
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
    <ParticleBackground />
  </div>
  <div style={{ zIndex: 1 }}>
    <Navbar />
  </div>
  <div className='flex justify-center items-center  mt-[200px]' style={{ zIndex: 0 }}>
    {/* <Slide left> */}
    <img src={Logo} alt='amfoss logo' style={{ width: '450px', height: '80px' }} />
    {/* </Slide> */}
  </div>
  <div className='text-center mt-4'>
    {/* <Fade right> */}
    <p className='text-xl font-semibold text-white'>India's Leading</p>
    <p className='text-2xl font-bold text-yellow-500'>FOSS & Computer Science Club.</p>
    {/* </Fade> */}
    <p className='text-white max-w-lg mx-auto px-3 py-3 md:mx-auto text-center'>
      <b>amFOSS</b>, a student-run community with over 50+ members from Amrita Vishwa Vidyapeetham, Amritapuri, over the last 14 years, has helped 100+ passionate students to transform into successful & innovative engineers who today work across the world in Fortune 500 Companies loving what they do.
    </p>
  </div>
</div>

  );
};

export default Home;
