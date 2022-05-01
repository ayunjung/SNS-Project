import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import CalendarMain from '../components/CalendarMain';

function CalendarPage() {

    return (
        <>
            <MainTop />
            <TopBar calendar={true} />
            <CalendarMain />
        </>
    );
}

export default CalendarPage