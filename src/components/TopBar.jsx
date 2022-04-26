import React from 'react';

const TopBar = () => {

    return (
        <div class="top-btn">
            <div class="currentbtn">
                <a href="./blog.html"><span>일기장</span></a>
            </div>
            <div class="otherbtn">
                <a href="./gallery.html"><span>사진첩</span></a>
            </div>
            <div class="otherbtn">
                <a href="./calender.html"><span>캘린더</span></a>
            </div>
            <div class="otherbtn">
                <a href="./friends.html"><span>친구목록</span></a>
            </div>
        </div>
    )
}

export default TopBar