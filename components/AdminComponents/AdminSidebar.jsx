import React from 'react'
import Link from 'next/link'

const AdminSidebar = () => {

    return (
        <div className='bg-stone-400 h-screen w-80 pt-32 px-5'>
            <ul>
                <Link href='/admin'>
                    <li className='bg-stone-900 text-white  hover:text-stone-900 hover:shadow-lg hover:shadow-stone-900 p-2 mb-1 text-sm rounded-lg hover:shadow hover:scale-105 duration-150 hover:bg-slate-50'>Home</li>
                </Link>
                <Link href='/orders'>
                    <li className='bg-stone-900 text-white  hover:text-stone-900 hover:shadow-lg hover:shadow-stone-900 p-2 mb-1 text-sm rounded-lg hover:shadow hover:scale-105 duration-150 hover:bg-slate-50'>Order Management</li>
                </Link>
               <Link href='/products'>
                <li className='bg-stone-900 text-white  hover:text-stone-900 hover:shadow-lg hover:shadow-stone-900 p-2 mb-1 text-sm rounded-lg hover:shadow hover:scale-105 duration-150 hover:bg-slate-50'>Product Management</li>
               </Link>

            </ul>
        </div>
    )
}

export default AdminSidebar