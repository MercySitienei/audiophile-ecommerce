import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom'
import category_thumbnail_headphones from '../../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import category_thumbnail_speakers from '../../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import category_thumbnail_earphones from '../../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Products } from "./Products";


const Header = () => {
  const initialCartState = JSON.parse(localStorage.getItem('cartItems')) || {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};

  const [cartItems, setCartItems] = useState(initialCartState);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleRemove = () => {
    setCartItems({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });
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


  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  function openOverlay(){
    document.getElementById('openOverlay').style.display = 'none';
    document.getElementById('overlay').style.display = 'block';
  }
  function closeOverlay(){
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('openOverlay').style.display = 'block';
  }
  const overlayRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeOverlay();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [overlayRef]);
  return (
    <div className=" mb-[-2px] relative   lg:px-[150px] w-full bg-[rgb(25,25,25)] text-white  ">
       <div className="flex py-8 lg:py-3 px-6 border-b-white border-opacity-20 border-b-[0.1px] justify-between align-centre">
        <div className="flex lg:flex-row-reverse md:w-[25%] w-[60%] lg:w-[60%] justify-between">
            <div className="self-center">
              <span onClick={openOverlay} id="openOverlay" ><svg className="lg:hidden text-lg" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg></span>
              <nav className="hidden lg:block">
                <ul className="flex gap-5 text-xs opacity-85">
                  <li className=" hover:text-brown"> <Link to='/'>HOME</Link> </li>
                  <li className=" hover:text-brown"> <Link to={'/headphones'} >HEADPHONES</Link> </li>
                  <li className=" hover:text-brown"> <Link to={'/speakers'} >SPEAKERS</Link> </li>
                  <li className=" hover:text-brown"> <Link to={'/earphones'} >EARPHONES</Link> </li>
                </ul>
              </nav>
            </div>
            <div className="hidden left-0 top-[95px] text-[25px] font-bold bg-black bg-opacity-50 h-full w-full  text-black  fixed z-[9999]" id="overlay">
              <div ref={overlayRef} className='flex md:flex-row md:gap-2 flex-col gap-20 px-4 justify-center pb-11 pt-[70px] md:pb-[100px] md:pt-[130px] rounded-b-2xl  bg-white w-full items-center'>
                <div className='relative w-[90vw] h-[170px] bg-gray rounded-md text-center p-[20px]'>
                    <div className='absolute top-[-30%] left-[50%] translate-x-[-50%]'>
                        <img className='w-[140px] h-auto' src={category_thumbnail_headphones} alt="headphones" />
                    </div>
                    <p className='mb-1 mt-[60px] font-bold text-[18px] tracking-wide '>HEADPHONES</p>
                    <Link onClick={closeOverlay} to={'/headphones'} className='text-sm opacity-40 flex text-center gap-6 justify-center items-center font-bold'><span className='text-lg'>SHOP</span> <span><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></Link>
                </div>
                
                <div className='relative w-[90vw]  h-[170px] bg-gray rounded-md text-center p-[20px]'>
                    <div className='absolute top-[-30%] left-[50%] translate-x-[-50%]'>
                        <img className='w-[150px] h-auto' src={category_thumbnail_speakers} alt="speakers" />
                    </div>
                    <p className='mb-1 mt-[60px] font-bold text-[18px] tracking-wide '>SPEAKERS</p>
                    <Link onClick={closeOverlay} to={'/speakers'} className='text-sm opacity-40 flex text-center gap-6 justify-center items-center font-bold'><span className='text-lg'>SHOP</span> <span><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></Link>
                </div>

                <div className='relative w-[90vw]  h-[170px] bg-gray rounded-md text-center p-[20px]'>
                    <div className='absolute top-[-30%] left-[50%] translate-x-[-50%]'>
                        <img className='w-[165px] h-auto' src={category_thumbnail_earphones} alt="earphones" />
                    </div>
                    <p className='mb-1 mt-[60px] font-bold text-[18px] tracking-wide '>EARPHONES</p>
                    <Link onClick={closeOverlay} to={'/earphones'} className='text-sm opacity-40 flex text-center gap-6 justify-center items-center font-bold'><span className='text-lg'>SHOP</span> <span><svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg></span></Link>
                </div>
          </div>
            </div>
            <div className="self-center font-bold text-[22px]">audiophile</div>
        </div>
        <div onClick={openCart} className="self-center text-lg"><AiOutlineShoppingCart/></div>
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
                  <button onClick={closeCart} className='bg-brown hover:bg-light-brown tracking-wider text-white py-4 lg:py-2 lg:text-xs text-sm'> <Link to={'/checkout'}>CHECKOUT</Link> </button>
                </div>
              </div>
            )}

       </div>
    </div>
  )
}

export default Header
