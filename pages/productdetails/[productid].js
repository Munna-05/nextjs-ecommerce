import ProductDetails from "@/components/ProductDetails"
import axios from "axios"
import { useRouter } from "next/router"

const singleProduct = (data) => {
    const router = useRouter()
    const { productid } = router.query
    const allProducts = data.data
    const singleProduct = allProducts.find((res) => {
        return res.id === parseInt(productid)
    })
    console.log("single prod", singleProduct)
    return (
        <>

            <div>
                <ProductDetails productDetails={singleProduct}/>
            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/')
    return {
        props: {
            data
        }
    }
}
export default singleProduct