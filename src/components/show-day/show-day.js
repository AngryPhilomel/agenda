import React, { Component } from 'react';
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class ShowDay extends Component {

    state = {
        eventList: [],
        date:[]
    };

    componentDidMount() {
        this.getEvent();
    }

    componentDidUpdate(prevProps) {
        if (this.props.date !== prevProps.date) {
            this.setState({eventList: []});
            this.getEvent();
        }
    }


    getEvent() {
        const {year, month, date} = this.props;
        // this.setState({eventList: []})
        // if (year > 0) {
        apiService.getDate(+year, +month + 1, +date)
            .then((event) => {
                if (event) {
                    this.setState({eventList: event,
                                        date: date})
                }
            });
    }

    renderEvents(arr) {
        return arr.map((event) => {
            const {who_id} = event;
            const {who} = event;
            let style;

            if (who_id === 1){
                style = {backgroundColor: `#00FF00`, color: "white"}
                } else if (who_id === 2){
                style = {backgroundColor: `#4682B4`, color: "white"}
                } else if (who_id === 3){
                style = {backgroundColor: `#6A5ACD`, color: "white"}
                } else if (who_id === 4){
                style = {backgroundColor: `#FF0000`, color: "white"}
                } else {
                style = {backgroundColor: `#FFFF00`, color: "white"}
                }

            return(
                <div style={style} key={who_id}>{who}</div>
            )
        });
    }



    render() {
        const {date, month, year} = this.props;
        const {eventList} = this.state;
        const {onChooseDay} = this.props;
        let items = [];
        if (this.state.date === date) {
            items = this.renderEvents(eventList);
        }

        return (
            <td
                onClick={() => onChooseDay(date, month, year)}
            >
                {date}
                <div>{items}</div>

            </td>
        );
    }
};