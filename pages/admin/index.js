
import AdminHomeComponent from "@/components/AdminComponents/AdminHomeComponent"
import AdminSidebar from "@/components/AdminComponents/AdminSidebar"
import OrderManagementComponent from "@/components/AdminComponents/OrderManagementComponent"

const index = () => {
  return (
    <div className="flex">
        <AdminSidebar/>
        <div className="w-full">
            <AdminHomeComponent/>
        </div>
    </div>
  )
}

export default index