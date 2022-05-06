import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import BlogWrite from '../components/BlogWrite';

function BlogWritePage() {

    return (
        <React.Fragment>
            <MainTop />
            <TopBar blog={true} />
            <BlogWrite />
        </React.Fragment>
    );
}

export default BlogWritePage