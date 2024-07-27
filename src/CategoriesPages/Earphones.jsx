import { Link } from "react-router-dom"
import BestGear from "../components/BestGear"
import Categories from "../components/Categories"

const Earphones = () => {
  return (
    <div>
        <div className='bg-light-black text-white '>
            <h1 className="tracking-wider text-center py-7 md:py-[70px] font-semibold text-[25px] ">EARPHONES</h1>
        </div>
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:px-[150px]  pb-[130px] ">
            <div className="bg-mobile-yx1-earphones md:bg-tablet-yx1-earphones bg-cover lg:bg-desktop-yx1-earphones bg-no-repeat bg-center mx-5 md:mx-7 mt-[60px] md:mt-[85px] mb-5 lg:h-[400px] h-[400px]">
            </div>
            <div className="lg:mt-[150px] lg:pl-8">
                <h1 className="text-brown py-8 lg:py-0 text-lg lg:text-sm tracking-[0.5em]">NEW PRODUCT</h1>
                <h2 className="text-[33px] lg:text-[27px] font-bold tracking-wider">YX1 WIRELESS</h2>
                <h2 className="text-[33px] lg:text-[27px] mt-[-7px] font-bold tracking-wider">EARPHONES</h2>
                <p className="px-5 lg:text-xs lg:px-0 md:px-[100px] text-[#adabab] py-6">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation features.</p>
                <button className=' bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 lg:py-2 lg:px-6 py-4'> <Link to={'/yx1'} >SEE PRODUCT</Link> </button>
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

export default Earphones
