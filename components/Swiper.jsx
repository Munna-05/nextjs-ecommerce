import React from 'react'
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
const Swiper = () => {
  return (
    <div>
         <section className=''>
            <div className=' mx-auto container sm:w-full sm:overflow-hidden'>

               

                <swiper-container  slides-per-view="2" loop='true' autoplay='true' speed='500' css-mode="true" scrollbar="true" virtual="true"
                 
                >
                    <swiper-slide>
                        <img className='object-cover sm:w-80' src="https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className='object-cover sm:w-80 ' src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </swiper-slide>

                   
                    
                </swiper-container>

            </div>


        </section>
    
    </div>
  )
}

export default Swiper