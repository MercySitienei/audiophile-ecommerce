import { Link } from "react-router-dom"
import BestGear from "../components/BestGear"
import Categories from "../components/Categories"

const Headphones = () => {
  return (
    <div>
      <div className='bg-light-black text-white '>
        <h1 className="tracking-wider text-center py-7 md:py-[70px] font-semibold text-[25px] ">HEADPHONES</h1>
      </div>
      <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:px-[150px] lg:pb-0 pb-[130px] ">
        <div className="bg-mobile-xx99markII md:bg-tablet-xx99markII bg-cover lg:bg-desktop-xx99markII bg-no-repeat bg-center mx-5 md:mx-7 mt-[60px] md:mt-[85px] mb-5 lg:h-[400px] h-[400px]">
        </div>
        <div className="lg:mt-[150px] lg:pl-8">
          <h1 className="text-brown py-8 lg:py-0 text-lg lg:text-sm tracking-[0.5em]">NEW PRODUCT</h1>
          <h2 className="text-[33px] lg:text-[27px] font-bold tracking-wider">XX99 MARK II</h2>
          <h2 className="text-[33px] lg:text-[27px] mt-[-7px] font-bold tracking-wider">HEADPHONES</h2>
          <p className="px-5 lg:text-xs lg:px-0 md:px-[100px] text-[#adabab] py-6">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button className=' bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 lg:py-2 lg:px-6 py-4'><Link to={'/xx99mark2'}>SEE PRODUCT</Link> </button>
        </div>
      </div>
      <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:px-[150px] lg:pb-0 pb-[130px] ">
        <div className="bg-mobile-xx99markI lg:col-start-2 md:bg-tablet-xx99markI bg-cover lg:bg-desktop-xx99markI bg-no-repeat bg-center mx-5 md:mx-7 mt-[60px] md:mt-[85px] mb-5 lg:h-[400px] h-[400px]">
        </div>
        <div className="lg:mt-[150px]  lg:row-start-1 lg:pl-8">
          <h2 className="text-[33px] lg:text-[27px] font-bold tracking-wider">XX99 MARK I</h2>
          <h2 className="text-[33px] lg:text-[27px] mt-[-7px] font-bold tracking-wider">HEADPHONES</h2>
          <p className="px-5 lg:text-xs lg:px-0 md:px-[100px] text-[#adabab] py-6">As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <button className=' bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 lg:py-2 lg:px-6 py-4'><Link to={'/xx99mark1'}>SEE PRODUCT</Link></button>
        </div>
      </div>
      <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:px-[150px] pb-[130px] ">
        <div className="bg-mobile-xx59 md:bg-tablet-xx59 bg-cover lg:bg-desktop-xx59 bg-no-repeat bg-center mx-5 md:mx-7 mt-[60px] md:mt-[85px] mb-5 lg:h-[400px] h-[400px]">
        </div>
        <div className="lg:mt-[150px] lg:pl-8">
          <h2 className="text-[33px] lg:text-[27px] font-bold tracking-wider">XX59</h2>
          <h2 className="text-[33px] lg:text-[27px] mt-[-7px] font-bold tracking-wider">HEADPHONES</h2>
          <p className="px-5 lg:text-xs lg:px-0 md:px-[100px] text-[#adabab] py-6">Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <button className=' bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 lg:py-2 lg:px-6 py-4'><Link to={'/xx59'}>SEE PRODUCT</Link></button>
        </div>
      </div>
      <div>
        <Categories/>
      </div>
      <div className="mb-11">
        <BestGear/>
      </div>
    </div>
  )
}

export default Headphones
