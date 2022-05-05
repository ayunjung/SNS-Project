import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import FriendsList from '../components/FriendsList';

function FriendsPage() {

    return (
        <React.Fragment>
            <MainTop />
            <TopBar friends={true} />
            <FriendsList />
        </React.Fragment>
    );
}

export default FriendsPage