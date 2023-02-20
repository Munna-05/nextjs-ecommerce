'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
const ProductCard = (props) => {

    return (
        <Link href={`/productdetails/${props.id}`}>
            <motion.div
                initial={{ y: 1000 }} animate={{ y: 1, transition: { delay: props.time / 6, type: 'tween' } }}

                className="w-full cursor-pointer bg-stone-100 hover:ring-1 ring-indigo-200">
                <img className="h-80 w-full object-scale-down p-2 mix-blend-multiply " src={props.image} alt="" />
                <div className="p-5 capitalize">
                    <h1 className="font-semibold truncate my-3 text-md">{props.title}</h1>
                    <p className="text-sm break-all h-20 overflow-scroll">{props.desc}</p>
                </div>
                <h1 className='font-semibold text-xl w-full px-4 py-2 flex justify-center'>Price - ${props.price}</h1>

                <motion.div className="flex justify-center gap-1">
                    <motion.button className="bg-stone-200 hover:bg-stone-700 hover:text-white w-full mt-1 py-3 text-sm capitalize">add to cart</motion.button>
                    <button className="bg-stone-200 hover:bg-stone-700 hover:text-white w-full mt-1 py-3  text-sm capitalize">buy now</button>
                </motion.div>

            </motion.div>
        </Link>
    )
}

export const mybutton = () => {
    return (<>
        <motion.button className="bg-red-500 w-40 mt-5 py-1 text-sm capitalize">add to cart</motion.button>

    </>)
}


export default ProductCard