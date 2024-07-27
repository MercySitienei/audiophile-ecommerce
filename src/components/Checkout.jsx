import { useState } from 'react';
import { Products } from './Products';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

const Checkout = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
      };
    
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || {});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        paymentMethod: 'e-Money',
        eMoneyNumber: '',
        eMoneyPIN: '',
    });

    const [errors, setErrors] = useState({});
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Wrong format';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.zipCode) newErrors.zipCode = 'ZIP Code is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (formData.paymentMethod === 'e-Money') {
            if (!formData.eMoneyNumber) newErrors.eMoneyNumber = 'e-Money Number is required';
            if (!formData.eMoneyPIN) newErrors.eMoneyPIN = 'e-Money PIN is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order Submitted', formData, cartItems);
    };

    const total = Products.reduce((acc, product) => {
        return acc + (product.price * (cartItems[product.id] || 0));
    }, 0);

    const vat = total * 0.2;
    const grandTotal = total + vat + 50;

    const [isThankYouOpen, setIsThankYouOpen] = useState(false);
    const thankYouRef = useRef(null);
    const openThankYou = () => {
        if (validateForm()) {
            setIsThankYouOpen(true);
        }
    };    
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (thankYouRef.current && !thankYouRef.current.contains(event.target)) {
            setIsThankYouOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [thankYouRef]);
    
      const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);
      const firstProduct = Products.find(product => cartItems[product.id] > 0);
    
      const handleBackToHome = () => {
        navigate('/');
      };
    return (
    <div className='bg-light-gray lg:px-[150px]'>
        <button className='py-5 text-lg lg:text-xs font-semibold hover:text-brown pl-5 md:pl-7 opacity-50' onClick={handleBackClick} >Go Back</button>
        <form className='lg:flex ' noValidate onSubmit={handleSubmit}>
            <div className='bg-[#ffff] mx-5 my-3 lg:mt-0 lg:mb-[90px] rounded-md p-5 lg:w-[45vw] shadow-md'>
                <h2 className='font-semibold md:font-bold md:text-4xl text-2xl pb-5 tracking-wide'>CHECKOUT</h2>
                <div >
                    <h3  className='text-brown font-medium py-2 tracking-wide'>BILLING DETAILS</h3>
                    <div className='md:grid md:grid-cols-2'>
                        <div className='grid grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="name">Name</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.name ? 'border-red-500' : ''}`} type="text" name="name" placeholder="Alexei Ward" value={formData.name} onChange={handleChange} />
                            {errors.name && <span className='text-[red]'>{errors.name}</span>}
                        </div>
                        <div className='grid md:pl-6 grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="email">Email Address</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.email ? 'border-red-500' : ''}`} type="email" name="email" placeholder="alexei@mail.com" value={formData.email} onChange={handleChange} />
                            {errors.email && <span className='text-[red]'>{errors.email}</span>}                        </div>
                        <div className='grid grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="phone">Phone Number</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.phone ? 'border-red-500' : ''}`} type="tel" name="phone" placeholder="+1 202-555-0136" value={formData.phone} onChange={handleChange} />
                            {errors.phone && <span className='text-[red]'>{errors.phone}</span>}                        </div>
                    </div>
                </div>
                <div >
                    <h3  className='text-brown font-medium py-2 tracking-wide'>SHIPPING INFO</h3>
                    <div className='md:grid md:grid-cols-2'>
                        <div className='grid grid-cols-1 col-span-2 pb-3'>
                            <label className='font-medium py-2' htmlFor="address">Your Address</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.address ? 'border-red-500' : ''}`} type="text" name="address" placeholder="1137 Williams Avenue" value={formData.address} onChange={handleChange} />
                            {errors.address && <span className='text-[red]'>{errors.address}</span>}                        </div>
                        <div className='grid grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="zipCode">ZIP Code</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.zipCode ? 'border-red-500' : ''}`} type="text" name="zipCode" placeholder="10001" value={formData.zipCode} onChange={handleChange} />
                            {errors.zipCode && <span className='text-[red]'>{errors.zipCode}</span>}                        </div>
                        <div className='grid md:pl-6 grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="city">City</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.city ? 'border-red-500' : ''}`} type="text" name="city" placeholder="New York" value={formData.city} onChange={handleChange} />
                            {errors.city && <span className='text-[red]'>{errors.city}</span>}                        </div>
                        <div className='grid grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="country">Country</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.country ? 'border-red-500' : ''}`} type="text" name="country" placeholder="United States" value={formData.country} onChange={handleChange} />
                            {errors.country && <span className='text-[red]'>{errors.country}</span>}                        </div>
                    </div>
                </div>
                <div >
                    <h3 className='text-brown font-medium py-2 tracking-wide'>PAYMENT DETAILS</h3>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 pb-3'>
                        <label className='font-medium md:row-span-2 py-2' htmlFor="paymentMethod">Payment Method</label> 
                        <div className='border-gray focus:outline-brown  border-2 rounded-lg md:ml-6 p-3 '>
                            <input type="radio" name="paymentMethod" value="e-Money" checked={formData.paymentMethod === 'e-Money'} onChange={handleChange} /> <span>e-Money</span>  
                        </div>
                        <div className='border-gray focus:outline-brown  border-2 md:ml-6 rounded-lg p-3 '>
                            <input type="radio" name="paymentMethod" value="Cash on Delivery" checked={formData.paymentMethod === 'Cash on Delivery'} onChange={handleChange} /> <span>Cash on Delivery</span> 
                        </div>
                    </div>
                    {formData.paymentMethod === 'e-Money' && (
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='grid grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="eMoneyNumber">e-Money Number</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.eMoneyNumber ? 'border-red-500' : ''}`} type="text" name="eMoneyNumber" placeholder="238521993" value={formData.eMoneyNumber} onChange={handleChange} />
                            {errors.eMoneyNumber && <span className='text-[red]'>{errors.eMoneyNumber}</span>}                        </div>
                        <div className='grid md:pl-6 grid-cols-1 pb-3'>
                            <label className='font-medium py-2' htmlFor="eMoneyPIN">e-Money PIN</label>
                            <input className={`border-gray focus:outline-brown  border-2 rounded-lg p-3 ${errors.eMoneyPIN ? 'border-red-500' : ''}`} type="text" name="eMoneyPIN" placeholder="6891" value={formData.eMoneyPIN} onChange={handleChange} />
                            {errors.eMoneyPIN && <span className='text-[red]'>{errors.eMoneyPIN}</span>}                        </div>
                    </div>
                    )}
                    {formData.paymentMethod === 'Cash on Delivery' && (
                    <div className='flex gap-6'>
                        <span>
                            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z" fill="#D87D4A"/></svg>
                        </span>
                        <p className='text-xs text-[#adabab]'>
                        The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                        </p>
                    </div>
                    )}
                </div>
            </div>
            <div className='bg-[#ffff] rounded-md mx-5 mt-11 lg:w-[24vw] lg:h-fit lg:mt-0 mb-[80px] p-5 shadow-md'>
                <h3 className='font-semibold text-xl pb-5 tracking-wide'>SUMMARY</h3>
                {Products.filter(product => cartItems[product.id]).map(product => (
                    <div className='flex py-1 justify-between' key={product.id}>
                        <div className='flex gap-5'>
                            <img className='w-[70px] lg:w-[50px] lg:h-[50px] h-[70px] rounded-lg' src={product.image} alt={product.name} />
                            <div className='self-center'>
                                <div className='font-bold lg:text-xs'>{product.name}</div>
                                <div className='font-bold lg:text-xs text-[#adabab]'>$ {product.price.toLocaleString()}</div>
                            </div>
                        </div>
                        <div>X{cartItems[product.id]}</div>
                    </div>
                ))}
                <div className='py-8'>
                    <div className='flex items-center justify-between'> <span className='text-[#adabab]'>TOTAL</span> <span className='font-bold lg:text-lg text-2xl'>$ {total.toLocaleString()}</span></div>
                    <div className='flex items-center justify-between'> <span className='text-[#adabab]'>SHIPPING</span> <span className='font-bold lg:text-lg text-2xl'>$ 50</span></div>
                    <div className='flex items-center justify-between'> <span className='text-[#adabab]'>VAT (INCLUDED)</span> <span className='font-bold lg:text-lg text-2xl'>$ {vat.toLocaleString()}</span></div>
                    <div className='flex items-center pt-5 justify-between'> <span className='text-[#adabab]'>GRAND TOTAL</span> <span className='font-bold text-brown lg:text-lg text-2xl'>$ {grandTotal.toLocaleString()}</span></div>
                </div>
                <button onClick={openThankYou} type="submit" className='bg-brown hover:bg-light-brown tracking-wider text-white w-full py-4 lg:py-2 lg:text-xs text-sm'>CONTINUE & PAY</button>
                {isThankYouOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div ref={thankYouRef} className="bg-white rounded-lg p-8 m-4 md:w-[70vw] lg:w-[50vw] ">
                                <div className="flex justify-start mb-6">
                                    <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center">
                                        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold lg:text-xl mb-4">THANK YOU<br />FOR YOUR ORDER</h2>
                                <p className="text-[#adabab] lg:text-sm mb-6">You will receive an email confirmation shortly.</p>
                                <div className="md:flex mb-6">
                                    <div className="bg-gray p-6 lg:py-4 rounded-t-lg lg:h-[100px] md:rounded-bl-lg md:w-[60%] md:h-[150px] md:rounded-tr-none">
                                        <div className="flex border-b-2 border-b-black border-opacity-5 ">
                                            <img src={firstProduct.image} alt={firstProduct.name} className="w-16 h-16 lg:w-11 lg:h-11 object-cover rounded-lg mr-4" />
                                            <div>
                                                <h4 className="text-lg lg:text-sm font-medium">{firstProduct.name}</h4>
                                                <p className="font-semibold text-[#adabab]">$ {firstProduct.price.toLocaleString()}</p>
                                            </div>
                                            <p className="text-[#a09e9e] md:pl-11 pl-[100px]">x{cartItems[firstProduct.id]}</p>
                                        </div>
                                        {totalItems > 1 && (
                                            <p className="text-[#a09e9e] lg:text-xs text-center font-semibold mt-2">and {totalItems - 1} other item(s)</p>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 h-[120px] md:h-[150px] lg:h-[100px] gap-4 font-semibold md:w-[40%]  bg-black py-6 pl-10 md:pl-5 md:rounded-bl-none md:rounded-tr-lg rounded-b-lg">
                                        <span className='text-[#a09e9e] tracking-wide text-lg lg:text-xs'>GRAND TOTAL</span>
                                        <span className='text-white font-semibold lg:text-sm text-2xl'>$ {total.toLocaleString()}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleBackToHome}
                                    className="w-full py-3 mt-4 lg:mt-2 lg:text-sm lg:py-3 bg-brown hover:bg-light-brown tracking-wider text-white font-semibold"
                                    >
                                        BACK TO HOME
                                </button>
                            </div>
                        </div>
                )}
            </div>
        </form>
    </div>
    );
};

export default Checkout;
