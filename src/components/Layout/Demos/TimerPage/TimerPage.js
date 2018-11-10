import React, { Component } from 'react';

class TimerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: '00:00',
      timer: null
    }
    this.setDate = this.setDate.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  setDate() {
    this.setState({
      time : this.timeNow()
    });
  }

  timeNow() {             // timeNow provided by DreamTeK
    var d = new Date(),
      h = (d.getHours()<10 ? '0':'') + d.getHours(),
      m = (d.getMinutes()<10 ? '0':'') + d.getMinutes();
    return `${h}:${m} `;
  }

  startTimer() {
    this.interval = setInterval( () => {
      this.setState({
        timer: this.state.timer += 1
      })
    }, 100)
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
    return (
      <div>
        <h1> { this.state.time }</h1>
        <h1>{ (this.state.timer) ? this.state.timer : '00:00' }</h1>
        <button onClick={this.setDate}>Update Time</button>
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.stopTimer}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>

      </div>
    )
  }
}

export default TimerPage;