import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './pages/login-page/LoginPage.jsx'
import { HomePage } from './pages/home-page/HomePage.jsx'
import { RegisterPage } from './pages/register-page/RegisterPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>
  },
  {
    path: "home-page",
    element: <HomePage></HomePage>
  },
  {
    path: "register-page",
    element: <RegisterPage></RegisterPage>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
