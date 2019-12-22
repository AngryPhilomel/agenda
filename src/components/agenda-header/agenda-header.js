import React, { Component } from 'react';
import 'moment/locale/ru';
import 'moment-timezone';



export default class AgendaHeader extends Component {

    render() {
        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        };

        let today = new Date();
        today = today.toLocaleString("ru", options);
        return(
                <div className="row">
                    <div className='col-lg-2'>
                        <button className="btn btn-primary"
                                type="submit"
                                onClick={this.props.onPrevMonth}
                                >Прошлый</button>
                    </div>
                    <div className='col-lg-8 text-center'>
                        <h3>{today}</h3>
                    </div>
                    <div className='col-lg-2'>
                        <button className="btn btn-primary"
                                type="submit"
                                onClick={this.props.onNextMonth}
                                >Следующий</button>
                    </div>
                </div>
        );
    };
}

