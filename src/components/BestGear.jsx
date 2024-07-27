
const BestGear = () => {
  return (
    <div>
        <div className='m-5 pt-[130px] flex lg:justify-center'>
            <div className='grid lg:w-[83vw] grid-cols-1 lg:grid-cols-2 lg:gap-3 md:grid-cols-1'>
            <div className='bg-mobile-best-gear md:bg-tablet-best-gear lg:col-start-2 lg:bg-desktop-best-gear bg-no-repeat bg-center rounded-md bg-cover lg:h-[500px] h-[350px]'></div>
            <div className='text-center lg:text-left flex flex-col lg:justify-center lg:col-start-1 lg:row-start-1 lg:h-[500px] px-0 lg:pl-0 lg:pr-[70px] md:px-[80px]'>
                <h2 className='font-bold text-[32px] px-5 lg:px-0 leading-none py-10 '>BRINGING YOU THE <span className=' text-brown'>BEST</span> AUDIO GEAR</h2>
                <p className='opacity-60 text-lg'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default BestGear
