//https://react-icons.github.io/react-icons/#/
import React from 'react';
import { IoLogOut } from "react-icons/io5";

const MainTop = () => {

    return (
      <div class="title">
        <a class="logo" href="./MainPage">Diary</a>
        <div class="logout">
          <a href="./LoginPage">
            <IoLogOut width="40px" height="40px" color='white'/>
          </a>
        </div>
      </div>
    )
}

export default MainTop