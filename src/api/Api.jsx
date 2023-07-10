import axios from "axios";

export const productsData = async()=>{
  const products = await axios.get("http://52.20.145.207:3000/api/products")
  return products;
}

export const usersData = async()=>{
  const users = await axios.get("http://52.20.145.207:3000/api/users")
  return users;
}



