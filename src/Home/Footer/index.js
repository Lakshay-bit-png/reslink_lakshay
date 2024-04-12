import React from 'react'
import index from './index.css'
import logo from '../../assets/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";

import { SlSocialInstagram } from "react-icons/sl";

export const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='inner-footer'>
            <div className='logo-social'>
                    <div className='logo-foot'>
                    <img src={logo}/>
                    <div>RESLINK</div>
                    </div>
                <div>
               <div> Copyright © 2023 Reslink.</div>
                <div>All rights reserved</div>
                </div>
                <div className='social'>
                   <div className='social-logs'>
                   <FaXTwitter />
                    </div>
                    <div className='social-logs'>
                    <SlSocialInstagram />
                    </div>
                    <div className='social-logs'><SlSocialLinkedin /></div>
                    
                   
                    
                </div>
            </div>
            <div className='rest'>
                <div style={{display:'flex',flexDirection:'column',gap:'12px',fontWeight:'550'}}>
                <div style={{fontSize:'20px',fontFamily:'Gilroy-Bold'}}>
                       Company
                    </div>
                    <div>About Us</div>
                    <div>Features</div>
                    <div>Contact Us</div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                    <div style={{fontSize:'20px',fontFamily:'Gilroy-Bold'}}>
                        Support
                    </div>
                    <div>Terms of Service</div>
                    <div>Privacy Policy</div>
                </div>
                <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                    <div style={{fontSize:'24px',fontFamily:'Gilroy-Medium'}}>
                        Stay up to Date
                    </div>
                   <div className='inpute'><input placeholder='Your Email Address' type='email'/><RiSendPlaneFill/></div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
