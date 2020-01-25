import React, {Component} from 'react';

import './spinner.css';

export default class Spinner extends Component {
    render() {
        return(
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}