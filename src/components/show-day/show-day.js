import React, { Component } from 'react';
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class ShowDay extends Component {

    // state = {
    //     event: null
    // }

    componentDidMount() {
        const {year, month, date} = this.props;
        if (year > 0) {
            apiService.getDate(+year, +month + 1, +date)
                .then((event) => {
                    try {
                        event.forEach((e) => {
                            console.log(e.title)
                        })

                        } catch (e) {
                        // console.log('пусто')
                        }

                });
        }
    }
            // const res = apiService.getDate(+year, +month +1, +date)
            //     console.log(res)




    // getDate = (year, month, date) => {
    //     if (year > 0) {
    //         const res = apiService.getDate(year, month, date);
    //         this.setState({
    //             event: res
    //         });
    //         return res
    //     }

    // };


    render() {
        const {date, month, year} = this.props;

        // if (year > 0) {
        //     const res = this.getDate(+year, +month+1, +date);
        //     console.log(res)
        // }


        return (
            <td
                onClick={()=>alert(`${+date}-${+month+1}-${+year}`)}
            >
                {date}

            </td>
        );
    }
};

