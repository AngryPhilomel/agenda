import React, { Component } from 'react';

import 'moment/locale/ru';
import 'moment-timezone';

import './agenda-calendar.css'

import Week from "../week";



export default class AgendaCalendar extends Component {

    // state = {
    //     mons:[],
    // }


    ////////////////////////////////////////////////////////////////////////////////////
    foundAllMon = () => {
        let mons=[];
        let days_in_month = 33 - new Date(this.props.selectDate.getFullYear(), this.props.selectDate.getMonth(), 33).getDate();
        let date = new Date(this.props.selectDate.getFullYear(), this.props.selectDate.getMonth(), 1);
        for (let i= date; i.getDate()<days_in_month;i.setDate(i.getDate()+1)) {
            if (i.getDay() === 1) {
                mons.push(i.getDate());
            }
        }
        let last = new Date(this.props.selectDate.getFullYear(), this.props.selectDate.getMonth(), days_in_month);
        if (last.getDay()===1){
            mons.push(last.getDate());
        }
        if(mons[0]!==1){
            mons.unshift(1)
        }
        // alert(mons)
        // return mons[id];
        return mons

    };
    ////////////////////////////////////////////////////////////////////////////////////


    componentDidMount() {
        // this.foundAllMon()
    }


    renderCal(arr) {
        const {selectDate} = this.props;
        return arr.map((mon) => {
            return(
                <Week year={selectDate.getFullYear()}
                      month={selectDate.getMonth()}
                      date={mon}
                      onChooseDay={this.props.onChooseDay}
                />
            )
        });
    }

    render() {
        // const {mons} = this.state
        const mons = this.foundAllMon();
        // alert(mons)
        const cal = this.renderCal(mons);
        const {selectDate} = this.props;
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

                        {cal}

                        </table>

                </div>
            </div>


        );
    }
}

