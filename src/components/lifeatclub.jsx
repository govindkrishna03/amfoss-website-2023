import React from 'react'
import Navbar from './navbar'

const Club = () => {
  return (
    <div className='h-24 max-w-[1240px] mx-auto px-1  items-center justify-center'>
        <div>
            <Navbar/>
        </div>
        <div className='p-2 bg-yellow-500'>
  <h1 className='text-black text-center font-bold text-4xl'>Life in Club</h1>
</div>
<div className='text-white py-10 flex flex-col md:flex-row'>
  <div>
    <h1 className='p-10 text-[5rem]  font-bold'>Mentorship</h1>
    <p className='p-10'>At <b className='text-xl'>amFOSS</b>, the bond between juniors and seniors forms the backbone of our community where juniors receive individual mentorship by seniors and alumni. Mentors guide and track a mentee’s technical progress, aptitude and everything in between, in an atmosphere ideal for growth - of mutual trust and understanding.</p>
    </div>
    <img src="" alt="club pictures" />
</div>

    </div>
  )
}

export default Club