import React from 'react'
import { Navbar } from './Navbar'
import { Pricing } from './Pricing'
import { Partners } from './partners'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'


export const Home = () => {
  return (
   <>
   <Navbar/>
   <Pricing/>
   <Partners/>
   <Testimonials/>
   <Footer/>
   </>
  )
}
