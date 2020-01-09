import React, { Component } from 'react';
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class ShowDay extends Component {

    state = {
        eventList: []
    };

    componentWillUnmount() {
        this.setState({eventList: []})
    }

    getEvent() {
        const {year, month, date} = this.props;
        // this.setState({eventList: []})
        // if (year > 0) {
            apiService.getDate(+year, +month + 1, +date)
                .then((event) => {
                    if (event) {
                        // console.log(event)
                    this.setState({eventList: event})
                    }else{
                        // this.setState({eventList: []})
                    }

                    // try {
                    //     event.forEach((e) => {
                    //         results.push(e)
                    //         // console.log(results)
                    //     })
                    //
                    //     } catch (e) {
                    //     // console.log('пусто')
                    //     }

                });
        // }
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

    componentDidMount() {
        this.setState({eventList: []})
    }


    render() {
        const {date, month, year} = this.props;
        this.getEvent();
        const {eventList} = this.state;
        const items = this.renderEvents(eventList);
        // this.getEvent();
        // const events = this.getEvent();
        // console.log(events)



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

