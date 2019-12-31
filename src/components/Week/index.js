import React from 'react'
import Day from '../Day'
const Week = ({date,
  currentMonthView,
  selected,
  select,
  monthEvents}) => {
      let days = [];  
      for (var i = 0; i < 7; i++) {
        var dayHasEvents = false;
  
        for (var j = 0; j < monthEvents.length; j++) {
          if (monthEvents[j].date.isSame(date, "day")) {
            dayHasEvents = true;
          }
        }
  
        let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === currentMonthView.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date,
          hasEvents: dayHasEvents
        };
  
        days.push(<Day day={day} selected={selected} select={select} />);
        date = date.clone();
        date.add(1, "d");
      }
      return (
        <div className="row week">
          {days}
        </div>
      );
    }
  
  export default Week