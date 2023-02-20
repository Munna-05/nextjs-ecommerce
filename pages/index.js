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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
