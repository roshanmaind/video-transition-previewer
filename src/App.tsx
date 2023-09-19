import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from './config/routes';


const router = createBrowserRouter(routes);

function App (): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}

export default App
