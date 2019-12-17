import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import moment from "moment";
import 'moment-timezone';



export default class AgendaCalendar extends Component {
    render() {
        const {day, date, month, year} = this.props;


        return (
            <div>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <tr>
                            <td colSpan='7' className='text-center'><h4>{month} {year}</h4></td>
                        </tr>
                                <tr>
                                    <td className='text-center' >Понедельник</td>
                                    <td className='text-center'>Вторник</td>
                                    <td className='text-center'>Среда</td>
                                    <td className='text-center'>Четверг</td>
                                    <td className='text-center'>Пятница</td>
                                    <td className='text-center'>Суббота</td>
                                    <td className='text-center'>Воскресенье</td>
                                </tr>

                        </table>

                </div>
            </div>


        );
    }
}

