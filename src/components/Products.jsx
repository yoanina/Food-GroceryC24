import { ProductsCard } from "./ProductsCard"

export const Products = ({products})=>{
  console.log(products)  

  return <div className="py-10 cursor-pointer">
    <div className="flex flex-col items-center gap-4" style={{marginTop:5, marginBottom:1}}>
      <h1 className="text-2xl text-white py-2 w-80 text-center" style={{ backgroundColor: 'black' , borderRadius:10, color:'#F7F3E7', marginTop:10}}>Nuestros Productos</h1>
      <span className="w-20 h-3 bg-black"></span>
      <p className="max-w-[700px] text-gray-600 text-center">
      Aqui en FOOD & GROCERY encontraras todos los productos que desees, brindandote la calidad que te mereces.    
      </p>
    </div>
    <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
      {products.map((item, key)=>{
        return <ProductsCard product={item} key={key}/>
      })}
    </div>
  </div>
}


