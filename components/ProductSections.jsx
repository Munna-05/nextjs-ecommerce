import ProductCard from "./ProductCard"
import axios from 'axios'
import { useEffect ,useState} from "react"

const ProductSections = (props) => {
    
   

    return (
        <div className="container py-5 mx-auto grid md:grid-cols-3 gap-1 lg:grid-cols-4">
            {
                props.details.map((res, i) => {
                    return <ProductCard title={res.productName} desc={res.productDescription} image={res.productImage} time={i} price={res.productPrice} id={res._id}/>

                })
            }
        </div>
    )
}





export default ProductSections
