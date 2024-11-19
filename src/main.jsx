import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/login-page/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
