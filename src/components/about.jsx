import React from 'react';
import Navbar from './navbar';
import mentor from '../assets/vipin_sir.jpg'
import ibm from '../assets/ibm-great-mind.png'
import scff from '../assets/sun-code-for-freedom.png'
import fossgrp from '../assets/foss_group.jpg'
import Footer from './footer';
const About = () => {
    return (
        <div className='h-24 max-w-[1240px] mx-auto px-1  items-center justify-center'><div>
            <Navbar />
        </div>
        <div className='p-2 bg-yellow-500'>
  <h1 className='text-black text-center font-bold text-4xl'>About the club</h1>
</div>
<div className='py-10 flex flex-col md:flex-row'>
  <div className='flex-1 p-2 md:p-0 flex justify-center items-center'>
    <img src={mentor} alt='vipin_sir' className='w-full max-w-md md:max-w-full h-auto md:rounded-lg' />
  </div>
  <div className='flex-1 pl-8 justify-center items-center'>
  <h1 className='text-white font-bold p-5 mx-auto text-center  text-4xl'>The Spark</h1>
  <div className='text-white  p-5 text-center border-b-2 border-white'>
    <p className='text-md md:text-lg'>
      The club’s story starts when its founder, Mr. Vipin Pavithran, joined Amrita University in 2006 after ten years of experience with the software industry in the US. The readiness to guide and mentor was the spark. His willingness to help and bring out the best in each student who he mentored, provided the fundamentals of what the club is established on. He believes that each student has great potential which is to be brought out, which is now delivered through the club activities.
    </p>
  </div>
  <blockquote className='text-white text-base md:text-xl md:text-center p-5 mt-5'>
    "I know the value of right guidance at the right time and how it can make a huge impact. This made me want to help anyone who needed guidance."
  </blockquote>
</div>

</div>
<div className='py-10 flex flex-col md:flex-row'>
  <div className='flex-1'>
    <h1 className='text-white font-bold py-3 text-center  text-4xl'>A Humble Beginning</h1>
    <div className='text-white md:text-left p-5 text-md'>
      <p className='mb-5'>
        In the summer of 2006, he was approached by Abhilash T G, seeking a mentor to participate in the IBM Great Mind Challenge 2006. Soon a team of enthusiasts was formed and rigorous preparation had been initiated. Initially, the students were not confident of getting selected, let alone winning; however, they were highly motivated and enthusiastic about it. At the same time, Vipin sir was confident in his students as he was certain that his students would come on top.
      </p>
      <p className='mb-5'>
        Months passed, with the team working day and night under intense preparation focusing only on their goal. They missed out on their usual college life and were often mocked by their classmates. In fact, there were instances when nothing went their way and they thought of giving up, but they were motivated and pushed forward by Vipin sir.
      </p>
      <p>
        In the end, they ended up among the Top 5 teams from India and were invited to Mumbai for the prize distribution ceremony. This was the first national-level prize to be won by Amritapuri students.
      </p>
    </div>
  </div>
  <div className='flex-1 md:pl-8 flex items-center justify-center mt-5'>
  <img src={ibm} alt='ibm2007' className='max-w-full h-auto md:rounded-lg' />
</div>

</div>
<div className='py-10 flex flex-col md:flex-row'>
  <div className='flex-1 mt-[100px]  '>
    <img src={scff} alt='vipin_sir' style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
  <div className='flex-1 pl-8'>
    <h1 className='text-white font-bold py-5 text-center text-4xl'>Winning the Sun Code for Freedom</h1>
    <p className='text-white text-left p-5'>Motivated by the success, Vipin sir started searching for more contests at the national and international level. He then came across the Sun Code For Freedom 2008, conducted by Sun Microsystems, which was about contributing to their open source projects. It had already been 2 months since the contest started and Avinash Joshi, a third-year student was put on to work on contributing to Open Solaris, the open sourced version of Solaris operating system from Sun Microsystems. Avinash who had just completed his course on Operating System was now expected to contribute to one with over 9 million lines of code. After two months of intense effort Avinash finally figured out how to contribute and started contributing to it. He documented the entire process so that his peers could also get started with it and soon enough many students started contributing to it.
<br></br>
<br></br>
Every day, students would stay back in the lab till late and work on contributing to various open source software from Sun Microsystems. When the contest was judged, Amrita Vishwa Vidyapeetham emerged as the champion university, with a total of 105 contributions. The team that came second had only 10 contributions in total. Our students were invited to Hyderabad for the Sun Tech Days 2008 where the prizes were awarded. After this, students started regularly contributing to Sun Open Source products with the active support of Sun Microsystems.</p>
  </div>
</div>
<div className='py-10 flex flex-col md:flex-row '>
  <div className='flex-1 flex flex-col items-center justify-center md:items-start md:justify-center'>
    <h1 className='text-white font-bold py-3 text-center md:text-left text-4xl'> Gaining Recognition through GSoC</h1>
    <p className='text-white text-left md:text-left p-5 text-md'>In 2010, Vipin sir chanced upon Google Summer of Code, and 3 members of the club got selected for the first time. Over the years, through the experiences shared by the seniors, more and more students started participating in GSoC. Having started with a strength of 10 members, the club now has about 50 active members, and several alumni actively mentoring the club.</p>
  </div>
  <div className='flex-1 pl-8 flex items-center justify-center md:justify-start mt-5'>
    <img src={fossgrp} alt='ibm2007' style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
</div>
<div>
<Footer/>
</div>

        </div>
    );
};

export default About;
