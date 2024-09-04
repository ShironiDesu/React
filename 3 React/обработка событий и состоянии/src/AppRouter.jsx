import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/context.js';

import  {privateRoutes,publicRoutes}  from './router.js';
export default function AppRouter() {
const {isAuth,setIsAuth}  = useContext(AuthContext)
  return isAuth?( <Routes>
{privateRoutes.map(route=>(<Route key={route.path}path={route.path} element={<route.element/>} exact={route.exact}></Route>))}
<Route path='*' element={<Navigate to='/'></Navigate>}></Route>
  </Routes> 

  ):(
    <Routes>
      {publicRoutes.map(route=>(<Route key={route.path} path={route.path} element={<route.element/>} exact={route.exact} ></Route>))}
<Route  path='*' element={<Navigate to='/login'></Navigate>}></Route>
  </Routes> 
   
  )
}
   
