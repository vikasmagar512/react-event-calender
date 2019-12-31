(this.webpackJsonpcalender=this.webpackJsonpcalender||[]).push([[0],{15:function(e,t,a){e.exports=a(37)},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),i=a.n(r),c=(a(20),a(21),a(10)),d=a(11),l=a(13),o=a(12),m=a(2),h=a(14),u=a(1),v=a.n(u),y=(a(23),a(6)),E=a.n(y),f=function(e){for(var t=e.selectedDay,a=e.selectedMonthEvents,n=e.removeEvent,r=a.map((function(e,t){return s.a.createElement("div",{key:e.title,className:"event-container",onClick:function(){return n(t)}},s.a.createElement(E.a,{component:"div",className:"animated-time",transitionName:"time",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},s.a.createElement("div",{className:"event-time event-attribute"},e.date.format("HH:mm"))),s.a.createElement(E.a,{component:"div",className:"animated-title",transitionName:"title",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:500,transitionLeaveTimeout:500},s.a.createElement("div",{className:"event-title event-attribute"},e.title)))})),i=[],c=0;c<r.length;c++)a[c].date.isSame(t,"day")&&i.push(r[c]);return s.a.createElement("div",{className:"day-events"},i.length?i:s.a.createElement("p",null,"No Events"))},b=function(){return s.a.createElement("div",{className:"row days-header"},s.a.createElement("span",{className:"box day-name"},"Mon"),s.a.createElement("span",{className:"box day-name"},"Tue"),s.a.createElement("span",{className:"box day-name"},"Wed"),s.a.createElement("span",{className:"box day-name"},"Thu"),s.a.createElement("span",{className:"box day-name"},"Fri"),s.a.createElement("span",{className:"box day-name"},"Sat"),s.a.createElement("span",{className:"box day-name"},"Sun"))},p=function(e){var t=e.day,a=e.selected,n=e.select;return s.a.createElement("div",{className:"day"+(t.isToday?" today":"")+(t.isCurrentMonth?"":" different-month")+(t.date.isSame(a)?" selected":"")+(t.hasEvents?" has-events":""),onClick:function(){return n(t)}},s.a.createElement("div",{className:"day-number"},t.number))},M=function(e){for(var t=e.date,a=e.currentMonthView,n=e.selected,r=e.select,i=e.monthEvents,c=[],d=0;d<7;d++){for(var l=!1,o=0;o<i.length;o++)i[o].date.isSame(t,"day")&&(l=!0);var m={name:t.format("dd").substring(0,1),number:t.date(),isCurrentMonth:t.month()===a.month(),isToday:t.isSame(new Date,"day"),date:t,hasEvents:l};c.push(s.a.createElement(p,{day:m,selected:n,select:r})),(t=t.clone()).add(1,"d")}return s.a.createElement("div",{className:"row week"},c)},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={selectedMonth:v()(),selectedDay:v()().startOf("day"),selectedMonthEvents:[],showEvents:!1},a.previous=a.previous.bind(Object(m.a)(a)),a.next=a.next.bind(Object(m.a)(a)),a.addEvent=a.addEvent.bind(Object(m.a)(a)),a.showCalendar=a.showCalendar.bind(Object(m.a)(a)),a.goToCurrentMonthView=a.goToCurrentMonthView.bind(Object(m.a)(a)),a.initialiseEvents(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"previous",value:function(){var e=this.state.selectedMonth;this.setState({selectedMonth:e.subtract(1,"month")})}},{key:"next",value:function(){var e=this.state.selectedMonth;this.setState({selectedMonth:e.add(1,"month")})}},{key:"select",value:function(e){this.setState({selectedMonth:e.date,selectedDay:e.date.clone(),showEvents:!0})}},{key:"goToCurrentMonthView",value:function(){this.setState({selectedMonth:v()()})}},{key:"showCalendar",value:function(){this.setState({selectedMonth:this.state.selectedMonth,selectedDay:this.state.selectedDay,showEvents:!1})}},{key:"renderMonthLabel",value:function(){var e=this.state.selectedMonth;return s.a.createElement("span",{className:"box month-label"},e.format("MMMM YYYY"))}},{key:"renderDayLabel",value:function(){var e=this.state.selectedDay;return s.a.createElement("span",{className:"box month-label"},e.format("DD MMMM YYYY"))}},{key:"renderTodayLabel",value:function(){return s.a.createElement("span",{className:"box today-label",onClick:this.goToCurrentMonthView},"Today")}},{key:"renderWeeks",value:function(){for(var e=this,t=this.state.selectedMonth,a=this.state.selectedDay,n=this.state.selectedMonthEvents,r=[],i=!1,c=t.clone().startOf("month").subtract(1,"d").day("Monday"),d=0,l=c.month();!i;)r.push(s.a.createElement(M,{date:c.clone(),currentMonthView:t,monthEvents:n,selected:a,select:function(t){return e.select(t)}})),c.add(1,"w"),i=d++>2&&l!==c.month(),l=c.month();return r}},{key:"handleAdd",value:function(){var e=this.state.selectedMonthEvents,t=this.state.selectedDay,a=[],n=prompt("Please enter a name for your event: ");switch(n){case"":alert("Event name cannot be empty.");break;case null:alert("Changed your mind? You can add one later!");break;default:var s={title:n,date:t,dynamic:!0};a.push(s);for(var r=0;r<a.length;r++)e.push(a[r]);this.setState({selectedMonthEvents:e})}}},{key:"addEvent",value:function(){var e=this.state.selectedDay,t=v()().startOf("day").subtract(1,"d");e.isAfter(t)?this.handleAdd():window.confirm("Are you sure you want to add an event in the past?")&&this.handleAdd()}},{key:"removeEvent",value:function(e){var t=this.state.selectedMonthEvents.slice();if(window.confirm("Are you sure you want to remove this event?")){var a=e;-1!==a?t.splice(a,1):alert("No events to remove on this day!"),this.setState({selectedMonthEvents:t})}}},{key:"initialiseEvents",value:function(){var e=this.state.selectedMonthEvents,t=[],a={title:"Press the Add button and enter a name for your event. P.S you can delete me by pressing me!",date:v()(),dynamic:!1},n={title:"Event 2 - Meeting",date:v()().startOf("day").subtract(2,"d").add(2,"h"),dynamic:!1},s={title:"Event 3 - Cinema",date:v()().startOf("day").subtract(7,"d").add(18,"h"),dynamic:!1},r={title:"Event 4 - Theater",date:v()().startOf("day").subtract(16,"d").add(20,"h"),dynamic:!1},i={title:"Event 5 - Drinks",date:v()().startOf("day").subtract(2,"d").add(12,"h"),dynamic:!1},c={title:"Event 6 - Diving",date:v()().startOf("day").subtract(2,"d").add(13,"h"),dynamic:!1},d={title:"Event 7 - Tennis",date:v()().startOf("day").subtract(2,"d").add(14,"h"),dynamic:!1},l={title:"Event 8 - Swimmming",date:v()().startOf("day").subtract(2,"d").add(17,"h"),dynamic:!1},o={title:"Event 9 - Chilling",date:v()().startOf("day").subtract(2,"d").add(16,"h"),dynamic:!1},m={title:"Hello World",date:v()().startOf("day").add(5,"h"),dynamic:!1};t.push(a),t.push(n),t.push(s),t.push(r),t.push(i),t.push(c),t.push(d),t.push(l),t.push(o),t.push(m);for(var h=0;h<t.length;h++)e.push(t[h]);this.setState({selectedMonthEvents:e})}},{key:"render",value:function(){var e=this,t=this.state.showEvents;return s.a.createElement("div",{class:"calendar-rectangle"},s.a.createElement("div",{id:"calendar-content",class:"calendar-content"},t?s.a.createElement("section",{className:"main-calendar"},s.a.createElement("header",{className:"calendar-header"},s.a.createElement("div",{className:"row title-header"},this.renderDayLabel()),s.a.createElement("div",{className:"row button-container"},s.a.createElement("i",{className:"box arrow fa fa-angle-left",onClick:this.showCalendar}),s.a.createElement("i",{className:"box event-button fa fa-plus-square",onClick:this.addEvent}))),s.a.createElement(f,{selectedDay:this.state.selectedDay,selectedMonthEvents:this.state.selectedMonthEvents,removeEvent:function(t){return e.removeEvent(t)}})):s.a.createElement("section",{className:"main-calendar"},s.a.createElement("header",{className:"calendar-header"},s.a.createElement("div",{className:"row title-header"},s.a.createElement("i",{className:"box arrow fa fa-angle-left",onClick:this.previous}),s.a.createElement("div",{className:"box header-text"},this.renderTodayLabel(),this.renderMonthLabel()),s.a.createElement("i",{className:"box arrow fa fa-angle-right",onClick:this.next})),s.a.createElement(b,null)),s.a.createElement("div",{className:"days-container"},this.renderWeeks()))))}}]),t}(n.Component);var N=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.fe55227b.chunk.js.map