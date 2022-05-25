import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from 'styled-components';
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from '@fullcalendar/list';

const Calendar = styled.div`
  height: 500px;
  padding: 0 10px;
`


const CalendarMain = () => {
  return(
    <FullCalendar plugins={[ dayGridPlugin ]} initialView="dayGridMonth" />
  )
}

export default CalendarMain;