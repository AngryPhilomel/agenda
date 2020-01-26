import React, { Component } from 'react';
import AgendaHeader from "../agenda-header";
import AgendaCalendar from "../agenda-calendar";
import EventInfo from "../event-info";

export default class App extends Component {

    state = {
        selectDate: new Date(),

    };

    onPrevMonth = () =>{
        let date = this.state.selectDate;
        date.setDate(1);
        date.setMonth(date.getMonth()-1);
        this.setState({selectDate: date});
    };

    onNextMonth = () =>{
        let date = this.state.selectDate;
        date.setDate(1);
        date.setMonth(date.getMonth()+1);
        this.setState({selectDate: date});
    };

    onChooseDay = (d, m, y) =>{
        if(y>0){
        let date = this.state.selectDate;
        date.setDate(d);
        date.setMonth(m);
        date.setFullYear(y);
        this.setState({selectDate: date});
        }
    };

    render() {
        const {selectDate} = this.state;
        return(
            <div className="container-fluid">
            <AgendaHeader onPrevMonth={this.onPrevMonth}
                          onNextMonth={this.onNextMonth}/>

            <AgendaCalendar selectDate={selectDate}
                            onChooseDay={this.onChooseDay}
                            />

                            <EventInfo selectDate={selectDate}
                            date={selectDate.getDate()}/>
            </div>
        );
    }
};

