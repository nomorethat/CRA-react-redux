import React, {Component} from 'react';

export default class User extends Component {
    render() {
        return(
            <h2>{this.props.user}</h2>
        )
    }
}
