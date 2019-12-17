import React, { Component } from 'react';
import AgendaHeader from "../agenda-header";
import AgendaCalendar from "../agenda-calendar";

import moment from "moment";
import Moment from "react-moment";

// Moment.globalFormat = 'D MMMM YYYY';
var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};


export default class App extends Component {

    state = {
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        date: new Date().getDate(),
        day: new Date().getDay(),
        // today: moment.now(),
        // month: moment().format('MMMM')
    };

    render() {
        const {day, date, month, year} = this.state;
        return(
            <div className="conteiner-fluid">
            <AgendaHeader day={day}
                          date={date}
                          month={month}
                          year={year}/>
            <AgendaCalendar day={day}
                            date={date}
                            month={month}
                            year={year}/>
            </div>
        );
    }
};

