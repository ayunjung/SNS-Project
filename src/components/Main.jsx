import React from 'react';

const Main = () => {

    return (
        <div className="container">
            <div className="profile">
                {/* eslint-disable-next-line */}
                <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg.flaticon.com%2Ficons%2Fpng%2F512%2F2945%2F2945266.png%3Fsize%3D1200x630f%26pad%3D10%2C10%2C10%2C10%26ext%3Dpng%26bg%3DFFFFFFFF&type=sc960_832" width="150px" height="200px" />
                <div className="name">아윤</div>
                <div className="intro">나는 신입 개발자 아자!!</div>
                <a href="/MainPage" className="change">프로필 수정</a>
            </div>
            <div className="mainbox">
                <div className="main-btn">
                    <a href="/BlogPage"><span>일기장</span></a>
                </div>
                <div className="main-btn">
                    <a href="/GalleryPage"><span>사진첩</span></a>
                </div>
                <div className="main-btn">
                    <a href="/CalenderPage"><span>캘린더</span></a>
                </div>
                <div className="main-btn">
                    <a href="/FriendsPage"><span>친구목록</span></a>
                </div>
            </div>
        </div>
    )
}

export default Main