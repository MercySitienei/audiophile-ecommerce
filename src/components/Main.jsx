import zx9image from '../../public/assets/home/tablet/image-speaker-zx9.png'
import BestGear from './BestGear'
import Categories from './Categories'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <div className='my-20 md:py-20 py-10'>
      <Categories/>
      <div className=' bg-brown overflow-hidden text-white flex flex-col lg:flex-row m-5 lg:mx-auto lg:w-[83vw] lg:gap-[80px] pb-[80px] lg:pb-0 mt-[130px] items-center text-center lg:text-start rounded-md justify-between lg:h-[350px] lg:pt-[70px] h-[750px]'>
        <div className='relative rounded-[50%] border-light-gray border-opacity-20  border-[1px] w-[380px] lg:w-[580px] h-[380px] lg:h-[480px]  mx-auto flex justify-center items-center '>
          <div className='absolute w-[330px] h-[330px] rounded-[50%] border-light-gray border-opacity-20 border-[1px] items-center flex justify-center'> <img className='h-[220px]  lg:h-[299px] lg:w-[230px]  w-[170px]' src={zx9image} alt="zx9speaker"/></div>
        </div>
        <div className='flex flex-col h-[39%] lg:h-[60%] items-center lg:text-start lg:items-start text-center rounded-md justify-between'>
          <h1 className='text-[50px] lg:text-[40px] mt-[-70px] tracking-wider font-[600]'>ZX9</h1>
          <h1 className='text-[50px] lg:text-[40px] tracking-wider mt-[-50px] font-[600]'>SPEAKER</h1>
          <p className='px-4 lg:pl-0 md:mx-[150px] lg:mx-[0px] lg:pr-10 text-lg opacity-70 tracking-wide'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className=' bg-black hover:bg-[#333333] lg:py-2 lg:px-[20px] py-5 px-[45px] tracking-widest lg:text-[12px] text-[17px] '><Link to={'/zx9speaker'}>SEE PRODUCT</Link></button>
        </div>
      </div>
      <div className='flex flex-col lg:items-center '>
        <div className=' bg-mobile-zx7 lg:w-[83vw] md:bg-tablet-zx7 lg:bg-desktop-zx7 bg-no-repeat bg-cover bg-center mx-5 rounded-md '>
          <div className='h-[350px] pl-5 md:pl-[45px] flex flex-col justify-center'>
            <h1 className='font-[600] tracking-wider text-[35px]'>ZX7 SPEAKER</h1>
            <button className='py-3 mt-8 font-[500] border-black hover:bg-black hover:text-white w-[200px] border-[1.5px] px-[36px] tracking-wider text-[17px]'><Link to={'zx7speaker'}>SEE PRODUCT</Link></button>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:w-[83vw] md:grid-cols-2 lg:grid-cols-2 md:gap-3 mx-5 mt-7'>
          <div className='bg-mobile-yx1 md:bg-tablet-yx1 lg:bg-desktop-yx1 bg-center bg-cover bg-no-repeat rounded-md  h-[300px]'></div>
          <div className='mt-7 md:mt-0 lg:mt-0 flex-col flex pl-6 md:pl-11 lg:pl-[55px] justify-center md:h-[300px] lg:h-[300px] h-[250px] rounded-md bg-gray'>
            <h1 className='font-[600] tracking-wider text-[32px]'>YX1 EARPHONES</h1>
            <button className='py-3 mt-8 font-[500] border-black  hover:bg-black hover:text-white w-[200px] border-[1.5px] px-[36px] tracking-wider text-[17px]'><Link to={'/yx1'}>SEE PRODUCT</Link></button>
          </div>
        </div>
      </div>
      <BestGear/>
    </div>
  )
}

export default Main
