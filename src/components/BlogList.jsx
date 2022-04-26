import React from 'react';

const BlogList = () => {

    return (
        <main id="mainbox">
            <div class="blog_list">
                <div class="blog_top">
                    <div class="blog_num">번호</div>
                    <div class="blog_title">제목</div>
                    <div class="blog_date">작성일</div>
                </div>
                <ul id="bplist">
                    <li>
                        <div class="blog_num">1</div>
                        <div class="blog_title"><a href="blogview.html">글 제목</a></div>
                        <div class="blog_date">2021.11.14</div>
                    </li>
                    <li>
                        <div class="blog_num">2</div>
                        <div class="blog_title"><a href="blogview.html">글 제목</a></div>
                        <div class="blog_date">2021.11.14</div>
                    </li>
                    <li>
                        <div class="blog_num">3</div>
                        <div class="blog_title"><a href="blogview.html">글 제목</a></div>
                        <div class="blog_date">2021.11.14</div>
                    </li>
                    <li>
                        <div class="blog_num">4</div>
                        <div class="blog_title"><a href="blogview.html">글 제목</a></div>
                        <div class="blog_date">2021.11.14</div>
                    </li>
                    <li>
                        <div class="blog_num">5</div>
                        <div class="blog_title"><a href="blogview.html">글 제목</a></div>
                        <div class="blog_date">2021.11.14</div>
                    </li>
                    <li>
                        <div class="blog_num">6</div>
                        <div class="blog_title"><a href="blogview.html">글 제목</a></div>
                        <div class="blog_date">2021.11.14</div>
                    </li>
                    <li>
                        <div class="blog_num">7</div>
                        <div class="blog_title"><a href="blogview.html">글 제목</a></div>
                        <div class="blog_date">2021.11.14</div>
                    </li>
                </ul>
            </div>
            <div class="blog_page">
                <a href="#" class="btn first">〈〈</a>
                <a href="#" class="btn prev">〈</a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="btn next">〉</a>
                <a href="#" class="btn last">〉〉</a>
            </div>
            <div class="add_btn">
                <a href="blogupload.html" class="on">등록</a>
            </div>
        </main>
    )
}

export default BlogList