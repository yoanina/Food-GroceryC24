
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {CartItem} from "../../components/CartItem"
import { toast } from 'react-toastify';


export const Cart = () => {
  const productData = useSelector((state)=> state.bazar.productData)
  const [totalAmount, setTotalAmount] = useState("")
  const UserInfo = useSelector((state)=> state.bazar.userInfo)
  const [payNow, setPayNow] = useState(false)
  useEffect(()=>{
    let precio=0;
    productData.map((item)=>{
      precio += item.precio * item.cantidad;
      return precio
    });
    setTotalAmount(precio)
  }, [productData])

  const handleCheckout =()=>{
    if(UserInfo){
      setPayNow(true)
    }else{
      toast.error("Porfavor ingrese para poder realizar el pago")
    }
  }


  return (
    <div>
      <img className='w-full h-60 object-cover' src={"/img/dazzle-3.png"} alt="cartImg" />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
            <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
              <h2 className='text-2xl font-medium'>Mis Productos</h2>  
              <p className='flex items-center gap-4 text-base'>
               Subtotal S/.
             <span className='font-bold text-lg'>{totalAmount}</span></p>
             <p className='flex items-start gap-4 text-base'>
               Costos de envio 
               <span>
                 Envio gratis
               </span>
             </p>
            </div>
            <p className='font-titleFont font-semibold flex justify-between mt-6'>
             Total <span className='text-xl font-bold'>S/.{totalAmount}</span>
           </p>
           <button onClick={handleCheckout} className='text-base text-white w-full py-3 mt-6 hover: bg-gray-800 duration-300' style={{ backgroundColor: 'black' , borderRadius:10, color:'#F7F3E7', marginTop:10}}>Proceder con el pago</button>   
            
        </div>
      </div>
      
    </div>
  )
}



