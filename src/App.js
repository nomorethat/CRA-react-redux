import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <h2>User: { this.props.user }</h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(App);
