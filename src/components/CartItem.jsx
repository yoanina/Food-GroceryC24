import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { decrementQantity, deleteFromCart, incrementQuantity, resetCart } from "../redux/bazaarSlice";


export const CartItem = () => {
  const dispatch = useDispatch()

  const productData = useSelector((state)=> state.bazar.productData)
  console.log(productData)

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Cesta de Productos</h2>
      </div>
      <div>
        {
         productData.map((item, key)=>{
          return <div key={item._id} className="flex items-center justify-between gap-6 mt-6">
            <div className="flex items-center gap-2">
              <CloseIcon onClick={()=> dispatch(deleteFromCart(item._id))}  className="text-xl text-cyan-600 hover:text-black-600 cursor-pointer duration-300"/>
              <img src={item.imagenUrl} className="w-32 h-32 object-cover ml-4" alt="" />
            </div> 
            <h2 className="w-52 ">{item.nombre}</h2>
            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                  <p className='text-base text-black'>Cantidad</p>
                  <div className='flex items-center gap-4 text-sm font-semibold'>
                    <button onClick={()=> dispatch(decrementQantity({
                      _id: item._id,
                      nombre: item.nombre,
                      imagenUrl: item.imagenUrl,
                      precio : item.precio,
                      cantidad: item.cantidad,
                      descripcion: item.descripcion
                    }))}
                     className='border text-black h-5 font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>-</button>
                    <span>{item.cantidad}</span>
                    <button onClick={()=> dispatch(incrementQuantity({
                       _id: item._id,
                       nombre: item.nombre,
                       imagenUrl: item.imagenUrl,
                       precio: item.precio,
                       cantidad: 1,
                       descripcion: item.descripcion
                      
         }))} className='border h-5 text-black font-normal text-1g flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer py-3 duration-300 active:bg-black'>+</button>
                  </div>
                </div>
            <p className="w-10">S/.{item.precio * item.cantidad}</p>
          </div>
         })
        }
        <button onClick={()=> dispatch(resetCart())} className='text-l text-white py-2 ml-0 px-10 mt-8'
         style={{ backgroundColor: 'black' , borderRadius:7, color:'#F7F3E7', marginTop:27}}>Eliminar pedido </button>

      </div>
    </div>
  )
}


