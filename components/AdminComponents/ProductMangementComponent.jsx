import { productionURL } from '@/config'
import axios from 'axios'
import React from 'react'
import ProductTable from './ProductTable'

const ProductMangementComponent = ({products}) => {
    // console.log("prod",data)
    return (
        <div className='h-screen bg-stone-200 w-full'>

           
            <ProductTable data={products} />
        </div>
    )
}


export default ProductMangementComponent