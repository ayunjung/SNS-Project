import React from 'react';
import { Link } from 'react-router-dom';

const FriendsList = () => {

    return (
        <main id="mainbox">
            <div>
                <ul className="friends-list">
                    <li>
                        <Link to="./MainPage"><span>정아윤</span></Link>
                    </li>
                    <li>
                        <Link to="./MainPage"><span>정아윤</span></Link>
                    </li>
                    <li>
                        <Link to="./MainPage"><span>정아윤</span></Link>
                    </li>
                    <li>
                        <Link to="./MainPage"><span>정아윤</span></Link>
                    </li>
                    <li>
                        <Link to="./MainPage"><span>정아윤</span></Link>
                    </li>
                    <li>
                        <Link to="./MainPage"><span>정아윤</span></Link>
                    </li>
                    <li>
                        <Link to="./MainPage"><span>정아윤</span></Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default FriendsList