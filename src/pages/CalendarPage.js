import React from 'react';
import MainTop from '../components/MainTop';
import TopBar from '../components/TopBar';
import CalendarMain from '../components/CalendarMain';

function CalendarPage() {

    return (
        <React.Fragment>
            <MainTop />
            <TopBar calendar={true} />
            <CalendarMain />
        </React.Fragment>
    );
}

export default CalendarPage