import React, { Component } from 'react';
import ShowDay from "../show-day";
export default class Week extends Component {

    state = {
        idate: new Date(this.props.year, this.props.month, 1)
    };

    getDay = (date) => { // получить номер дня недели, от 0 (пн) до 6 (вс)
        let day = date.getDay();
        if (day === 0) day = 7; // сделать воскресенье (0) последним днем
        return day - 1;
    };

    showday = (d, m, y) => {
        return(<ShowDay date={d}
                        month={m}
                        year={y}
        />)
    };


    createCalendar = (year, month, date) => {
        let d = new Date(year, month, date);
        let days_in_month = 33 - new Date(year, month, 33).getDate();
        let result = [];
        for (let i=0; i < this.getDay(d); i++) {
            result.push(this.showday('','',''))
        }
        for (let i=this.getDay(d); i < 7; i++) {
            if (d.getDate() === days_in_month) {
                result.push(this.showday(d.getDate(),month,year));
                break
            }
            result.push(this.showday(d.getDate(),month,year));
            d.setDate(d.getDate() + 1);

        }

        if (this.getDay(d) !== 0){
            for (let i = this.getDay(d); i < 6; i++) {
                result.push(this.showday('','',''))
            }
        }

        return result
    };


    render() {
        const {year,month,date} = this.props;
        return (
            <tr>
                {this.createCalendar(year,month,date)}
            </tr>
        );
    }
};

