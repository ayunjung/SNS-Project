import React from 'react';
import { Link } from 'react-router-dom';

const MainLogo = () => {

    if (window.location.pathname === '/') return <span style={{cursor: 'default'}}>Diary</span>;
    if (window.location.pathname === '/LoginPage') return <span style={{cursor: 'default'}}>Diary</span>;
    if (window.location.pathname === '/JoinPage') return <span style={{cursor: 'default'}}>Diary</span>;
  
    return (
        <Link className="logo" to="./MainPage">Diary</Link>
    );
}

export default MainLogo
