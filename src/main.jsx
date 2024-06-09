import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Layout from "../src/components/Layout.jsx"
import App from './App.jsx'
import PageOne from "./components/1.2_pages/Page01.jsx"
import './index.css'


const router2 = createBrowserRouter([
  {
    path: "",
    element: (<>
                <Layout/>
                <App/>
              </>
    ),
  },
  {
    path: "/owner",
    element: (<>
                <Layout/>
                <PageOne/>
              </>
    ),
  },
]);

// {
//   path: "",
//   element: (<>
//               <Layout/>
//               <Outlet />
//             </>
//   ),
//   children: [
//     {
//       path:"",
//       element: <App/>,
//     },
//     {
//       path:"/owner",
//       element: <PageOne/>,
//     }
//   ]
// },

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router2}/> 
  </React.StrictMode>
);
