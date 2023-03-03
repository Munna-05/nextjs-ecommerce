import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Coverpic from '@/components/Coverpic'
import ProductSections from '@/components/ProductSections'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const Home = (data) => {
  console.log("asdasd",data.data)
  
  return (
    <>
    
      <Coverpic />
      <ProductSections details = {data.data}/>


    </>
  )


}

export const getStaticProps =async()=>{
  const {data} = await axios.get('http://localhost:5000/admin/products')
  return {
    props:{
      data
    }
  }
}

export default Home
