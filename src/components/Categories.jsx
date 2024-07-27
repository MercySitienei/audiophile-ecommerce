import { Link } from 'react-router-dom'
import category_thumbnail_headphones from '../../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import category_thumbnail_speakers from '../../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import category_thumbnail_earphones from '../../public/assets/shared/desktop/image-category-thumbnail-earphones.png'

const Categories = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row md:gap-2 lg:gap-7 gap-20 px-4 justify-center items-center'>
            <div className='relative w-[90vw] md:w-[280px] lg:w-[26.5vw] h-[200px] bg-gray rounded-md text-center p-[20px]'>
                <div className='absolute top-[-30%] left-[50%] translate-x-[-50%]'>
                    <img className='w-[150px] h-auto' src={category_thumbnail_headphones} alt="headphones" />
                </div>
                <p className='mb-[20px] mt-[70px] font-bold text-[18px] tracking-wide '>HEADPHONES</p>
                <Link to={'/headphones'} className=' opacity-40 flex text-center hover:text-brown gap-6 justify-center items-center font-bold'> <span className='text-lg'>SHOP</span> <span><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span> </Link>
            </div>
            
            <div className='relative w-[90vw] md:w-[280px] lg:w-[26.5vw] h-[200px] bg-gray rounded-md text-center p-[20px]'>
                <div className='absolute top-[-30%] left-[50%] translate-x-[-50%]'>
                    <img className='w-[160px] h-auto' src={category_thumbnail_speakers} alt="speakers" />
                </div>
                <p className='mb-[20px] mt-[70px] font-bold text-[18px] tracking-wide '>SPEAKERS</p>
                <Link to={'/speakers'} className='opacity-40 flex text-center hover:text-brown gap-6 justify-center items-center font-bold'><span className='text-lg'>SHOP</span> <span><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></Link>
            </div>

            <div className='relative w-[90vw] md:w-[280px] lg:w-[26.5vw] h-[200px] bg-gray rounded-md text-center p-[20px]'>
                <div className='absolute top-[-30%] left-[50%] translate-x-[-50%]'>
                    <img className='w-[175px] h-auto' src={category_thumbnail_earphones} alt="earphones" />
                </div>
                <p className='mb-[20px] mt-[70px] font-bold text-[18px] tracking-wide '>EARPHONES</p>
                <Link to={'/earphones'} className='opacity-40 flex text-center hover:text-brown gap-6 justify-center items-center font-bold'><span className='text-lg'>SHOP</span> <span><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></Link>
            </div>
        </div>
    </div>
  )
}

export default Categories
