import React from 'react';
import { Link } from 'react-router-dom';

const BlogView = () => {

    return (
        <main id="mainbox">
            <div className="blogview">
                <div className="blogview_title">
                    글 제목이 들어갈 자리
                </div>
                <div className="blogview_info">
                    <dl>
                        <dt>번호</dt>
                        <dd>1</dd>
                    </dl>
                    <dl>
                        <dt>작성일</dt>
                        <dd>2021.11.14</dd>
                    </dl>
                </div>
                <div className="blogview_cont">
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요<br/>
                    글내용이 들어가요
                </div>
            </div>
            <div className="add_btn">
                <Link to="./BlogPage" className="on">목록</Link>
                <Link to="./BlogWritePage">수정</Link>
                <input type="button" value="삭제" id="delete_button"/>
            </div>
        </main>
    )
}

export default BlogView