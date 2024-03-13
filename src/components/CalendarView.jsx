import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CalendarView.module.css'; // Create a CSS file for styling

const CalendarView = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('orders')) || [];
    setCalendarEvents(storedEvents);
  }, []);

  const handleDateClick = (date) => {
    const clickedEvent = calendarEvents.find(
      (event) => new Date(event.orderDate).toDateString() === date.toDateString()
    );

    setSelectedDate(date);
    setSelectedEvent(clickedEvent);
  };

  return (
    <div className={styles.calendarContainer}>
      <h1 className={styles.title}>Calendar View</h1>

      <div className={styles.calendarWrapper}>
        <Calendar
          onClickDay={(date) => handleDateClick(date)}
          tileContent={({ date, view }) => {
            const event = calendarEvents.find(
              (event) => new Date(event.orderDate).toDateString() === date.toDateString()
            );

            if (event) {
              return <div className={styles.eventMarker}>{event.customerName}</div>;
            }

            return null;
          }}
        />
      </div>

      {selectedDate && (
        <div className={styles.selectedDateInfo}>
          <h2>Selected Date</h2>
          <p>Date: {selectedDate.toDateString()}</p>
          {selectedEvent && (
            <div>
              <h3>Event Details</h3>
              <p>Customer Name: {selectedEvent.customerName}</p>
              <p>Order Status: {selectedEvent.status}</p>
              {/* Add more details as needed */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarView;
