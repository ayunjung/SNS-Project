import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import BlogList from '../components/BlogList';

function BlogPage() {

    return (
        <React.Fragment>
            <MainTop />
            <TopBar blog={true} />
            <BlogList />
        </React.Fragment>
    );
}

export default BlogPage