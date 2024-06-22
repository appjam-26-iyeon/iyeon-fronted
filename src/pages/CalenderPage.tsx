import styled from "styled-components";
import { Logo } from "../assets/indes";
import { Profile } from "../assets/indes";
import React, { useState } from 'react';
import Calendar, { CalendarProps, CalendarTileProperties } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../Fonts/Font.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Navbar = styled.div`
  background-color: #FF9393;
  width: 100vw;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
`;

const Logopicture = styled.img`
  width: 25px;
  padding-left: 20px;
`;

const Profilepicture = styled.img`
  width: 18px;
  margin-left: auto;
  padding-right: 20px;
`;

const CalendarContainer = styled.div`
  margin-top: 12vh;
  padding-top: 2vh;
  display: flex;
  justify-content: center;
`;

const StyledCalendar = styled(Calendar)<CalendarProps>`
  .react-calendar { 
 width: 400px;
 max-width: 100%;
 background-color: #fff;
 color: #222;
 border-radius: 8px;
 box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
 font-family: Arial, Helvetica, sans-serif;
 line-height: 1.125em;
}
.react-calendar__navigation button {
 color: #6f48eb;
 min-width: 44px;
 background: none;
 font-size: 16px;
 margin-top: 8px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #f8f8fa;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
}
/* .react-calendar__month-view__days__day--weekend {
 color: #d10000;
} */
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
 background: #f8f8fa;
 color: #6f48eb;
 border-radius: 6px;
}
.react-calendar__tile--now {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #6f48eb;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
 background: #6f48eb33;
 border-radius: 6px;
 font-weight: bold;
 color: #6f48eb;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
 background: #6f48eb;
 border-radius: 6px;
 font-weight: bold;
 color: white;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: #6f48eb;
 color: white;
}
.react-calendar--selectRange .react-calendar__tile--hover {
 background-color: #f8f8fa;
}
.react-calendar__tile--range {
 background: #f8f8fa;
 color: #6f48eb;
 border-radius: 0;
}
.react-calendar__tile--rangeStart {
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 border-top-left-radius: 6px;
 border-bottom-left-radius: 6px;
 background: #6f48eb;
 color: white;
}
.react-calendar__tile--rangeEnd {
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 border-top-right-radius: 6px;
 border-bottom-right-radius: 6px;
 background: #6f48eb;
 color: white;
}
`;

const CalendarPage = () => {

  const [value, onChange] = useState<Value>(new Date());
  const [selectedDate, setSelectedDate] : any = useState<typeof selectedDate>(new Date());

  const handleDateChange = (value: Date | Date[]) => {
    setSelectedDate(value);
    alert('New date is: ' + value);
  };

  return (
    <>
      <Navbar>
        <Logopicture src={Logo} />
        <Profilepicture src={Profile} />
      </Navbar>
      <CalendarContainer>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          calendarType="gregory"
          view="month"
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}>
        </Calendar>
      </CalendarContainer>
    </>
  );
};

export default CalendarPage;