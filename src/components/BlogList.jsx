import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {

    return (
        <main id="mainbox">
            <div className="blog_list">
                <div className="blog_top">
                    <div className="blog_num">번호</div>
                    <div className="blog_title">제목</div>
                    <div className="blog_date">작성일</div>
                </div>
                <ul id="bplist">
                    <li>
                        <Link to="./BlogViewPage">
                            <div className="blog_num">1</div>
                            <div className="blog_title">개강.....</div>
                            <div className="blog_date">2021.03.08</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="./BlogViewPage">
                            <div className="blog_num">2</div>
                            <div className="blog_title">여수 여행!</div>
                            <div className="blog_date">2021.05.11</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="./BlogViewPage">
                            <div className="blog_num">3</div>
                            <div className="blog_title">생일 파티♥</div>
                            <div className="blog_date">2021.11.14</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="./BlogViewPage">
                            <div className="blog_num">4</div>
                            <div className="blog_title">나도 프론트엔드 개발자</div>
                            <div className="blog_date">2021.12.10</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="./BlogViewPage">
                            <div className="blog_num">5</div>
                            <div className="blog_title">복학생 친구들</div>
                            <div className="blog_date">2022.03.09</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="./BlogViewPage">
                            <div className="blog_num">6</div>
                            <div className="blog_title">취업 준비</div>
                            <div className="blog_date">2022.04.17</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="./BlogViewPage">
                            <div className="blog_num">7</div>
                            <div className="blog_title">공부공부공부</div>
                            <div className="blog_date">2022.05.01</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="blog_page">
                <a href="/" className="btn first">〈〈</a>
                <a href="/" className="btn prev">〈</a>
                <a href="/" className="num on">1</a>
                <a href="/" className="num">2</a>
                <a href="/" className="num">3</a>
                <a href="/" className="num">4</a>
                <a href="/" className="num">5</a>
                <a href="/" className="btn next">〉</a>
                <a href="/" className="btn last">〉〉</a>
            </div>
            <div className="add_btn">
                <Link to="./BlogWritePage" className="on">글쓰기</Link>
            </div>
        </main>
    )
}

export default BlogList