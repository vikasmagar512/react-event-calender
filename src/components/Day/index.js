import React from 'react'
const Day = ({day, selected, select}) =>
  <div
    className={
      "day" +
      (day.isToday ? " today" : "") +
      (day.isCurrentMonth ? "" : " different-month") +
      (day.date.isSame(selected) ? " selected" : "") +
      (day.hasEvents ? " has-events" : "")
    }
    onClick={() => select(day)}
  >
    <div className="day-number">{day.number}</div>
  </div>
  export default Day