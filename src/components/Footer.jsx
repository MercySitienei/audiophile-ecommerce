import { Link } from 'react-router-dom'
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black lg:grid lg:grid-cols-2 text-center text-white lg:pb-8 lg:px-[130px] p-5'>
      <h1 className='py-8 md:text-left md:px-5 text-[25px] font-bold'>audiophile</h1>
      <div className='flex lg:px-0 flex-col lg:justify-self-end md:flex-row md:px-5 lg:flex-row gap-5 text-sm tracking-widest items-center'>
        <Link className='hover:text-brown' to={'/'} >HOME</Link>
        <Link className='hover:text-brown' to={'/headphones'} >HEADPHONES</Link>
        <Link className='hover:text-brown' to={'/speakers'} >SPEAKERS</Link>
        <Link className='hover:text-brown' to={'/earphones'} >EARPHONES</Link>
      </div>
      <div className='md:grid md:grid-cols-2 lg:col-span-2 lg:grid lg:grid-cols-2'>
        <p className='py-10 md:text-left opacity-40 lg:col-span-1 md:col-span-2 px-5'>Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we are open 7 days a week.</p>
        <p className='opacity-40 lg:row-start-2 md:text-left md:px-5 md:flex md:items-center'>Copyright 2021. All Rights Reserved</p>
        <div className='flex py-8 w-full justify-center lg:justify-end lg:items-center gap-4 text-[25px]'>
          <a className='hover:text-brown' href=""> <AiFillFacebook/> </a>
          <a className='hover:text-brown' href=""> <FaTwitter/> </a>
          <a className='hover:text-brown' href=""> <FaInstagram/> </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
