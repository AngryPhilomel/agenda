import React, {Component} from "react";
import AgendaCalendar from "../agenda-calendar";

export default class AgendaYear extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectDate !== this.props.selectDate){
            this.render()
        }
    }


    render() {
        return(
            <div>
                <button className="btn btn-outline-primary my-sm-0" type="submit" onClick={this.props.onPrevYear}>Предыдущий</button>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={this.props.onNextYear}>Следующий</button>

            <div className="row">
                <div className="col-lg">
                    <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 0,1)}
                                    onChooseDay={this.props.onChooseDay}/>
                </div>
                <div className="col-lg">
                    <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 1,1)}
                                    onChooseDay={this.props.onChooseDay}/>
                </div>
                <div className="col-lg">
                    <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 2,1)}
                                    onChooseDay={this.props.onChooseDay}/>
                </div>
            </div>

                <div className="row">
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 3,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 4,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 5,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 6,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 7,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 8,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 9,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 10,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className="col-lg">
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 11,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                </div>


            </div>
        )
    }

}