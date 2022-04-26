import React from 'react';

let date = new Date();

const renderCalender = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    //year-month채우기
    document
        .querySelector('.year-month')
        .textContent = `${viewYear}년 ${viewMonth + 1}월`;

    //지난 달 마지막 Date, 이번 달 마지막 Date
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    //Dates 기본 배열들
    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    //prevDates 계산
    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    //nextDates 계산
    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }

    //Dates합치기
    const dates = prevDates.concat(thisDates, nextDates);

    //Dates 정리
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
            ? 'this'
            : 'other';
        dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
    });

    //Dates그리기
    document
        .querySelector('.dates')
        .innerHTML = dates.join('');

    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date
                    .classList
                    .add('today');
                break;
            }
        }
    }
}

renderCalender();

const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
}
const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
}
const goToday = () => {
    date = new Date();
    renderCalender();
}

// const modal = document.querySelector('.dates');
// const OpenPopup = document.querySelector('.date');
// btnOpenPopup.addEventListener('click', () => {
//     modal.style.display = 'block';
// });

const CalendarMain = () => {

    return (
        <main id="calendermain">
            <div class="calender">
                <div class="header">
                    <div class="year-month"></div>
                    <a href="schedule.html">일정보기</a>
                    <div class="nav">
                        <button class="nav-btn go-prev" onClick={prevMonth}>&lt;</button>
                        <button class="nav-btn go-today" onClick={goToday}>Today</button>
                        <button class="nav-btn go-next" onClick={nextMonth}>&gt;</button>
                    </div>
                </div>
            </div>
            <div class="calenderdays">
                <div class="days">
                <div class="day">일</div>
                <div class="day">월</div>
                <div class="day">화</div>
                <div class="day">수</div>
                <div class="day">목</div>
                <div class="day">금</div>
                <div class="day">토</div>
                </div>
                <div class="dates"></div>
            </div>
        </main>
    )
}

export default CalendarMain