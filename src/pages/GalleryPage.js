import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import PhotoList from '../components/PhotoList';

function GalleryPage() {

    return (
        <>
            <MainTop />
            <TopBar gallery={true} />
            <PhotoList />
        </>
    );
}

export default GalleryPage