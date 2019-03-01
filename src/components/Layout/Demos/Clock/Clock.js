import React, { Component } from 'react';

import './Clock.css';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    }
    this.setTime = this.setTime.bind(this);
    this.setClasses = this.setClasses.bind(this);
  }

  setTime() {
    const now = new Date()
    this.setState({
      seconds: now.getSeconds(),
      minutes: now.getMinutes(),
      hours: now.getHours()
    })
  }

  setClasses() {
    const { seconds, minutes, hours } = this.state;

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');


    /* TODO :
          --> Refactor all these computations into a function
          --> Get percentage of minutes in the current hour, use to move hour throughout the hour
          --> Do the same for minutes
    */

    secondHand.style.transform = `rotate(${ (seconds / 60) * 360 }deg)`;
    minuteHand.style.transform = `rotate(${ (minutes / 60) * 360 }deg)`;
    hourHand.style.transform = `rotate(${ (hours / 12) * 360 }deg)`;

  }

  componentDidMount() {
    const updateUI = () => {
      this.setTime();
      this.setClasses();
    }
    this.interval = setInterval(updateUI, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const {seconds, minutes, hours} = this.state
    return (
      <div className="clock-container">

        <div className="clock">
          <div className="clock-face">
            <div className="hand hour-hand"></div>
            <div className="hand min-hand"></div>
            <div className="hand second-hand"></div>
          </div>
        </div>
        
        <div className="digital-time">
          <span>{ hours <= 9 ? `0${hours}` : `${hours}` } &nbsp; : </span>
          <span>{ minutes <= 9 ? `0${minutes}` : `${minutes}` } &nbsp; : </span>
          <span>{ seconds <= 9 ? `0${seconds}` : `${seconds}`} </span>
          <span>{ hours <= 12 ? 'AM' : 'PM'}</span>
        </div>
      </div>
    );
  }
}

export default Clock;
