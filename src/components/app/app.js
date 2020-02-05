import React, { Component } from 'react';
import AgendaHeader from "../agenda-header";
import EventInfo from "../event-info";
import AgendaYear from "../agenda-year";
import AgendaYearHeader from "../agenda-year-header";

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
        date.setMonth(m);
        date.setDate(d);
        date.setFullYear(y);
        this.setState({selectDate: date});
        window.scrollTo(document.documentElement.clientHeight, 0);
        }
    };

    onNextYear = () => {
        let date = this.state.selectDate;
        date.setFullYear(date.getFullYear()+1);
        this.setState({selectDate: date})
    };

    onPrevYear = () => {
        let date = this.state.selectDate;
        date.setFullYear(date.getFullYear()-1);
        this.setState({selectDate: date})
    };

    render() {
        const {selectDate} = this.state;
        return(
            <div className="container-fluid">

                <div className="d-lg-none">
            <AgendaHeader onPrevMonth={this.onPrevMonth}
                          onNextMonth={this.onNextMonth}
                          selectDate={selectDate}/>
                </div>


                <AgendaYearHeader onNextYear={this.onNextYear}
                                  onPrevYear={this.onPrevYear}/>


            <EventInfo selectDate={selectDate}
                            date={selectDate.getDate()}
                            month={selectDate.getMonth()}/>




            <AgendaYear selectDate={selectDate}
                        onChooseDay={this.onChooseDay}
                        />

            </div>
        );
    }
};

