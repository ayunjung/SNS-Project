import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import BlogList from '../components/BlogList';

function BlogPage() {

    return (
        <>
            <MainTop />
            <TopBar blog={true} />
            <BlogList />
        </>
    );
}

export default BlogPage