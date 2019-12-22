import React, { Component } from 'react';
import AgendaHeader from "../agenda-header";
import AgendaCalendar from "../agenda-calendar";

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

    render() {
        const {selectDate} = this.state;
        return(
            <div className="conteiner-fluid">
            <AgendaHeader onPrevMonth={this.onPrevMonth}
                          onNextMonth={this.onNextMonth}/>

            <AgendaCalendar selectDate={selectDate}
                            />
            </div>
        );
    }
};

