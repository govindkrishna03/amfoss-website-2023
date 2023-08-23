import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HashLink as Link1 } from 'react-router-hash-link';
import Logo from '../assets/logo.png';


// import fossLogo from '../assets/foss_logo.jpeg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>   <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-1 text-white'>
      <Link  to="/"><img src={Logo} alt='amfoss logo' style={{ width: '107px', height: '21px' }} /></Link>
      <ul className='hidden md:flex'>

        <li className='px-6 hover:bg-yellow-500 hover:text-gray-800 hover:rounded-2xl transition duration-300'><Link1 to="/about">About</Link1></li>
        <li className='px-6 hover:bg-yellow-500 hover:text-gray-800 hover:rounded-2xl transition duration-300'><Link to="/home">Achievements</Link></li>
        <li className='px-6 hover:bg-yellow-500 hover:text-gray-800 hover:rounded-2xl transition duration-300'><Link to='/members'>Members</Link></li>
        <li className='px-6 hover:bg-yellow-500 hover:text-gray-800 hover:rounded-2xl transition duration-300'><Link to='/register'>Projects</Link></li>
        <li className='px-6 hover:bg-yellow-500 hover:text-gray-800 hover:rounded-2xl transition duration-300'><Link to='/register'>Blogs</Link></li>
        <li className='px-6 hover:bg-yellow-500 hover:text-gray-800 hover:rounded-2xl transition duration-300'><Link to='/register'>Life in Club</Link></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden '>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-black border-r-gray-900 bg-yellow ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div className='flex justify-center items-center h-24 p-4'>
        <Link  to="/"><img src={Logo} alt='amfoss logo' style={{ width: '107px', height: '21px' }} /></Link>
        </div>
        <li className='py-6 hover:text-yellow-500 hover:rounded-2xl transition duration-300'><Link1 to="/about">About</Link1></li>
        <li className='py-6 hover:text-yellow-500 hover:rounded-2xl transition duration-300'><Link to="/home">Achievements</Link></li>
        <li className='py-6 hover:text-yellow-500 hover:rounded-2xl transition duration-300'><Link to='/members'>Members</Link></li>
        <li className='py-6 hover:text-yellow-500 hover:rounded-2xl transition duration-300'><Link to='/register'>Projects</Link></li>
        <li className='py-6 hover:text-yellow-500 hover:rounded-2xl transition duration-300'><Link to='/register'>Blogs</Link></li>
        <li className='py-6 hover:text-yellow-500 hover:rounded-2xl transition duration-300'><Link to='/register'>Life in Club</Link></li>
        

      </ul></div></div>

);
};  

export default Navbar;
