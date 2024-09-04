import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header';

import './App.css';
import AppRouter from './AppRouter';
import { useState } from 'react';
import { AuthContext } from './context/context';
import { useContext } from 'react';

function App() {
  const [isAuth,setIsAuth] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('auth') === 'true') {
      setIsAuth(true)
    }
  },[])
  return (
    <AuthContext.Provider value={{isAuth,setIsAuth}}>
    <Router>
      <Header />
      <AppRouter></AppRouter>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
