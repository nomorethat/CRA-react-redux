import React, {Component} from 'react';

export default class Year extends Component {
    constructor(props) {
        super(props);
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick(event) {
        return this.props.setYear(event.target.textContent)
    }

    render() {
        return (
            <div>
                <button onClick={this.onBtnClick}>2001</button>
                <button onClick={this.onBtnClick}>2002</button>
                <button onClick={this.onBtnClick}>2003</button>
                <p>This year has been chosen - {this.props.year}</p>
            </div>
        )
    }
}
