import React, { Component } from 'react';

import 'moment/locale/ru';
import 'moment-timezone';

import './agenda-calendar.css'

import Week from "../week";
import ApiService from "../../services/api-service";

const apiService = new ApiService();

export default class AgendaCalendar extends Component {

    state = {
        eventsDays:[],
    };


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
        this.haveEvent()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selectDate.getFullYear() !== prevProps.selectDate.getFullYear()){
            this.haveEvent()
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return (this.props.selectDate.getMonth() !== nextProps.selectDate.getMonth() || this.props.selectDate.getFullYear() !== nextProps.selectDate.getFullYear())
    // }

    renderCal(arr, promiseArr) {
        // console.log(promiseArr)
        const {selectDate} = this.props;
        // console.log(selectDate)
        return arr.map((mon) => {
            return(
                <Week year={selectDate.getFullYear()}
                      month={selectDate.getMonth()}
                      date={mon}
                      promiseArr={promiseArr}
                      onChooseDay={this.props.onChooseDay}
                />
            )
        });
    }
    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    haveEvent() {
        const {selectDate} = this.props;
        const year = selectDate.getFullYear();
        const month = selectDate.getMonth();
        apiService.haveEvents(year, month+1)
            .then((day) => {
            this.setState({eventsDays:day})
        });
        // console.log(`${year} ${month}`)
    }

    renderList(arr) {
        try {
            return arr.map((a) => {
                const {day} = a;
                return Number(day)
            })
        } catch (e) {
            console.log('Ошибка БД!')
        }


    }

    //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    render() {
        let promiseArr = this.renderList(this.state.eventsDays);
        // console.log(promiseArr)
        const mons = this.foundAllMon();
        // alert(mons)
        const cal = this.renderCal(mons, promiseArr);
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
                                    <th><div>ПН</div></th>
                                    <th><div>ВТ</div></th>
                                    <th><div>СР</div></th>
                                    <th><div>ЧТ</div></th>
                                    <th><div>ПТ</div></th>
                                    <th><div>СБ</div></th>
                                    <th><div>ВС</div></th>
                                </tr>


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

