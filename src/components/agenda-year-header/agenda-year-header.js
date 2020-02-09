import React, { Component } from 'react';
import 'moment/locale/ru';
import 'moment-timezone';



export default class AgendaYearHeader extends Component {

    render() {

        return(
            <div  className={"col-lg d-none d-lg-block navbar sticky-top navbar-light bg-light"}>
                <div className="container">
                <button className="btn btn-outline-primary my-sm-0" type="submit" onClick={this.props.onPrevYear}>Предыдущий год</button>

                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.props.onNextYear}>Следующий год
                    {/*<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>*/}
                </button>
                </div>
            </div>
        );
    };
}

