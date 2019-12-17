import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/ru';
import moment from "moment";
import 'moment-timezone';



export default class AgendaHeader extends Component {

    render() {
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        };
        const {day, date, month, year} = this.props;
        let today = new Date(`${year}-${month}-${date}`);
        today = today.toLocaleString("ru", options);
        return(
                <div className="row">
                    <div className='col-lg-2'>
                        <button className="btn btn-primary" type="submit">Прошлый</button>
                    </div>
                    <div className='col-lg-8 text-center'>
                        <h3>{today}</h3>
                    </div>
                    <div className='col-lg-2'>
                        <button className="btn btn-primary" type="submit">Следующий</button>
                    </div>
                </div>
        );
    };
}

