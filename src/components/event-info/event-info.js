import React, { Component } from 'react';
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class EventInfo extends Component {



    render() {
        let day = this.props.selectDate;

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
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of the card's content.</p>
                </div>
            </div>
        );
    }
};