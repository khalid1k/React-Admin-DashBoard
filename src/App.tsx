import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/home"
import Product from "./pages/products/product";
import User from "./pages/user/user";
import Navbar from "./components/navBar/navbar";
import Footer from "./components/Footer/footer";
import Menu from "./components/Menu/menu";
import "./styles/global.scss";
import SingleUser from "./components/singleUser/singleUser";
import SingleProduct from "./components/singleProduct/singleProduct";

function App() {
  const Layout=()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Layout/>,
    
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"products",
        element:<Product/>
      },
      {
        path:"users",
        element:<User/>
      },
      {
        path:"users/users/:id",
        element:<SingleUser/>
      },
      {
        path:"products/products/:id",
        element:<SingleProduct/>
      },
    ]
  },
   
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
