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
        selectDate: new Date(),

    };

    onPrevMonth = () =>{
        let date = this.state.selectDate;
        date.setDate(1);
        date.setMonth(date.getMonth()-1);
        this.setState({selectDate: date});
    }

    onNextMonth = () =>{
        let date = this.state.selectDate;
        date.setDate(1);
        date.setMonth(date.getMonth()+1);
        this.setState({selectDate: date});
    }

    render() {
        const {day, date, month, year, selectDate} = this.state;
        return(
            <div className="conteiner-fluid">
            <AgendaHeader selectDate={selectDate}
                          onPrevMonth={this.onPrevMonth}
                          onNextMonth={this.onNextMonth}/>
            <AgendaCalendar selectDate={selectDate}
                            />
            </div>
        );
    }
};

