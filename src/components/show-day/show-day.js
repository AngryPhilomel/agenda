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
            const {id} = event;
            const {who} = event;
            return(
                <li key={id}>{who}</li>
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
                <ul>{items}</ul>

            </td>
        );
    }
};