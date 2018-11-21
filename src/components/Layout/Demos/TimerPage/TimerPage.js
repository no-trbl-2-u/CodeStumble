/* eslint-disable jsx-a11y/img-has-alt */
import React, { Component } from 'react';

class TimerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '00:00',
      timer: {minutes: 0, seconds: 0, ms: 0}
    }
    this.setDate = this.setDate.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  setDate() {
    var d = new Date(),
      h = (d.getHours()<10 ? '0':'') + d.getHours(),
      m = (d.getMinutes()<10 ? '0':'') + d.getMinutes();
    this.setState({
      time : `${h}:${m}`
    });
  }

  startTimer() {
    let {minutes, seconds, ms} = this.state.timer
    console.log(minutes, seconds, ms)

    const addMinute = () => this.setState({minutes: (minutes += 1) % 59})
    const addSecond = () => this.setState({seconds: (seconds += 1) % 59})
    
    const addMS = () => this.setState({ms: (ms += 1) % 9})

    // this.interval = setInterval( () => {
    //   addMS();
    //   if(ms === 59){addSecond()}
    //   if(seconds === 59){addMinute()}

    // }, 100)

    this.setState({ms: ms + 1})
  }

  stopTimer() {
    clearInterval(this.interval)
  }

  resetTimer() {
    this.setState({
      timer: {
        ms: 0,
        seconds: 0,
        minutes: 0,
      }
    })
  }

  render() {
    const { minutes, seconds, ms } = this.state.timer
    return (
      <div>
        <h1> { this.state.time }</h1>
        <h1>{ `${minutes}: ${seconds}: ${ms}` }</h1>
        <button onClick={this.setDate}>Update Time</button>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>

      </div>
    )
  }
}

export default TimerPage;