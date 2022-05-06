import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";

const LogoutLogo = () => {

    if (window.location.pathname === '/') return null;
    if (window.location.pathname === '/LoginPage') return null;
    if (window.location.pathname === '/JoinPage') return null;
  
    return (
        <div className="logout">
          <Link to="./LoginPage">
            <IoLogOut width="100px" height="40px" color='white'/>
          </Link>
        </div>
    );
}

export default LogoutLogo
