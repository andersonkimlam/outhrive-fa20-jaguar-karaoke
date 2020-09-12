import React from 'react';

class Calendar extends React.Component {
  render() {
    return (
      <div className="calendar-page">
        <h1>Reserve a Room</h1>

        <p>Please see the calendar below for available reservation dates.
            Call Paul at xxx-xxx-xxxx to make a reservation!
        </p>



        <div >
        <iframe className = "googleCalendar" src="https://calendar.google.com/calendar/embed?src=ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com&ctz=America%2FLos_Angeles" ></iframe>     
        </div>
    </div>

    );

  }
}

export default Calendar;
