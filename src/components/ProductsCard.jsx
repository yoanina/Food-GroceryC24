import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { addToCart } from '../redux/bazaarSlice';
import { ToastContainer, toast } from 'react-toastify';

export const ProductsCard = ({product}) => {

  const dispatch =useDispatch()

  // const {title, oldPrice, price, image, category, isNew, description} =product;
  const {id,nombre, descripcion, precio, barCode, cantidad, imagenId, imagenUrl,usuarioId,fechaHora} =product;
  const navigate = useNavigate()

  const _id = id;

  const idString = (Title)=>{
    const newIdString = String(Title).toLowerCase().split(" ").join("");
    return newIdString;
  } 
  const rootId = idString(_id)
  // console.log(rootId)

  const handleDetails = ()=>{
    navigate(`/product/${rootId}`,{
      state: {
        item: product
      }
    })
  }


  return (
    <div  className='group relative'>
      <div  className="w-full h-60 cursor-pointer overflow-hidden">
        <img onClick={handleDetails} className=' h-full w-full object-cover group-hover:scale-110 duration-500'
         src={imagenUrl} alt="" style={{borderRadius:10}} />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
          <div>
            <h2 className='font-arial text-l font-bold '>{nombre}</h2>
          </div>
          <div className='flex justify-between items-center'>
          <p>{descripcion}</p>
          <div className='flex gap-2 justify-end'>
            <p className='line-through text-gray-500'>S/.{precio}</p>
            <p className='font-semibold'>S/.{precio}</p>
          </div>

        </div>
        <div className='flex justify-between mt-2' style={{backgroundColor:''}}>
          <button onClick={()=>dispatch(addToCart({
            _id: product.id, 
            nombre: product.nombre,
            imagenUrl: product.imagenUrl,
            precio: product.precio,
            cantidad: 1,
            descripcion: product.descripcion,
          })) && toast.success( `${product.nombre} se ha agregado.`)} className='bg-light-gray text-cyan-600 hover:text-cyan-400'>
            Lo quiero!
          </button>
        </div>
        <div className='top-2 right-2 absolute'>
          {/* {isNew && <p className='bg-black  text-white font-semibold px-6 py-1'>Sale</p>} */}
        </div>
      </div>

      {/* toastcontainer de vista principal de productos */}
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
