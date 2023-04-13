import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login/Login'
import Inicial from './pages/inicial/Inicial'
import App from './App';
import Produtos from './pages/produtos/Produtos';
import Cadastro from './pages/cadastro/Cadastro';
import Sobre from './pages/sobre/Sobre';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './GlobalStyle.style';
// 1 - Configurando Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "inicial",
        element: <Inicial/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "produtos",
        element: <Produtos/>
      },
      {
        path: "cadastro",
        element: <Cadastro/>
      },
      {
        path: "sobre",
        element: <Sobre/>
      },
    ],
  },  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    <GlobalStyle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
