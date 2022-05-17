import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from '@fullcalendar/list';


const CalendarMain = () => {
  return(
    <FullCalendar plugins={[ dayGridPlugin ]} initialView="dayGridMonth" />
  )
}

export default CalendarMain;