import { Link } from "react-router-dom"

const Hero = () => {
    return (
      <div className={`text-center flex h-[80vh] lg:h-[90vh] w-full bg-no-repeat bg-cover bg-[url('/assets/home/mobile/image-header.jpg')] lg:[url('/assets/home/desktop/image-hero.jpg')] md:[url('/assets/home/tablet/image-header.jpg')] bg-center text-white`}>
        <div className=' text-center lg:text-left items-center lg:items-start lg:px-[150px]  justify-center flex flex-col'>
          <p className='font-thin text-[#adabab] tracking-[0.8em] pb-3'>NEW PRODUCT</p>
          <p className='font-[500] text-[45px]'>XX99 MARK II</p>
          <p className='font-[500] mt-[-20px] text-[45px]'>HEADPHONES</p>
          <p className='font-thin text-lg pt-3 pb-6 mb-2 tracking-wider lg:pl-0 lg:pr-[450px] px-10 md:px-[190px] text-[#adabab]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className=' bg-brown hover:bg-light-brown tracking-widest text-lg px-10 py-5'><Link to={'/xx99mark2'}>SEE PRODUCT</Link> </button>
        </div>
      </div>
    )
  }
  
  export default Hero
  