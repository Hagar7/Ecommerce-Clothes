import {  createHashRouter, RouterProvider } from "react-router-dom";
import CategoryDetails from "./Components/CategoryDetails/CategoryDetails";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";


function App() {

  let routes = createHashRouter([
    {path:'/',element:<MasterLayout/>,errorElement:<NotFound/>,children:[
      {index:true,element:<Home/>},
      {path:"shop",element:<Shop/>},
      {path:"categories/:id",element:<CategoryDetails/>},
      {path:"cart",element:<Cart/>},
    ]},

  ])



  return (
   <RouterProvider router={routes}/>
  );
}

export default App;
