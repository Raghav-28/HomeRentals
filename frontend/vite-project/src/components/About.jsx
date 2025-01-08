import React from 'react'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import {FaInbox, FaList, FaScreenpal , FaUpDown, FaUsb, FaUser} from 'react-icons/fa6'
import { FaEnvelope, FaMap, FaMapMarkedAlt,  } from 'react-icons/fa'


const About = () => {
  return (
    <section className='max-padd-container pb-16 xl:pb-26'>
      <div className='flex items-center flex-col lg:flex-row gap-12'>
      {/* IMAGE LEFT SIDE */}
      <div className='flex-1'>
        <div className='relative'>
          <img src={about1} alt="about.img" className='rounded-3xl'/>
          <span className='absolute top-8 left-8 bg-white px-2 rounded-full medium-14'>San Francisco</span>
        </div>
      </div>
    {/* INFO RIGHT SIDE */}
    <div className='flex-1'>
      <h2 className='h2'>Empowering You to Find Your Dream Home, Effortlessly</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid laborum nobis, distinctio molestias fuga natus, earum ut sint dicta at deleniti?</p>
      <div className='flex flex-col gap-6 mt-5'>
        <div className='flex gap-5'>
          <FaScreenpal className='text-secondary'/>
          <p>Virtual property tours and viewings</p>
        </div>
        <div className='flex gap-5'>
          <FaUpDown className='text-secondary'/>
          <p>Real time market and price Update</p>
        </div>
        <div className='flex gap-5'>
          <FaMap className='text-secondary'/>
          <p>Interactive floor plan and Maps</p>
        </div>
        <div className='flex gap-5'>
          <FaMapMarkedAlt className='text-secondary'/>
          <p>Access to off-market Properties</p>
        </div>
        <div className='flex gap-5'>
          <FaEnvelope className='text-secondary'/>
          <p>Direct messaging with agents and owners</p>
        </div>
      </div>
    
    </div>
      </div>
{/* SECONDARY CONTAINER  */}
      <div className='flex items-center flex-col lg:flex-row gap-12 mt-36'>
    {/* INFO left SIDE */}
    <div className='flex-1'>
      <h2 className='h2'>Simplyfying Your Real Estate Journey Every Step of the Way</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid laborum nobis, distinctio molestias fuga natus, earum ut sint dicta at deleniti?</p>
      <div className='flex flex-col gap-6 mt-5'>
        <div className='flex gap-5'>
          <FaList className='text-secondary'/>
          <p>In-app scheduling for property viewings</p>
        </div>
        <div className='flex gap-5'>
          <FaUpDown className='text-secondary'/>
          <p>Real time market and price Update</p>
        </div>
        <div className='flex gap-5'>
          <FaInbox className='text-secondary'/>
          <p>User-friendly Interface for smooth navigation</p>
        </div>
        <div className='flex gap-5'>
          <FaUser className='text-secondary'/>
          <p>Detailed agent and relator profiles</p>
        </div>
        <div className='flex gap-5'>
          <FaMapMarkedAlt className='text-secondary'/>
          <p>Access to off-market properties</p>
        </div>
      </div>
    
    </div>
    {/* IMAGE Rght SIDE */}
    <div className='flex-1'>
        <div className='relative flex justify-end'>
          <img src={about2} alt="about.img" className='rounded-3xl'/>
          <span className='absolute top-8 right-8 bg-white px-2 rounded-full medium-14'>Golden Coast</span>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default About
