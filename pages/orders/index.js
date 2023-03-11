import AdminSidebar from "@/components/AdminComponents/AdminSidebar"
import OrderManagementComponent from "@/components/AdminComponents/OrderManagementComponent"

const index = () => {
  return (
    <div className="flex">

        <AdminSidebar/>
        <OrderManagementComponent/>
        
        

    </div>
  )
}

export default index