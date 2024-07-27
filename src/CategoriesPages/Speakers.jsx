import Categories from '../components/Categories'
import BestGear from '../components/BestGear'
import { Link } from 'react-router-dom'

const Speakers = () => {
return (
    <div>
        <div className='bg-light-black text-white '>
            <h1 className="tracking-wider text-center py-7 md:py-[70px] font-semibold text-[25px] ">SPEAKERS</h1>
        </div>
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:px-[150px] lg:pb-0 pb-[130px] ">
            <div className="bg-mobile-zx9 md:bg-tablet-zx9 bg-cover lg:bg-desktop-zx9 bg-no-repeat bg-center mx-5 md:mx-7 mt-[60px] md:mt-[85px] mb-5 lg:h-[400px] h-[400px]">
            </div>
            <div className="lg:mt-[150px] lg:pl-8">
                <h1 className="text-brown py-8 lg:py-0 text-lg lg:text-sm tracking-[0.5em]">NEW PRODUCT</h1>
                <h2 className="text-[33px] lg:text-[27px] font-bold tracking-wider">ZX9</h2>
                <h2 className="text-[33px] lg:text-[27px] mt-[-7px] font-bold tracking-wider">SPEAKER</h2>
                <p className="px-5 lg:text-xs lg:px-0 md:px-[100px] text-[#adabab] py-6">Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity creating new possibilities for more pleasing and practical audio setups.</p>
                <button className=' bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 lg:py-2 lg:px-6 py-4'><Link to={'/zx9speaker'}>SEE PRODUCT</Link> </button>
            </div>
        </div>
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:px-[150px] pb-[130px] ">
            <div className="bg-mobile-zx7-speaker lg:col-start-2 md:bg-tablet-zx7-speaker bg-cover lg:bg-desktop-zx7-speaker bg-no-repeat bg-center mx-5 md:mx-7 mt-[60px] md:mt-[85px] mb-5 lg:h-[400px] h-[400px]">
            </div>
            <div className="lg:mt-[150px]  lg:row-start-1 lg:pl-8">
                <h2 className="text-[33px] lg:text-[27px] font-bold tracking-wider">ZX7</h2>
                <h2 className="text-[33px] lg:text-[27px] mt-[-7px] font-bold tracking-wider">SPEAKER</h2>
                <p className="px-5 lg:text-xs lg:px-0 md:px-[100px] text-[#adabab] py-6">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                <button className=' bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 lg:py-2 lg:px-6 py-4'><Link to={'/zx7speaker'}>SEE PRODUCT</Link></button>
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

export default Speakers
