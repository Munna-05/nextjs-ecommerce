import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AddProductModal from './AddProductModal'

const OrderTable = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='container flex mx-auto w-full gap-3 mt-10 h-12 items-center px-16 justify-end'>

                <button className='bg-blue-600 text-white hover:bg-blue-700 duration-200  px-3 text-sm py-1'>Pending Orders</button>
                {/* <button className='bg-blue-600 text-white hover:bg-blue-700 duration-200  px-3 text-sm py-1'></button> */}
                {/* <button className='bg-blue-600 text-white hover:bg-blue-700 duration-200  px-3 text-sm py-1'></button> */}

            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }} className={`${open ? 'blur-sm' : null} duration-200`} >


                <div class="relative overflow-x-auto max-h-[70vh] overflow-y-scroll container mx-auto mt-5 shadow-md ">
                    <table class="container text-sm max-h-[40vh] text-left text-stone-900 dark:text-gray-400">
                        <thead class="text-xs sticky top-0 z-50 text-gray-700  uppercase h-16 bg-stone-900 dark:text-teal-500">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name of buyer
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Order Status
                                </th>
                                <th scope="col" class="px-1  flex justify-center py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className=''>


                            <tr class="bg-stone-100 border-b cursor-pointer dark:border-stone-400 text-gray-600 hover:bg-white">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </td>
                                <td class="px-6 w-96  py-4">
                                    <p className='h-32 overflow-y-scroll px-4 text-sm cursor-pointer'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est adipisci voluptatem distinctio, itaque cupiditate quisquam perspiciatis at nihil. Fugit, voluptate?
                                    </p>
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    pending
                                </td>
                                <td class="px-6 py-4 text-center flex h-full mt-8 items-center">
                                    <select id="" class="bg-gray-50 px-2 border w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-teal-300 dark:focus:ring-teal-500 dark:focus:border-teal-500">
                                        <option defaultValue={'pending'} >Change Order Status</option>
                                        <option value="US">Pending</option>
                                        <option value="US">Processing</option>
                                        <option value="CA">Shipped</option>

                                    </select>

                                    <button className='w-32 ml-4 bg-blue-600 h-10 rounded-lg text-center text-stone-50 hover:bg-blue-700 mx-1'>Update Status</button>
                                </td>
                            </tr>




                        </tbody>
                    </table>
                </div>


            </motion.div>


            {
                open ?
                    <div className=''>

                        <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: -150, transition: { type: 'spring' } }} className=''>

                            <div className='text-stone-800 flex justify-end  w-96 mx-auto'>
                                <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer hover:scale-110 font-bold hover:text-red-600 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>

                            <div className='     px-5 pt-8 w-96 mx-auto bg-stone-900'>
                                <input className='w-full mb-2 px-2 h-8 text-sm' type="text" placeholder='Name' name="" id="" />
                                <textarea className='w-full  px-2 h-28 py-2 text-sm' type="text" placeholder='Description' name="" id="" />
                                <input className='w-full mb-2 px-2 h-8 text-sm' type="text" placeholder='Category' name="" id="" />
                                <input className='w-full mb-2  text-white my-2 h-8 text-sm' type="file" placeholder='' name="" id="" />
                                <input className='w-full mb-2 px-2 h-8 text-sm' type="text" placeholder='Quantity' name="" id="" />
                                <input className='w-full mb-2 px-2 h-8 text-sm' type="text" placeholder='Price' name="" id="" />
                                <div className='w-full flex justify-end'>
                                    <button className='bg-stone-100 w-28 border-b border-stone-800 mt-4 hover:bg-teal-600 text-sm hover:text-stone-100 h-8'>add</button>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                    : null
            }
        </div>
    )
}

export default OrderTable