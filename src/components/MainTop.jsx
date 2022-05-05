import React from 'react';
import { Link } from 'react-router-dom';
import LogoutLogo from './LogoutLogo';

const MainTop = () => {

    return (
      <div className="title">
        <Link className="logo" to="./MainPage">Diary</Link>
        <LogoutLogo />
      </div>
    );
}

export default MainTop