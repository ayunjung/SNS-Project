import React from 'react';

const PhotoList = () => {

    return (
        <main id="gallery_mainbox">
            <div class="gallery_btn">
                <a href="galleryupload.html" class="on">사진 올리기</a>
            </div>
            <div class="gallery_cont">
                <div class="photozip">
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                </div>
                <div class="photozip">
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                </div>
                <div class="photozip">
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                <div class="cell"><a href="galleryview.html"><img src="people.png" alt=""/></a></div>
                </div>
            </div>
        </main>
    )
}

export default PhotoList