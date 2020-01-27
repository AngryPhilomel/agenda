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

        var options = {
            year: 'numeric',
            month: 'long',
        };

        let day = selectDate;
        day = day.toLocaleString("ru", options);


        return (
            <div>
                <div className='table-responsive calendar'>
                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            <th colSpan='7' className='text-center'><h4>{day}</h4></th>
                        </tr>
                                <tr>
                                    <th><div className="d-none d-lg-block">Понедельник</div><div className="d-lg-none">ПН</div></th>
                                    <th><div className="d-none d-lg-block">Вторник</div><div className="d-lg-none">ВТ</div></th>
                                    <th><div className="d-none d-lg-block">Среда</div><div className="d-lg-none">СР</div></th>
                                    <th><div className="d-none d-lg-block">Четверг</div><div className="d-lg-none">ЧТ</div></th>
                                    <th><div className="d-none d-lg-block">Пятница</div><div className="d-lg-none">ПТ</div></th>
                                    <th><div className="d-none d-lg-block">Суббота</div><div className="d-lg-none">СБ</div></th>
                                    <th><div className="d-none d-lg-block">Воскресенье</div><div className="d-lg-none">ВС</div></th>
                                </tr>
                                {/*<tr className="d-lg-none">*/}
                                {/*    <th>Пн</th>*/}
                                {/*    <th>Вт</th>*/}
                                {/*    <th>Ср</th>*/}
                                {/*    <th>Чn</th>*/}
                                {/*    <th>Пт</th>*/}
                                {/*    <th>Сб</th>*/}
                                {/*    <th>Вс</th>*/}
                                {/*</tr>*/}

                            </thead>
                        <tbody>
                        {cal}
                        </tbody>

                        </table>

                </div>
            </div>


        );
    }
}

