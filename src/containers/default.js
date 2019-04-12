import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render() {
        if (!this.props.car) {
            return (
                <p>Выберите автомобиль...</p>
            );
        }
        return (
            <div>
                <h2>{ this.props.car.name }</h2>
                <span>Скорость: { this.props.car.speed }</span>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        car: state.car
    };
}

export default connect(mapStateToProps)(Details);
