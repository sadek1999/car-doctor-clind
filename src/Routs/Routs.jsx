import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Longin/Login";
import Singup from "../Pages/Longin/Singup";
import Chaekout from "../Pages/cheak/Chaekout";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "./Private";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:"/login",
          element:<Login></Login>
        }
        ,
        {
          path:"/singup",
          element:<Singup></Singup>
        },{
          path:"cheak/:id",
          element:<Private><Chaekout></Chaekout></Private>,
          loader:({params})=>fetch(`http://localhost:5002/service/${params.id}`),

        
        },
        {
          path:'/bookings/:email',
          element:<Private><Bookings></Bookings></Private>,
          loader:({params})=>fetch(`http://localhost:5002/bookings?email=${params.email}`)
        }
      ]
    },
  ]);

  export default router;