import React, { Component } from 'react';
import ShowDay from "../show-day";
import ApiService from "../../services/api-service";


const apiService = new ApiService();

export default class Week extends Component {



    state = {
        idate: new Date(this.props.year, this.props.month, 1),
    };

    getDay = (date) => { // получить номер дня недели, от 0 (пн) до 6 (вс)
        let day = date.getDay();
        if (day === 0) day = 7; // сделать воскресенье (0) последним днем
        return day - 1;
    };


    createCalendar = (year, month, date) => {
        let d = new Date(year, month, date);
        let days_in_month = 33 - new Date(year, month, 33).getDate();
        let result = [];
        for (let i=0; i < this.getDay(d); i++) {
            result.push({d:'',m:Math.random(),y:''})
        }
        for (let i=this.getDay(d); i < 7; i++) {
            if (d.getDate() === days_in_month) {
                result.push({d:d.getDate(), m:month, y:year});
                break
            }
            result.push({d:d.getDate(), m:month, y:year});
            d.setDate(d.getDate() + 1);

        }

        if (this.getDay(d) !== 0){
            for (let i = this.getDay(d); i < 6; i++) {
                result.push({d:'',m:Math.random(),y:''})
            }
        }
        // console.log(result);
        return result
    };

    // |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


      getEvent(year, month, date) {
        // const {year, month, date} = this.props;
        // this.setState({eventList: []})

             return apiService.getDate(+year, +month + 1, +date);


                // .then(event => {return [event]});
                //     if (event) {
                //         // console.log(event);
                //         return (event)
                //     }else{
                //         return []
                //     }
                //
                // });


            // }catch (e) {
            // console.log(e)
        }
        // return (1)
        // }

     renderEvents(arr) {
        // console.log(arr);
        // try {
         if (Array.isArray(arr)){
             return arr.map((event) => {
                 const {id} = event;
                 const {title} = event;
                 console.log(title);
                 return (
                     <li key={id}>{title}</li>
                 )
             });
         }else {
             return 1
         }
        // }catch (e) {
            // console.log(e)

        // }
    }
    // ||||||||||||||||||||||||||||||||||||||||||||||||||||

    renderWeek(arr) {
        return arr.map((day) => {
            const {d} = day;
            const {m} = day;
            const {y} = day;
            const i = this.getEvent(y, m, d);
            i.then(event => this.renderEvents(event));
            // console.log(t);
            const items = this.renderEvents(i);
            // console.log(items)
            // alert(d)
            return(
                <ShowDay date={d}
                         month={m}
                         year={y}
                         items={items}
                />
                )
        });
    }


    // componentDidMount() {
    //     this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    // }
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }


    render() {
        const {year,month,date} = this.props;
        const result = this.createCalendar(year,month,date);
        const list = this.renderWeek(result);



        return (
            <tr>
                {list}
            </tr>
        );
    }
};

