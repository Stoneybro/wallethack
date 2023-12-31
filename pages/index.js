import Head from 'next/head'
import Image from 'next/image'
import { Poppins,Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Orderdemo from '@/components/Orderdemo'
import Features from '@/components/Features'
import Hacktoken from '@/components/Hacktoken'
import Trade from '@/components/trade'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'
import Subscribe from '@/components/Subscribe'
const poppins = Poppins({ 
  subsets: ['latin'] ,
  weight:['100','200','300','400','500','600','700','800','900']
})
const openSans = Open_Sans({ 
  subsets: ['latin'] ,
  weight:['300','400','500','600','700','800']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id='wrapper' className={poppins.className}>
    <Nav />
    <Hero />
    <Orderdemo />
    <Features />
    <Hacktoken />
    <Trade />
    <Faq />
    <Subscribe />
    <Footer />
     </main>
    </>
  )
}
{/* 

 */}