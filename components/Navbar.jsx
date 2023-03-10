'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
// import baseUrl from '@/config'
const Navbar = () => {
    //get categories using useEffect
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        //get categories
        axios.get(`http://localhost:5000/admin/categories`).then((res)=>{
            console.log("________",res.data) 
            setCategories(res.data)
        }).catch(err=>console.log('err',err))
    },[])

    return (

        <div>
            <nav class="bg-stone-900 px-2  w-full  top-0 left-0 dark:border-gray-600">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href={'/'}>
                        <span class="flex items-center">
                            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Ecom</span>
                        </span>
                    </Link>
                    <div class="flex md:order-2">
                        <button type="button" class="text-white  focus:ring-1 focus:outline-none focus:ring-stone-300 font-medium  text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Get started</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-stone-800 md:dark:bg-stone-900 dark:border-stone-700">
                            {/* <Link href='/'>
                                
                                    <span class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" >Home</span>
                                
                            </Link> */}
                            {/* <Link href='/'>

                                <span class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white" >home</span>

                            </Link> */}
                            {categories.map((res) => {
                                return (
                                    <Link href={`/category/${res}`}>

                                        <span class="block py-2 pl-1 pr-1 text-sm text-white rounded md:bg-transparent md:p-0 dark:text-white capitalize" >{res}</span>

                                    </Link>
                                )
                            })}


                            {/* <li>
                                <span href="" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</span>
                            </li>
                            <li>
                                <span href="" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</span>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar