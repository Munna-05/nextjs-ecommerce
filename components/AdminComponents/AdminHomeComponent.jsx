import React from 'react'

const AdminHomeComponent = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto  mt-5 h-12 flex justify-center mb-5 items-center '>
                <button className='border px-4 py-1 hover:bg-stone-200 border-2 border-stone-800 text-sm
            
            '>Change Home page Cover pic</button>
            </div>

            <div className='grid grid-cols-2 w-96 mx-auto gap-2'>
                <div className='w-full h-20 border flex items-center border-stone-800 text-sm hover:bg-stone-200 justify-center' >
                    <span>Total Products</span>
                </div>
                <div className='w-full h-20 border flex items-center text-sm border-stone-800 hover:bg-stone-200 justify-center' >
                    <span>Total Orders</span>
                </div>
            </div>
            <div>
                Total sales

            </div>
            <div>
                Top ordered Products

            </div>
           
        </div>
    )
}

export default AdminHomeComponent