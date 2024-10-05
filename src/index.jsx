import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ErroPage from './Pages/ErrorPage';
import Users from './Pages/Users';
import Logout from './Pages/Logout';
import UserDetail from './Pages/UserDetail';
import NewUsers from './Pages/NewUsers';

const publicRout = createBrowserRouter([{
  path:'/', element:<App/>,
  children:[
    {path: '/', element:<Home/>},
    {path: '/home', element:<Home/>},
    {path: '/login', element:<Login/>},
    {path: '/*', element:<ErroPage/>}
  ]
}])

const protectedRout  = createBrowserRouter([{
  path:'/', element:<App/>,
  children:[
    {path: '/', element:<Users/>},
    {path: '/users', element:<Users/>},
    {path: '/users/:id',element:<UserDetail/>},
    {path: '/newusers', element:<NewUsers/>},
    {path: '/logout', element:<Logout/>},
    {path: '/*', element:<ErroPage/>}
  ]
}])

const route = localStorage.getItem('@userlogin/displayname') === null ? publicRout : protectedRout

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

