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

    this.interval = setInterval( () => {
      this.setState({
        timer :{
          seconds: seconds += 1,
          minutes: seconds > 59 ? seconds +=1 : seconds,
        }
      })
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.interval)
  }

  resetTimer() {
    this.setState({
      timer: null
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