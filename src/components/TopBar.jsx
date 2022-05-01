import React from 'react';
import styled from 'styled-components';

const TopBar = (props) => {

    const TopBtnBlog = styled.div`
        width: 200px;
        border: 3px solid #ffd966;
        border-radius: 5px;
        margin: 15px 40px 0;
        text-align: center;
        background-color: ${props => props.blog ? '#ffd966' : '#fff'}
    `
    const BlogSpan = styled.span`
        padding: 10px 20px;
        font-size: 25px;
        display: block;
        color: ${props => props.blog ? '#fff' : '#000'}
    `
    const TopBtnGallery = styled.div`
        width: 200px;
        border: 3px solid #ffd966;
        border-radius: 5px;
        margin: 15px 40px 0;
        text-align: center;
        background-color: ${props => props.gallery ? '#ffd966' : '#fff'}
    `
    const GallerySpan = styled.span`
        padding: 10px 20px;
        font-size: 25px;
        display: block;
        color: ${props => props.gallery ? '#fff' : '#000'}
    `
    const TopBtnCalendar = styled.div`
        width: 200px;
        border: 3px solid #ffd966;
        border-radius: 5px;
        margin: 15px 40px 0;
        text-align: center;
        background-color: ${props => props.calendar ? '#ffd966' : '#fff'}
    `
    const CalendarSpan = styled.span`
        padding: 10px 20px;
        font-size: 25px;
        display: block;
        color: ${props => props.calendar ? '#fff' : '#000'}
    `
    const TopBtnFriends = styled.div`
        width: 200px;
        border: 3px solid #ffd966;
        border-radius: 5px;
        margin: 15px 40px 0;
        text-align: center;
        background-color: ${props => props.friends ? '#ffd966' : '#fff'}
    `
    const FriendsSpan = styled.span`
        padding: 10px 20px;
        font-size: 25px;
        display: block;
        color: ${props => props.friends ? '#fff' : '#000'}
    `

    return (
        <div class="topbtn_box">
            <TopBtnBlog blog={props.blog}>
                <a href="./blog.html"><BlogSpan blog={props.blog}>일기장</BlogSpan></a>
            </TopBtnBlog>
            <TopBtnGallery gallery={props.gallery}>
                <a href="./gallery.html"><GallerySpan gallery={props.gallery}>사진첩</GallerySpan></a>
            </TopBtnGallery>
            <TopBtnCalendar calender={props.calender}>
                <a href="./calender.html"><CalendarSpan calender={props.calender}>캘린더</CalendarSpan></a>
            </TopBtnCalendar>
            <TopBtnFriends friends={props.friends}>
                <a href="./friends.html"><FriendsSpan friends={props.friends}>친구목록</FriendsSpan></a>
            </TopBtnFriends>
        </div>
    )
}

export default TopBar