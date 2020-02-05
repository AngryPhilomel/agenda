import React, {Component} from "react";
import AgendaCalendar from "../agenda-calendar";

export default class AgendaYear extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectDate !== this.props.selectDate){
            this.render()
        }
    }



    render() {

        let active = "col-lg"
        let nonActive = "col-lg d-none d-lg-block"
        let isActive = this.props.selectDate.getMonth()

        return(
            <div>


            <div className="row">
                <div className={isActive === 0 ? active : nonActive}>
                    <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 0,1)}
                                    onChooseDay={this.props.onChooseDay}/>
                </div>

                <div className={isActive === 1 ? active : nonActive}>
                    <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 1,1)}
                                    onChooseDay={this.props.onChooseDay}/>
                </div>
                <div className={isActive === 2 ? active : nonActive}>
                    <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 2,1)}
                                    onChooseDay={this.props.onChooseDay}/>
                </div>
            </div>

                <div className="row">
                    <div className={isActive === 3 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 3,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className={isActive === 4 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 4,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className={isActive === 5 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 5,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                </div>

                <div className="row">
                    <div className={isActive === 6 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 6,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className={isActive === 7 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 7,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className={isActive === 8 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 8,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                </div>

                <div className="row">
                    <div className={isActive === 9 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 9,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className={isActive === 10 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 10,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                    <div className={isActive === 11 ? active : nonActive}>
                        <AgendaCalendar selectDate={new Date(this.props.selectDate.getFullYear(), 11,1)}
                                        onChooseDay={this.props.onChooseDay}/>
                    </div>
                </div>


            </div>
        )
    }

}