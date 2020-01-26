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
                <div className="row nav">

                    <div className='col-sm-2'>
                        <button className="btn btn-primary"
                                type="submit"
                                onClick={this.props.onPrevMonth}
                                onDoubleClickCapture={() => {alert('!')}}
                                >Прошлый</button>
                    </div>
                    <div className='col-lg-8 text-center d-none d-lg-block'>
                        <h3>{today}</h3>
                    </div>
                    <div className='col-sm-1'>
                        <button className="btn btn-primary"
                                type="submit"
                                onClick={this.props.onNextMonth}
                                // onDoubleClickCapture={() => {alert('!')}}
                                >Следующий</button>
                    </div>

                </div>
        );
    };
}

