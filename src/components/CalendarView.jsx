import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  
  const calendarEvents = [
    { id: 1, title: 'Order 1', date: new Date(2022, 2, 15) }, // Note: Months are zero-indexed
    { id: 2, title: 'Order 2', date: new Date(2022, 2, 16) },
    
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Calendar View</h1>

      
      <Calendar
        onClickDay={(date) => handleDateClick(date)}
        tileContent={({ date, view }) => {
          const event = calendarEvents.find((event) => event.date.toDateString() === date.toDateString());

          if (event) {
            return <div>{event.title}</div>;
          }

          return null;
        }}
      />

      {selectedDate && (
        <div>
          <h2>Selected Date</h2>
          <p>Date: {selectedDate.toDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
