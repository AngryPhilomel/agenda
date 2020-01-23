import React, { Component } from 'react';
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class ShowDay extends Component {

    state = {
        eventList: []
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
                    this.setState({eventList: event})
                }
            });
    }

    renderEvents(arr) {
        return arr.map((event) => {
            const {id} = event;
            const {title} =event;
            return(
                <li key={id}>{title}</li>
            )
        });
    }



    render() {
        const {date, month, year} = this.props;
        const {eventList} = this.state;
        const items = this.renderEvents(eventList);


        return (
            <td
                onClick={()=>alert(`${+date}-${+month+1}-${+year}`)}
            >
                {date}
                <ul>{items}</ul>

            </td>
        );
    }
};