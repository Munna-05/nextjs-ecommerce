import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AddProductModal from './AddProductModal'

const ProductTable = ({ data }) => {
    const [open, setOpen] = useState(false)
    const [openCat, setOpenCat] = useState(false)
    console.log('first', data)
    return (
        <div>
            <div className='container flex mx-auto w-full  mt-10 h-12 items-center px-16 gap-3 justify-end'>

                <button onClick={() => setOpenCat(true)} className='bg-blue-600 text-white hover:bg-blue-700 duration-200  px-3 text-sm py-1'>Add Category</button>
                <button onClick={() => setOpen(true)} className='bg-blue-600 text-white hover:bg-blue-700 duration-200  px-3 text-sm py-1'>Add Product</button>

            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }} className={`${open ||openCat ? 'blur-sm brightness-90 scale-90' : null} duration-200`} >


                <div class="relative overflow-x-auto max-h-[70vh] overflow-y-scroll container mx-auto mt-5 shadow-md ">
                    <table class="container text-sm max-h-[40vh] text-left text-stone-900 dark:text-gray-400">
                        <thead class="text-xs sticky top-0 z-50 text-gray-700  uppercase h-16 bg-stone-900 dark:text-teal-500">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" class="px-6 w-10 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    In Stock
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 flex justify-center py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className=''>


                            {data.map((res, i) => {
                                return (
                                    <tr class="bg-stone-100 border-b cursor-pointer dark:border-stone-400 text-gray-600 hover:bg-white">
                                        <td scope="row" class="px-6 py-4 w-10 font-medium text-gray-600 ">
                                            {i + 1}
                                        </td>
                                        <td scope="row" class="px-6 py-4 w-40 object-cover font-medium text-gray-600 ">
                                            <img className='w-40 object-cover mix-blend-multiply' src={res.productImage} alt="" />
                                        </td>
                                        <td scope="row" class="px-6 py-4 w-80 font-medium text-gray-600 ">
                                            {res.productName}
                                        </td>
                                        <td class="px-6 w-[25vw] py-4">
                                            <p className='h-42 overflow-y-scroll px-4 text-sm cursor-pointer'>
                                                {res.productDescription}
                                            </p>
                                        </td>
                                        <td class="px-6 py-4">
                                            {res.productStock}
                                        </td>
                                        <td class="px-6 py-4">
                                            {res.productPrice} /-
                                        </td>
                                        <td class="px-6 py-4  text-center">
                                            <a href="#" class="font-medium text-blue-600 mx-2 dark:text-blue-500 hover:underline">Edit</a>
                                            <a href="#" class="font-medium text-blue-600 mx-2 dark:text-red-500 hover:underline">Delete</a>
                                        </td>
                                    </tr>

                                )
                            })}



                        </tbody>
                    </table>
                </div>


            </motion.div>


            {
                open ?
                    <div className=''>

                        <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: -650, transition: { type: 'spring' } }} className=''>

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
            {
                openCat ?
                    <div className=''>

                        <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: -650, transition: { type: 'spring' } }} className=''>

                            <div className='text-stone-800 flex justify-end  w-96 mx-auto'>
                                <svg onClick={() => setOpenCat(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 cursor-pointer hover:scale-110 font-bold hover:text-red-600 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>

                            <div className='     px-5 pt-8 w-96 mx-auto bg-stone-900'>
                                <input className='w-full mb-2 px-2 h-8 text-sm' type="text" placeholder='Category Name' name="" id="" />
                               
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

export default ProductTable