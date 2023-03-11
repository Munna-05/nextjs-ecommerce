import AdminSidebar from "@/components/AdminComponents/AdminSidebar"
import ProductMangementComponent from "@/components/AdminComponents/ProductMangementComponent"
import { productionURL } from "@/config"
import axios from "axios"

const index = ({data}) => {
    console.log(data)
  return (
    <div className="flex">
        <AdminSidebar/>
        <ProductMangementComponent products={data}/>
    </div>
  )
}

export const getServerSideProps = async () => {
    const { data } = await axios.get(`${productionURL}/admin/products`)
    return {
        props: {
            data
        }
    }
}
export default index