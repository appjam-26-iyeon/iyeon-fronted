import styled from "styled-components";
import { Logo } from "../assets/indes";
import { Profile } from "../assets/indes";
import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../Fonts/Font.css";

const CalendarPage = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [value, onChange] = useState(new Date());

  const handleDateChange = (value: Date | Date[]) => {
    if (Array.isArray(value)) {
      setSelectedDates(value);
    } else {
      setSelectedDates([value]);
    }
  };

  const tileContent = ({ date }: { date: Date }) => {
    const firstSelectedDate = selectedDates.length > 0 ? selectedDates[0] : null;
    const lastSelectedDate = selectedDates.length > 0 ? selectedDates[selectedDates.length - 1] : null;

    if (firstSelectedDate && lastSelectedDate && date >= firstSelectedDate && date <= lastSelectedDate) {
      return (
        <div className="event-marker" style={{ backgroundColor: '#FDECEC' }} />
      );
    }
    return null;
  };

  return (
    <>
      <Navbar>
        <Logopicture src={Logo} />
        <Profilepicture src={Profile} />
      </Navbar>
      <CalendarContainer>
        <StyledCalendar
          onChange={onChange}
          value={value}
          calendarType="gregory"
          view="month"
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
          tileContent={tileContent}
          selectRange
        />
      </CalendarContainer>

      <Gap />

      <PromiseTitleContainer>
        <PromiseTitle>약속</PromiseTitle>
      </PromiseTitleContainer>

      <Gap />
      
      <Boxes>
        <PromiseBox>
          <PromiseDate>
            <PromiseDateNumber>2</PromiseDateNumber>
          </PromiseDate>
          <PromiseTitlespan>내 약속</PromiseTitlespan>
          <PromiseSpan>어디가서 뭐하고 뭐하기</PromiseSpan>
        </PromiseBox>
      </Boxes>

      <Gap />

      <Boxes>
        <PromiseBox>
          <PromiseDate>
            <PromiseDateNumber>2</PromiseDateNumber>
          </PromiseDate>
          <PromiseTitlespan>상대방</PromiseTitlespan>
          <PromiseSpan>어디가서 뭐하고 뭐하기</PromiseSpan>
        </PromiseBox>
      </Boxes>
    </>
  );
};


const PromiseTitleContainer = styled.span`
  display: flex;
  justify-content: left;
  margin-left: 10px;
`

const PromiseTitle = styled.span`
  color: black;
  font-weight: 600;
  font-size: 6vw;
`

const Boxes = styled.div`
  display: flex;
  justify-content: center;
`

const PromiseBox = styled.div`
  width: 90%;
  height: 8vh;
  box-shadow: 2px 2px 10px #00000040;
  margin-left: 12px;
  border-radius: 15px;
  display: flex;
  justify-content: left;
  padding-left: 10px;
  align-items: center;
`

const PromiseDate = styled.div`
  border-radius: 50px;
  width: 12vw;
  height: 5vh;
  background-color: #FDECEC;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PromiseDateNumber = styled.span`
  color: #FE8989;
  font-weight: 600;
  font-size: 5vw;
  margin-top: -3px;
`

const PromiseTitlespan = styled.span`
  color: black;
  font-weight: 600;
  font-size: 4vw;
  font-family: Pretendard-Regular;
  padding-left: 20px;
`

const PromiseSpan = styled.span`
  color: #AAAAAA;
  font-weight: 500;
  font-size: 3vw;
  padding-left: 20px;
  align-items: center;
`

const Gap = styled.div`
  height: 30px;
`

// Navbar 스타일 설정
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

// 로고 이미지 스타일 설정
const Logopicture = styled.img`
  width: 25px;
  padding-left: 20px;
`;

// 프로필 이미지 스타일 설정
const Profilepicture = styled.img`
  width: 18px;
  margin-left: auto;
  padding-right: 20px;
`;

// 캘린더 컨테이너 스타일 설정
const CalendarContainer = styled.div`
  margin-top: 12vh;
  padding-top: 2vh;
  display: flex;
  justify-content: center;
`;

// 캘린더 컴포넌트의 스타일 설정
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
    color: #FE8989;
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

  .react-calendar__month-view__weekdays__weekday {
    color: #CCCCCC;
  }

  .react-calendar__tile {
    color: #CCCCCC;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #FE8989;
    border-radius: 6px;
  }

  .react-calendar__tile--now {
    background: #ffffff;
    border-radius: 6px;
    font-weight: bold;
    color: #CCCCCC;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #FE8989;
    border-radius: 6px;
    font-weight: bold;
    color: #FE8989;
  }
  
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }

  // 선택된 날짜의 스타일 설정
  .react-calendar__tile--active {
    background: #FE8989;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #FDECEC;
    color: #FE8989;
  }

  // 범위 선택 시 첫 날짜의 스타일 설정
  .react-calendar__tile--rangeStart {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #FE8989;
    color: #FDECEC; // 텍스트 색상 변경
  }

  // 범위 선택 시 마지막 날짜의 스타일 설정
  .react-calendar__tile--rangeEnd {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #FE8989;
    color: white;
  }

  // 범위 선택 시 중간에 있는 날짜의 스타일 설정
  .react-calendar__tile--range {
    background: #FDECEC;
    color: #FE8989;
    border-radius: 0;
  }
`;

export default CalendarPage;
