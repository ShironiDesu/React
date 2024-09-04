// Header.js
import React from 'react';
import { useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/context';


const Header = () => {
  const [showLogout,setShowLogout] = useState(false)
  const {isAuth,setIsAuth}  = useContext(AuthContext)
    useEffect(()=>{
    
        if(localStorage.getItem('auth') === 'true') {
        setShowLogout(true)
        } else {
          setShowLogout(false)
        }
    },[isAuth])
    const logout = ()=>{
      setIsAuth(false)
      localStorage.clear()
      setShowLogout(false)
    }
    return (
      <header className="header">
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/posts" className="nav-link">Posts</Link>
        

          {showLogout ? (
                <Link to="/logout" onClick={logout} className="nav-link">Logout</Link>
          ):(  <Link to="/login"  className="nav-link">Login</Link>)}
        </nav>
      </header>
    );
};

export default Header;
