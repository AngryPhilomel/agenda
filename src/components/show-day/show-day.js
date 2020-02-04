import React, { Component } from 'react';
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class ShowDay extends Component {

    state = {
        eventList: [],
        date:[],
        promiseArr: []
    };

    componentDidMount() {
        setTimeout(() => {
            // console.log(this.props.promiseArr)
            const {promiseArr} = this.props;
            this.setState({promiseArr});
            // console.log(this.props.promiseArr)
            this.getEvent(this.state.promiseArr)
        },1000)
    }

    componentDidUpdate(prevProps) {
        if (this.props.year !== prevProps.year || this.props.month !== prevProps.month) {
            this.setState({eventList: [],
                                promiseArr:[]});
            setTimeout(() => {
            const {promiseArr} = this.props;
            this.setState({promiseArr});
            this.getEvent(this.state.promiseArr);
                // console.log(promiseArr)
            },1000)
        }
    }


    getEvent(promiseArr) {
        const {year, month, date} = this.props;
        if (Array.isArray(promiseArr) && promiseArr.includes(Number(date), 0)) {
        apiService.getDate(+year, +month + 1, +date)
            .then((event) => {
                if (event) {
                    this.setState({eventList: event,
                                        date: date})
                }
            });
}
    }

    renderEvents(arr) {
        return arr.map((event) => {
            const {who_id} = event;
            const {id} =event;
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
                style = {backgroundColor: `#FFFF00`, color: "black"}
                }

            return(
                <div style={style} key={id}>{who}</div>
            )
        });
    }



    render() {
        const {date, month, year} = this.props;
        // console.log(promiseArr)
        // this.setState({promiseArr})
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
                {/*<p>{promiseArr}</p>*/}
                {date}
                <div>{items}</div>

            </td>
        );
    }
};