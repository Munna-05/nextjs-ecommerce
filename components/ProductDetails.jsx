import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FormData from 'form-data';
import moment from 'moment'

import axios from 'axios';

const ProductDetails = ({ productDetails }) => {
    const [orderCreating, setOrderCreating] = React.useState(false)
    var state_arr = ["Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal"];


    const [postOfficeDetails, setPostOfficeDetails] = useState({})
    const [Name, setName] = useState('')
    const [Address, setAddress] = useState('')
    const [Email, setEmail] = useState('')
    const [Pincode, setPincode] = useState('')
    const [District, setDistrict] = useState('')
    const [State, setState] = useState('')
    const [Town, setTown] = useState('')
    const [Phone, setPhone] = useState()
    const [Error, setError] = useState(false)

    const data = {
        customerName: Name,
        customerAddress: Address,
        customerEmail: Email,
        customerDistrict: District,
        customerState: State,
        customerTown: Town,
        customerPincode: parseInt(Pincode),
        productId: productDetails._id,
        quantity: 1,
        customerPhone: parseInt(Phone),
        dateOfOrder: moment(Date.now()).format('ll'),
        orderStatus: 'placed',
        paymentType: ''

    }

    //////validation 

    const validate = () => {
        if (!Name) {
            setError(true)
        } else if (!Email) {
            setError(true)
        } else if (!Address) {
            setError(true)
        } else if (!Pincode) {
            setError(true)
        } else if (!Phone) {
            setError(true)
        } else {
            return true
        }

    }

    const handlePincode = (e) => {
        if (e.target.value.length == 6) {
            setPincode(e.target.value)
            console.log('api called')
            axios.get(`https://api.postalpincode.in/pincode/${e.target.value}`).then((res) => {
                setPostOfficeDetails(res.data[0].PostOffice[0])
                setDistrict(res.data[0].PostOffice[0].District)
                setState(res.data[0].PostOffice[0].State)
                setTown(res.data[0].PostOffice[0].Name)
                console.log(res.data[0].PostOffice[0])
            })
        }
    }

    const createOrder = () => {

        setOrderCreating(!orderCreating)

    }
    const closeBox = () => {
        setOrderCreating(false)
        setError(false)
    }


    const handleOrder = () => {
        if (validate()) {
            axios.post(`http://localhost:5000/order`, data).then((res) => {
                console.log(res)
            }).catch(err => console.log(err))
        }
    }
    return (
        <div className='h-screen border overflow-y-hidden  '>


            <section class={`text-gray-700 body-font ${orderCreating ? 'blur-sm brightness-75' : null} h-screen transition duration-300 overflow-hidden  bg-stone-300`}>
                <div class="container  border-x bg-white px-5 mt-16 py-24 mx-auto">
                    <div class="lg:w-full mx-auto flex h-full items-center">

                        <div className='lg:w-1/2 w-full h-full flex justify-center'>
                            <img alt="ecommerce" class="lg:w-2/3 w-full  object-cover object-center rounded " src={productDetails.productImage} />

                        </div>

                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0  ">
                            {/* <h2 class="text-xs title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails.productName}</h1>
                            <div class="flex mb-4">
                                {/* <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span> */}
                                <span class="flex  py-2 border-l-2 border-gray-200">
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="ml-2 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p class="leading-relaxed">{productDetails.productDescription}</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                {/* <div class="flex">
                                    <span class="mr-3">Color</span>
                                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                    <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                </div> */}
                                <div class="flex items-center">
                                    <span class="mr-3">Size</span>
                                    <div class="relative">
                                        <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <span class="title-font font-medium text-2xl text-gray-900">$ {productDetails.productPrice}</span>
                                {/* <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button> */}
                            </div>
                            <div onClick={createOrder} class="flex  mt-4  text-white bg-stone-700 border-0 py-2 px-6  focus:outline-none hover:bg-teal-700 cursor-pointer w-96 justify-center">
                                <span>Order Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {orderCreating ? <>

                <AnimatePresence>

                    <motion.div initial={{ y: 1000, scale: 0 }} animate={{ scale: 1, y: orderCreating ? -1000 : 1000, transition: { duration: 0.5, type: 'spring' } }} className='w-full
                    
                    '>

                        {/* order details */}


                        <div className=''>
                            {/* <div className='flex justify-center py-4 text-2xl bg-white w-2/3 mx-auto font-normal'>Enter Order Details</div> */}

                            <div className=' bg-white  flex items-center mx-auto w-3/4  '>

                                <div className=' bg-white w-3/4 px-3'>
                                    <img alt="ecommerce" class="w-80 h-80 mx-auto w-full object-cover object-center rounded px-8" src={productDetails.productImage} />
                                    <h1 class="text-gray-900 text-1xl text-center title-font font-medium my-3">{productDetails.productName} : ${productDetails.productPrice}</h1>


                                </div>
                                <div className=' '>

                                    <div className='flex justify-end p-2'>
                                        <button onClick={() => closeBox()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                    </div>

                                    <div className='p-2 text-sm gap-2 m-2'>
                                        <div className='flex justify-center mb-2 text-stone-700 text-2xl font-extralight'>Enter Order Details</div>

                                        {Error && !Name ? <span className='text-red-500  text-xs'>Enter Name</span> : null}
                                        <input required type="text" onChange={(e) => setName(e.target.value)} placeholder='Name' className={`h-10 w-full border ${Error && !Name ? "border-red-600 border-1 " : null} px-3 my-1`} />
                                        {Error && !Email ? <span className='text-red-500  text-xs'>Enter Email</span> : null}
                                        <input required type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className={`h-10 w-full border ${Error && !Email ? "border-red-600 border-1" : null} px-3 my-1`} />
                                        {Error && !Address ? <span className='text-red-500  text-xs'>Enter Address</span> : null}
                                        <input required type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} className={`h-20 w-full border ${Error && !Address ? "border-red-600 border-1" : null} px-3 my-1`} />
                                        {Error && !Pincode ? <span className='text-red-500  text-xs'>Enter Pincode</span> : null}
                                        <input required onChange={(e) => handlePincode(e)} type="text" placeholder='Pincode' className={`h-10 w-full border ${Error && !Pincode ? "border-red-600 border-1 " : null} px-3 my-1`} />

                                        <input required type="text" placeholder='District' value={District} className={`h-10 w-full border ${Error && !District ? "border-red-600 border-1 " : null} px-3 my-1`} />

                                        <input required type="text" placeholder='State' value={State} className={`h-10 w-full border ${Error && !State ? "border-red-600 border-1 " : null} px-3 my-1`} />
                                        {/* <select className={`h-10 w-full border ${Error && !Name ?"border-red-600 border-1 ":null} px-3 my-1`}>
                                        {state_arr.map(res=>{
                                          return <option value={res}>{res}</option>
                                             

                                        })}
                                        
                                    </select> */}
                                        <input required type="text" placeholder='Town' value={Town} className={`h-10 w-full border ${Error && !Town ? "border-red-600 border-1 " : null} px-3 my-1`} />
                                        {Error && !Phone ? <span className='text-red-500  text-xs'>Enter Phone Number</span> : null}

                                        <input required type="text" placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} value={Phone} className={`h-10 w-full border ${Error && !Phone ? "border-red-600 border-1 " : null} px-3 my-1`} />
                                    </div>
                                    <div className='flex justify-end'> <button onClick={handleOrder} className='px-8 py-3 text-xs text-white hover:bg-teal-700 mt-5 bg-stone-500'>Pay Now</button></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </> : null}





        </div>
    )
}

export default ProductDetails