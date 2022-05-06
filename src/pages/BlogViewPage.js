import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import BlogView from '../components/BlogView';

function BlogViewPage() {

    return (
        <React.Fragment>
            <MainTop />
            <TopBar blog={true} />
            <BlogView />
        </React.Fragment>
    );
}

export default BlogViewPage