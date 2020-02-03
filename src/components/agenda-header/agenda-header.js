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

        // let today = this.props.selectDate;
        // today = today.toLocaleString("ru", options);
        return(
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <button className="btn btn-outline-primary my-sm-0" type="submit" onClick={this.props.onPrevMonth}>Предыдущий</button>
                    <div className='navbar-text text-center d-none d-lg-block'>
                        {/*<h3>{today}</h3>*/}
                    </div>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.props.onNextMonth}>Следующий</button>
                </div>
            </nav>

                // <div className="row nav">
                //
                //     <div className='col-sm-2'>
                //         <button className="btn btn-primary"
                //                 type="submit"
                //                 onClick={this.props.onPrevMonth}
                //                 // onDoubleClickCapture={() => {alert('!')}}
                //                 >Прошлый</button>
                //     </div>
                //     <div className='col-lg-8 text-center d-none d-lg-block'>
                //         <h3>{today}</h3>
                //     </div>
                //     <div className='col-sm-2'>
                //         <button className="btn btn-primary"
                //                 type="submit"
                //                 onClick={this.props.onNextMonth}
                //                 // onDoubleClickCapture={() => {alert('!')}}
                //                 >Следующий</button>
                //     </div>
                //
                // </div>
        );
    };
}

