import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

const Events = ({selectedDay,selectedMonthEvents,removeEvent})=>{
  
      const monthEventsRendered = selectedMonthEvents.map((event, i) => {
        return (
          <div
            key={event.title}
            className="event-container"
            onClick={() => removeEvent(i)}
          >
            <ReactCSSTransitionGroup
              component="div"
              className="animated-time"
              transitionName="time"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <div className="event-time event-attribute">
                {event.date.format("HH:mm")}
              </div>
            </ReactCSSTransitionGroup>
            <ReactCSSTransitionGroup
              component="div"
              className="animated-title"
              transitionName="title"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <div className="event-title event-attribute">{event.title}</div>
            </ReactCSSTransitionGroup>
          </div>
        );
      });
  
      const dayEventsRendered = [];
  
      for (var i = 0; i < monthEventsRendered.length; i++) {
        if (selectedMonthEvents[i].date.isSame(selectedDay, "day")) {
          dayEventsRendered.push(monthEventsRendered[i]);
        }
      }
  
      return (
        <div className="day-events">
          {dayEventsRendered.length ? dayEventsRendered : (<p>No Events</p>)}
        </div>
      );
    }

  export default Events