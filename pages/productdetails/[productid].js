import ProductDetails from "@/components/ProductDetails"
import axios from "axios"
import { useRouter } from "next/router"

const singleProduct = (data) => {
    const router = useRouter()
    const { productid } = router.query
    const allProducts = data.data
    const singleProduct = allProducts.find((res) => {
        return res._id === productid
    })
    console.log("single prod",singleProduct)
    return (
        <>

            <div>
                <ProductDetails productDetails={singleProduct}/>
            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const { data } = await axios.get('http://localhost:5000/admin/products')
    return {
        props: {
            data
        }
    }
}
export default singleProduct