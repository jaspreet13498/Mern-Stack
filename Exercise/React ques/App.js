import React, { Component } from 'react';
import Display from './Display'
import './MyApp.css';

class App extends Component {
  render() {

    return (
      <div className="App">
      <div className="ch"> <h3>Date : 15/Februray/2019 Friday</h3></div>
      <h1 className="heading"> My First App </h1>
      <p> ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
      <Display  name="Jaspreet" age="21" birthmonth="April"/>
      <Display name="Mohit" age="21" birthmonth="March"/>

      </div>
    );
  }
}

export default App;
