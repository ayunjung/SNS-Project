import React from 'react';
import { Link } from 'react-router-dom';

const BlogWrite = () => {

    return (
        <main id="mainbox">
            <div className="blogupload">
            <div className="blogupload_title">
                <dl>
                    <dt>제목</dt>
                    <dd><input type="text" placeholder="제목" /></dd>
                </dl>
            </div>
            <div className="blogupload_write">
                <textarea placeholder="본문"></textarea>
            </div>
            </div>
            <div className="add_btn">
                <Link to="./BlogPage" className="on">완료</Link>
                <Link to="./BlogPage">취소</Link>
            </div>
      </main>
    )
}

export default BlogWrite