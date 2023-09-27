import React, { useState } from 'react';
import Navbar from './navbar'
import Footer from './footer'
import ashray from '../assets/aashray446.webp'
import abhijith from '../assets/abhijitramesh.webp'
const Members = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const members = [
        { id: 1, name: 'Aashray Katiyar', image: ashray },
        { id: 2, name: 'Abhijith Ramesh', image: abhijith },
        { id: 3, name: 'Aditya Kumar', image: require('../assets/yashk2000.webp') },
        { id: 4, name: 'Akshat Tripathi', image: require('../assets/Akshatji800.webp') },
        { id: 5, name: 'Akshay V', image: require('../assets/akshayaky.webp') },
        { id: 6, name: 'Aman Kumar Singh', image: require('../assets/theamankumarsingh.webp') },
        { id: 7, name: 'Anantha Nandan', image: require('../assets/ananthanandanan.webp') },
        { id: 8, name: 'Anoushka Ramesh', image: require('../assets/anoura12.webp') },
        { id: 9, name: 'Anushman Swain', image: require('../assets/Anshuman-8.webp') },
        { id: 10, name: 'Arun Govind', image: require('../assets/arungovindm2001.webp') },
        { id: 11, name: 'David Tony Veliath', image: require('../assets/PunkSamurai42.webp') },
        { id: 12, name: 'Gautham Krishnan', image: require('../assets/gauthamk02.webp') },
        { id: 13, name: 'Geo Jolly', image: require('../assets/krishkavya.webp') },
        { id: 14, name: 'Govind Goel', image: require('../assets/52847415.webp') },
        { id: 15, name: 'Harikrishna Pillai', image: require('../assets/Harikrishna-AL.webp') },
        { id: 16, name: 'Kavya Krishnan', image: require('../assets/krishkavya.webp') },
        { id: 17, name: 'Lakshmi Warrier', image: require('../assets/lakshmi-warrier.webp') },
        { id: 18, name: 'Manoj S', image: require('../assets/manoj1749.webp') },
        { id: 19, name: 'Pakhi Banchalia', image: require('../assets/Pakhi07.webp') },
        { id: 20, name: 'Pavithra Nair', image: require('../assets/pavithranair.webp') },
        { id: 21, name: 'Pranavdhar', image:('') },
        { id: 22, name: 'R.V.Rajagopalan', image: require('../assets/rv602.webp') },
        { id: 23, name: 'Rishav Kumar', image: require('../assets/rishuriya.webp') },
        { id: 24, name: 'Shashank Priyadarshi', image: require('../assets/iamsh4shank.webp') },
        { id: 25, name: 'Sujith Bolisetty' ,image: require('../assets/73323807.webp') },
        { id: 26, name: 'Vyshnav Unnikrishnan', image: require('../assets/Vyshnav371.webp') },
        { id: 27, name: 'Yash Arora', image: require('../assets/yasharora102.webp') },
        { id: 28, name: 'Yash Khare', image: require('../assets/yashk2000.webp') },

    ];
    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      

    return (
        <div className='max-w-screen-xl mx-auto px-4'>
        <Navbar />
        <div className='p-5 bg-yellow-500'>
  <h1 className='text-black text-center font-bold text-4xl'>Members</h1>
</div>
<div className='mt-10'>
    <input
      type='text'
      placeholder='Search by name'
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className=' justify-center items-center flex mx-auto p-3 border border-gray-300 rounded'
    />
  </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-20'>
  {filteredMembers.map(member => (
                <div
                    key={member.id}
                    className='shadow-lg rounded-lg overflow-hidden hover:scale-105 duration-300 bg-white text-center'
                >
                    <img
                        className='object-cover w-full h-40 md:h-40 lg:h-60'
                        src={member.image}
                        alt='Card Image'
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                    <div className='py-2'>
                        <p className='text-lg font-semibold'>{member.name}</p>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
    </div>
);
}

export default Members;