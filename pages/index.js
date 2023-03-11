import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Coverpic from '@/components/Coverpic'
import ProductSections from '@/components/ProductSections'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import { productionURL } from '@/config'
import { changeName } from '@/redux/Slice/productSlice'
const inter = Inter({ subsets: ['latin'] })

const Home = (data) => {
  // console.log("asdasd",data.data)
  const dispatch = useDispatch()
  const change = () =>{
    dispatch(changeName('updated'))  
    console.log('dispatch called')
  }
  console.log("//////////",useSelector((state)=>state.Product))
  change()
  console.log("//////////",useSelector((state)=>state.Product))
  return (
    <>
    
      <Coverpic />
      <ProductSections details = {data.data}/>


    </>
  )


}

export const getStaticProps =async()=>{
  const {data} = await axios.get(`${productionURL}/admin/products`)
  return {
    props:{
      data
    }
  }
}

export default Home
