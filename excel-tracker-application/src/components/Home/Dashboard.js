import React, { Component } from 'react';

import CoolCard from './coolcard.js';
import {
  withRouter
} from 'react-router-dom'

import './../../styles/Dashboard.css';
import Header from './Header.js';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.history.push('/');
  }

  render() {
      return (
        <div>
          <Header handleLogout={() => this.handleLogout} pageName="Home"/>
          <div className="Dashboard">
          
    
          <br></br>
          <CoolCard />
          <br></br>
          
          </div>
        </div>
        
      );
  }
}
    
export default withRouter(Dashboard);
