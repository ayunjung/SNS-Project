import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <div className="topbtn_box">
            <TopBtnBlog blog={props.blog}>
                <Link to="./BlogPage"><BlogSpan blog={props.blog}>일기장</BlogSpan></Link>
            </TopBtnBlog>
            <TopBtnGallery gallery={props.gallery}>
                <Link to="./GalleryPage"><GallerySpan gallery={props.gallery}>사진첩</GallerySpan></Link>
            </TopBtnGallery>
            <TopBtnCalendar calender={props.calender}>
                <Link to="./CalendarPage"><CalendarSpan calender={props.calender}>캘린더</CalendarSpan></Link>
            </TopBtnCalendar>
            <TopBtnFriends friends={props.friends}>
                <Link to="./FriendsPage"><FriendsSpan friends={props.friends}>친구목록</FriendsSpan></Link>
            </TopBtnFriends>
        </div>
    )
}

export default TopBar