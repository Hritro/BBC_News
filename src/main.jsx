import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home.jsx';
import NewsPage from './Pages/NewsPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>{
            return fetch('https://news-api-fs.vercel.app/api/news')
            .then(res => res.json())
            
        }
      },
      {
        path: '/page/:id',
        element: <NewsPage></NewsPage>,
        loader: ({params}) => {
          return fetch(`https://news-api-fs.vercel.app/api/categories/${params.id}`)
          .then(res => res.json())
        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
