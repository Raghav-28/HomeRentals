import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import {LiaCertificateSolid} from 'react-icons/lia'
const Achievements = () => {

  const [isVisible, setIsVisible]= useState(false);

  const statistics = [
    {label : "Happy clients" , value : 12},
    {label : "Different clients" , value : 3},
    {label : "Projects Completed" , value : 45},
  ]

  useEffect(()=>{
    const handleScrol =()=>{
      const aboutSection = document.getElementById('about');
      if(aboutSection){
        const top = aboutSection.getBoundingClientRect().top;
        const isVisible= top < window.innerHeight -100;
        setIsVisible(isVisible);
      }
    }
    window.addEventListener('scroll', handleScrol)

    // cleanup function to remove event listner
    return ()=>{
      window.removeEventListener('scroll',handleScrol);
    }
  },[])

  return (
    <section id='about' className='mx-auto max-w-[1440px]'>
      <div className='flex flex-col xl:flex-row'>
        <div className='flex-[6] flex justify-center flex-col bg-[#008274] text-white px-6 lg:px-12 py-16'>
          <h2 className='h2'>Our Achievements</h2>
          <p className='py-5 text-white max-w-[47rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque non provident quos, beatae a reiciendis iure illo aperiam, eligendi ex, delectus inventore voluptatem in incidunt pariatur. Quas, quod possimus quos porro fugit quam.</p>
          <div className='flex flex-wrap gap-4'>
  {statistics.map((statistic, index) => (
    <div key={index} className='p-4 rounded-lg'>
      <div className='flex items-center gap-1'>
        <h3 className="text-5xl font-sans">
          <CountUp start={isVisible ? 0 : null} end={statistic.value} duration={10} delay={1} />
        </h3>
        <h4 className="regular-32">k+</h4>
      </div>
      <p className='text-white capitalize pt-2'>{statistic.label}</p>
    </div>
  ))}
</div>
        </div>
        <div className='flex-[2] relative bg-primary px-6 lg:px-12 py-16 flexCenter'>
          <div className='p-4 rounded-lg flexCenter flex-col xl:rotate-90'>
            <span className='relative bottom-8 p-3 flex items-center rounded-full'><LiaCertificateSolid className='text-5xl text-black'/></span>
            <span className='relative bottom-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolore neque, ullam quam maxime cupiditate quia atque. Nesciunt facere voluptate excepturi repudiandae.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
