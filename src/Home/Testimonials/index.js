import React from 'react'
import index from './index.css'
import ic from '../../assets/ic.png'

export const Testimonials = () => {
  return (
    <>
    <div className='testimonials'>
        <div className='test-left'>
            <div className='left-head'>Testimonials</div>
            <div>Check what our clients are saying</div>
        </div>
        <div className='test-right'>
            <img src={ic}/>
            <div>Since using this platform, our research has completely transformed. we would highly recommend this platform to any business looking to simplify their research process and drive more innovation.</div>
            <div>
            <div>Adrian cal</div>
            <div>CEO GetNextDesign</div>
            </div>
           
        </div>
    </div>
    </>
  )
}
