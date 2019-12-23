import React, { Component } from 'react';


export default class ShowDay extends Component {
    render() {
        const {date, month, year} = this.props;

        return (
            <td
                onClick={()=>alert(`${date}-${month+1}-${year}`)}
            >
                {date}
            </td>
        );
    }
};

