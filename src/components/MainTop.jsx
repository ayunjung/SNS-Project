//https://react-icons.github.io/react-icons/#/
import React from 'react';
import { BsFillHouseDoorFill } from "react-icons/bs";

const MainTop = () => {

    return (
      <header>
        <div class="title">
          <a class="logo" href="./MainPage">Diary</a>
          <div class="logout">
            <a href="./LoginPage">
              <BsFillHouseDoorFill width="40px" height="40px" color='white'/>
            </a>
          </div>
        </div>
      </header>
    )
}

export default MainTop