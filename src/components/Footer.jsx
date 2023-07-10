import React from 'react';
import {LogoLight} from "../assets/index";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-12 px-7 font-titleFont flex flex-row justify-between'>
      <div className=' flex flex-col gap-7'>
        <div className='flex flex-col gap-7'>
          <img className=' h-10 w-20' src={LogoLight} alt="" />
          <p className='text-white text-sm tracking-wide'>©Food&Grocery.com</p>
          <img src={'/img/payment.png'} className='w-80' alt="" />
          <div className='flex flex-row gap-3'>
          <img src={'/img/pago1.png'} className='w-18 h-10' alt="" />
          <img src={'/img/pago2.png'} className='w-12 h-9' alt="" />
          <img src={'/img/pago3.png'} className='w-120 h-10' alt="" />
          <img src={'/img/pago4.png'} className='w-15 h-9' alt="" />
        </div>
        </div>
        <div className='flex flex-row gap-3'>
          <GitHubIcon/>
          <YouTubeIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
        </div>
      </div>
      <div className="">
        <h2 className='text-xl text-white 300 mb-3'>Contactanos</h2>
        <p>AQP.TC. FOOD & GROCERY</p>
        <p>Celular: 902898301</p>
        <p>Telefono: 054092262</p>
        <p>Email: food&grocery@gmail.com</p>
      </div>
      <div>
        <h2 className='text-xl text-white 300 mb-3'>Lo que nos representa</h2>
        <p>- Calidad</p>
        <p>- Transparencia</p>
        <p>- Variedad</p>
        <p>- Soporte y ayuda</p>

      </div>
    </div>
  )
}
