import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import moment from "moment";
import 'moment-timezone';

import './agenda-calendar.css'



export default class AgendaCalendar extends Component {
    render() {
        const {day, date, month, year, selectDate} = this.props;
        let days_in_month = 33 - new Date(selectDate.getFullYear(), selectDate.getMonth(), 33).getDate();
        let first_day_in_month = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1).getDay();



        return (
            <div>
                <div className='table-responsive calendar'>
                    <table className='table table-bordered'>
                        <tr>
                            <td colSpan='7' className='text-center'><h4>{first_day_in_month} {days_in_month} {selectDate.getMonth()+1} {selectDate.getFullYear()}</h4></td>
                        </tr>
                                <tr>
                                    <th>Понедельник</th>
                                    <th>Вторник</th>
                                    <th>Среда</th>
                                    <th>Четверг</th>
                                    <th>Пятница</th>
                                    <th>Суббота</th>
                                    <th>Воскресенье</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>1</td>
                                </tr>

                        </table>

                </div>
            </div>


        );
    }
}

