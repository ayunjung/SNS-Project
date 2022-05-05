import React from 'react';

const PhotoList = () => {

    return (
        <main id="gallery_mainbox">
            <div className="gallery_btn">
                <a href="galleryupload.html" className="on">사진 올리기</a>
            </div>
            <div className="gallery_cont">
                <div className="photozip">
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                </div>
                <div className="photozip">
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                </div>
                <div className="photozip">
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div className="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                </div>
            </div>
        </main>
    )
}

export default PhotoList