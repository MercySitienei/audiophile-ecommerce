import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import BestGear from '../components/BestGear';
import { Products } from '../components/Products';

const Zx9Speaker = () => {
  const navigate = useNavigate();

  const initialCartState = JSON.parse(localStorage.getItem('cartItems')) || {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

  const [cartItems, setCartItems] = useState(initialCartState);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);
 
  const handleRemove = () => {
    setCartItems({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const addToCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] + 1 }));
  };

  const subFromCart = (id) => {
    if (cartItems[id] > 0) {
      setCartItems((cartItems) => ({ ...cartItems, [id]: cartItems[id] - 1 }));
    }
  };

  const totalAmount = () => {
    let amount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let productInfo = Products.find((product) => product.id === Number(key));
        if (productInfo) {
          amount += cartItems[key] * productInfo.price;
        }
      }
    }
    return amount;
  };

  return (
    <div className='pb-[95px] lg:px-[150px]'>
      <button className='py-7 text-[25px] lg:text-xs font-semibold pl-5 md:pl-7 opacity-50' onClick={handleBackClick}>Go Back</button>
      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 pb-[58px] lg:pb-[40px]">
        <div className="bg-mobile-zx9 md:bg-tablet-zx9 bg-cover lg:bg-desktop-zx9 bg-no-repeat bg-center rounded-lg mx-5 md:mx-7 mb-5 md:h-full md:w-[40vw] lg:w-[25vw] lg:h-[300px] h-[400px]"></div>
        <div className="py-6 px-5 lg:h-[300px] lg:pl-0">
          <h1 className="text-brown py-8 lg:py-0 text-lg md:text-sm lg:text-[8px] tracking-[0.5em]">NEW PRODUCT</h1>
          <h2 className="text-[33px] md:text-[28px] lg:text-[18px] font-bold tracking-wider">ZX9</h2>
          <h2 className="text-[33px] md:text-[28px] lg:text-[18px] mt-[-7px] font-bold tracking-wider">SPEAKER</h2>
          <p className="lg:text-[10px] lg:py-2 text-[#adabab] py-6">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <p className='text-[22px] lg:text-[12px] font-bold pb-7 pt-2'>$ 4,500</p>
          <div className='flex gap-8'>
            <div className='flex justify-around items-center h-[50px] lg:h-[30px] text-lg lg:text-xs lg:w-[80px] bg-gray w-[140px]'>
              <button className='opacity-50 hover:text-brown' onClick={() => subFromCart(5)}>-</button>
              <span className='font-semibold'>{cartItems[5]}</span>
              <button className='opacity-50 hover:text-brown' onClick={() => addToCart(5)}>+</button>
            </div>
            <button onClick={openCart} className='bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-[10px] px-5 lg:py-0 lg:px-3 py-3'>ADD TO CART</button>
            {isCartOpen && (
              <div  className='left-0 top-0  bg-black bg-opacity-30 md:flex md:justify-end text-black px-6 w-[100vw] h-[100vh] py-[120px] lg:py-[70px] fixed' id='cart'>
                <div ref={cartRef} id='yourCart' className='bg-white md:w-[50vw] lg:w-[20vw] md:self-start md:mr-7 lg:mr-[230px] rounded-md p-7 lg:pt-3 lg:pb-4 lg:px-4 grid grid-cols-1 gap-7 lg:gap-2'>
                  <div className='flex justify-between'>
                    <h2 className='font-bold tracking-wider text-lg lg:text-sm'>CART  ({Object.keys(cartItems).filter(key => cartItems[key] > 0).length})</h2>
                    <button className='opacity-60 hover:text-brown underline lg:text-xs' onClick={handleRemove}>Remove all</button>
                  </div>
                  <div className=''>
                    {Products.map(product => {
                      if (cartItems[product.id] > 0) {
                        return (
                          <div className='flex py-1 justify-between' key={product.id}>
                            <img className='w-[70px] lg:w-[50px] lg:h-[50px] h-[70px] rounded-lg' src={product.image} alt={product.name} />
                            <div className=' self-center'>
                              <div className='font-bold lg:text-xs'>{product.name}</div>
                              <div className='font-bold lg:text-xs opacity-40'>$ {product.price.toLocaleString()}</div>
                            </div>
                            <div className='flex justify-around ml-[50px] items-center self-center h-[33px] lg:h-[20px] text-lg lg:text-xs lg:w-[60px] bg-gray w-[110px]'>
                              <button className='opacity-50 hover:text-brown' onClick={() => subFromCart(product.id)}>-</button>
                              <span className='font-semibold text-sm lg:text-xs'>{cartItems[product.id]}</span>
                              <button className='opacity-50 hover:text-brown' onClick={() => addToCart(product.id)}>+</button>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                  <div className='flex justify-between'>
                    <span className='tracking-wider lg:text-xs opacity-40'>TOTAL</span>
                    <span className='font-bold lg:text-sm text-xl'>$ {totalAmount().toLocaleString()}</span>
                  </div>
                  <button className='bg-brown hover:bg-light-brown tracking-wider text-white py-4 lg:py-2 lg:text-xs text-sm'> <Link to={'/checkout'}>CHECKOUT</Link> </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='px-5 md:px-7 md:grid md:grid-cols-2'>
        <h1 className='font-bold tracking-wider md:col-span-2 lg:col-span-1 text-[24px] md:text-[30px] lg:text-[18px] py-7'>FEATURES</h1>
        <p className='text-lg lg:text-xs md:col-span-2 lg:col-span-1 lg:row-start-2 text-[#adabab] pb-[60px] md:pb-[150px] lg:pb-[70px]'>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). <br /> <br /> Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
        <h1 className='text-[24px] md:text-[30px] tracking-wider py-7 md:py-0 lg:text-[18px] lg:py-7 lg:pl-[110px] font-bold'>IN THE BOX</h1>
        <div className='text-[20px] lg:text-xs lg:pl-[110px]'>
          <div className='flex items-center gap-6 pb-4'>
            <span className='text-brown font-semibold'>2x</span>
            <span className='text-[#adabab]'>Speaker Unit</span>
          </div>
          <div className='flex items-center gap-6 pb-4'>
            <span className='text-brown font-semibold'>2x</span>
            <span className='text-[#adabab]'>Speaker Cloth Panel</span>
          </div>
          <div className='flex items-center gap-6 pb-4'>
            <span className='text-brown font-semibold'>1x</span>
            <span className='text-[#adabab]'>User Manual</span>
          </div>
          <div className='flex items-center gap-6 pb-4'>
            <span className='text-brown font-semibold'>1x</span>
            <span className='text-[#adabab]'>3.5mm 10m Audio Cable</span>
          </div>
          <div className='flex items-center gap-6 pb-4'>
            <span className='text-brown font-semibold'>1x</span>
            <span className='text-[#adabab]'>10m Optical Cable</span>
          </div>
        </div>
      </div>
      <div className='md:grid md:pt-[55px] pt-[55px] lg:pt-0 md:grid-cols-2'>
        <div className='bg-mobile-zx9-gallery-1 md:bg-tablet-zx9-gallery-1 lg:bg-desktop-zx9-gallery-1 bg-cover bg-center rounded-lg m-5 md:mb-0 lg:h-[150px] h-[220px]'></div>
        <div className='bg-mobile-zx9-gallery-2 md:row-start-2 md:bg-tablet-zx9-gallery-2 lg:bg-desktop-zx9-gallery-2 bg-cover bg-center rounded-lg m-5 lg:h-[150px] h-[220px]'></div>
        <div className='bg-mobile-zx9-gallery-3 md:row-span-2 md:h-[92%] lg:h-[90%] md:bg-tablet-zx9-gallery-3 lg:bg-desktop-zx9-gallery-3 bg-cover bg-center rounded-lg m-5 md:ml-0 h-[400px]'></div>
      </div>
      <div className='my-[120px] lg:my-[70px] pb-3 md:grid md:grid-cols-3'>
        <h1 className='text-center font-bold pb-6 lg:pb-3 text-[28px] tracking-wider md:col-span-3 lg:text-[18px]'>YOU MAY ALSO LIKE</h1>
        <div className='text-center mb-11'>
          <div className='bg-gray m-5 rounded-lg'>
            <div className='bg-mobile-zx7-product md:bg-tablet-zx7-product lg:bg-desktop-zx7-product bg-contain bg-blend-normal bg-center bg-no-repeat md:h-[300px] lg:h-[170px] h-[170px]'></div>
          </div>
          <h2 className='py-4 font-bold text-[28px] lg:text-[18px] lg:py-0 tracking-wider'>ZX7 SPEAKER</h2>
          <button className='bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 my-6 lg:py-2 lg:px-6 py-4'><Link to={'/zx7speaker'}>SEE PRODUCT</Link></button>
        </div>
        <div className='text-center mb-11'>
          <div className='bg-gray m-5 lg:mx-0 rounded-lg'>
            <div className='bg-mobile-xx99markI-product md:bg-tablet-xx99markI-product lg:bg-desktop-xx99markI-product bg-contain bg-blend-normal bg-center bg-no-repeat md:h-[300px] lg:h-[170px] h-[170px]'></div>
          </div>
          <h2 className='py-4 font-bold text-[28px] lg:text-[18px] lg:py-0 tracking-wider'>XX99 MARK I</h2>
          <button className='bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 my-6 lg:py-2 lg:px-6 py-4'><Link to={'/xx99mark1'}>SEE PRODUCT</Link></button>
        </div>
        <div className='text-center mb-11'>
          <div className='bg-gray m-5 rounded-lg'>
            <div className='bg-mobile-xx59-product md:bg-tablet-xx59-product lg:bg-desktop-xx59-product bg-contain bg-blend-normal bg-center bg-no-repeat md:h-[300px] lg:h-[170px] h-[170px]'></div>
          </div>
          <h2 className='py-4 lg:py-0 font-bold text-[28px] lg:text-[18px] tracking-wider'>XX59</h2>
          <button className='bg-brown hover:bg-light-brown text-white tracking-widest text-lg lg:text-sm px-10 my-6 lg:py-2 lg:px-6 py-4'><Link to={'/xx59'}>SEE PRODUCT</Link></button>
        </div>
      </div>
      <Categories />
      <BestGear />
    </div>
  );
};

export default Zx9Speaker;
