import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs.jsx';
import Authprobider from './provider/Authprobider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
<React.StrictMode>
  <Authprobider> <RouterProvider router={router} /></Authprobider>
  </React.StrictMode>,
  </div>
  
)
