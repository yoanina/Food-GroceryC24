import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/bazaarSlice';
import { ToastContainer, toast } from 'react-toastify';
import {useSelector} from "react-redux"


export const Product = () => {

  const dispatch = useDispatch() 

  const [details, setDetails] = useState({})
  let [baseQty, setBaseQty] = useState(1) 

  const location = useLocation()
  useEffect(()=>{
    setDetails(location.state.item)
  }, [])

  return (
    <div>
      <div className='max-w-screen-xl flex ml-20 my-10 flex gap-10' style={{justifyContent:'center', display:'flex', alignItems:'center'}}>
        <div className='w-2/5 relative'>
          <img className='w-full h-[400px] object-cover' src={details.imagenUrl} alt="" style={{borderRadius:30}}/>
          <div className='absolute top-2 right-2'>
            {/* {details.isNew && (
              <p className='bg-black text-white px-8 py-1'>Venta</p>
          )} */}
          </div>
        </div>
        <div className='w-3/5 flex flex-col justify-center gap-12 ' > 
            <div>
              <h2 className='text-2xl fot-semibold mt-10' style={{marginTop:-10}}>{details.nombre}</h2>
              <div className='flex items-center gap-4 mt-3'>
                <div className='line-through font-base text-gray-500'>
                  S/.{details.precio}
                </div>
                <div className='text-2xl font-medium text-gray-900'>
                  S/.{details.precio}
                </div>
              </div>
            </div>
            <div className='flex align-center gap-3 flex-start'>
              <div className='text-base text-yellow-500 mt-0' style={{marginTop:-50}}>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              </div>
            </div>
              <p className='text-base text-gray-500 mt-0' style={{marginTop:-40}}>{details.descripcion}</p>
              <div className='flex gap-4'>
                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3' style={{borderRadius:10, marginTop:-20, height:50}}>
                  <p className='text-base text-black'>Cantidad</p>
                  <div className='flex items-center gap-4 text-sm font-semibold'>
                    <button onClick={()=>  setBaseQty(baseQty>1?baseQty-1:1)} className='border text-black h-5 font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>-</button>
                    <span>{baseQty}</span>
                    <button onClick={()=>setBaseQty(baseQty+1)} className='border h-5 text-black font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>+</button>
                  </div>
                </div>
                <button onClick={()=>dispatch(addToCart({
                   id: details.id,
                   nombre: details.nombre,
                   imagenUrl: details.imagenUrl,
                   precio: details.precio,
                   cantidad: baseQty,
                   descripcion: details.descripcion
                })) && toast.success(`${details.nombre} se ha agregado`)}  className='bg-black text-white py-3 px-6 active:bg-gray-800' style={{borderRadius:10, marginTop:-20, height:50}}>Agregar a la Cesta</button>
              </div>
              <p className='text-base text-gray-500' style={{marginTop:-20}}>Descripcion:: <span className='font-medium capitalize' style={{marginTop:-10}}>{details.descripcion}</span></p>
        </div>
      </div> 
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      
    </div>
  )
}





