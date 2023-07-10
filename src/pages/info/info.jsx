import { useEffect, useState } from "react"
import { Banner } from "../../components/Banner"
import { Products } from "../../components/Products"
import { useLoaderData } from "react-router-dom"

export const Info = () => {

  const [products, setProducts] = useState([])
  const data = useLoaderData()

  return (
    <div>
      <Banner/>
      <Products products={products}/>
    </div>
  )
}
