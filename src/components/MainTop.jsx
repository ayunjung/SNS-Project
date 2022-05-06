import React from 'react';
import LogoutLogo from './LogoutLogo';
import MainLogo from './MainLogo';


const MainTop = () => {

    return (
      <div className="title">
        <MainLogo />
        <LogoutLogo />
      </div>
    );
}

export default MainTop