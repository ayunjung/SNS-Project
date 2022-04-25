import React from 'react';

const MainTop = () => {

    return (
        <div class="container">
            <div class="profile">
                <img src="./image/people.png" width="150px" height="200px" />
                <div class="name">아윤</div>
                <div class="intro">나는 신입 개발자 아자!!</div>
                <a href="/MainPage" class="change">프로필 수정</a>
            </div>
            <div class="mainbox">
                <div class="main-btn">
                    <a href="/BlogPage"><span>일기장</span></a>
                </div>
                <div class="main-btn">
                    <a href="/Gallery"><span>사진첩</span></a>
                </div>
                <div class="main-btn">
                    <a href="/Calender"><span>캘린더</span></a>
                </div>
                <div class="main-btn">
                    <a href="/Friends"><span>친구목록</span></a>
                </div>
            </div>
        </div>
    )
}

export default MainTop