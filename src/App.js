import './App.css';
import { Home } from './pages/Home/Home';
import { Info } from './pages/info/info';
import { Location } from './pages/location/location'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './pages/cart/cart';
import { productsData } from './api/Api';
import { createBrowserRouter,Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { Product } from './pages/product/product';
import { Login } from './pages/login/Login';
import CreateUserForm from './pages/CreateuserForm/CreateUserForm';
import LoginUserCreated from './pages/LoginUserCreated/LoginUserCreated';


const Layout = ()=>{
  return <div>
    <Header/>
    <ScrollRestoration/>
    <Outlet/>
    <Footer/>
  </div>
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path: '/',
        element: <Home/>,
        loader: productsData
      },
      {
        path:'/product/:id',
        element: <Product/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/info',
        element: <Info/>
      },
      {
        path: '/location',
        element: <Location/>
      },
      {
        path: '/CreateUserForm',
        element: <CreateUserForm/>
      },
      {
        path: '/LoginUserCreated',
        element: <LoginUserCreated/>
      }
    ]
  }
]) 

function App() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
