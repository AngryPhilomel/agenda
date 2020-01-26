import React, { Component } from 'react';
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class EventInfo extends Component {

    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
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
        const {selectDate} = this.props;
        let year = selectDate.getFullYear();
        let month = selectDate.getMonth();
        let date = selectDate.getDate();
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
            const {who, category, description, purpose, period, title, to, type} = event;
            return(
                <p key={id}><h5 className="card-title">{title}</h5>
                            <p className="card-text">{description} {who} {category} {purpose} {period} {title} {to} {type}</p><br/></p>
            )
        });
    }
    //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


    render() {
        let day = this.props.selectDate;
        const {eventList} = this.state;
        let items = this.renderEvents(eventList);


        var options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        };

        day = day.toLocaleString("ru",options);

        return (
            <div className="card bg-light mb-3" >
                <div className="card-header">{day}</div>
                <div className="card-body">

                    <ul>{items}</ul>
                </div>
            </div>
        );
    }
};