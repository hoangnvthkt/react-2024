import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/pages/login.jsx';
import RegisterPage from './components/pages/register.jsx';
import UserPage from './components/pages/user.jsx';
import ProductPage from './components/pages/product.jsx';
import TodoApp from './components/todo/TodoApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/product",
        element: <ProductPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
