
import { TbTruckDelivery } from 'react-icons/tb'
const Coverpic = () => {
  return (
    <div className="w-full mt-4">

      <img className="w-full relative z-10 h-[514px] object-cover" src="https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className="grid grid-cols-3 bg-stone-200 mt-1 flex justify-center">
        <div className="mx-auto font-light text-stone-600 text-sm capitalize text-center h-10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>



          <span className='ml-3'>free shipping</span></div>
        <div className="mx-auto font-light text-stone-600 text-sm capitalize  border-stone-400 w-full h-10 items-center justify-center border-x flex text-center">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
          </svg>

          <span className="ml-3 items-center">secured payments</span>
        </div>
        <div className="mx-auto font-light text-stone-600 text-sm capitalize text-center h-10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>



          <span className='ml-3 items-center'>cash on delivery</span></div>
      </div>
    </div>
  )
}

export default Coverpic