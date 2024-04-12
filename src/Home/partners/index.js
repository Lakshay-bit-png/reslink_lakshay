import React from 'react'
import index from './index.css'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import p6 from '../../assets/p6.png'


export const Partners = () => {
  return (
   <>
   <div className='our-partners'>
    <div className='header-part'>
        OUR PARTNERS
    </div>
    <div className='partners'>
        <img src={p1}/>
        <img src={p2}/>
        <img src={p3}/>
        <img src={p4}/>
        <img src={p5}/>
        <img src={p6}/>
        
        
    </div>
   </div>
   </>
  )
}
