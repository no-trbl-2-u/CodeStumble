//https://codepen.io/peterbe/pen/LNxmRp

//######################################## WRONG WAY ######################

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: null};
  }
  
  render() {
    if (this.state.counter) {
      return <Counter 
               counter={this.state.counter}
               onExit={() => this.setState({counter:null})}
               />
    } else {
      return (
        <div>
          <h2>Pick a Counter</h2>
          <button onClick={() => this.setState({counter:'simplest'})}  >Simplest</button><br/>
          <button onClick={() => this.setState({counter:'double'})}>Double</button><br/>
        </div>
      )
    }
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  
  componentDidMount() {
    setInterval(() => {
      console.log(this.state.number, this.props.counter)
      if (this.props.counter === 'double') {
        this.setState({number: this.state.number + this.state.number});        
      } else {
        this.setState({number: this.state.number + 1});
      }
    }, 1000);
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.props.onExit}>Exit</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#mount'));


//################################## RIGHT WAY ######################

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: null};
  }
  
  render() {
    if (this.state.counter) {
      return <Counter 
               counter={this.state.counter}
               onExit={() => this.setState({counter:null})}
               />
    } else {
      return (
        <div>
          <h2>Pick a Counter</h2>
          <button onClick={() => this.setState({counter:'simplest'})}  >Simplest</button><br/>
          <button onClick={() => this.setState({counter:'double'})}>Double</button><br/>
        </div>
      )
    }
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.number, this.props.counter)
      if (this.props.counter === 'double') {
        this.setState({number: this.state.number + this.state.number});        
      } else {
        this.setState({number: this.state.number + 1});
      }
    }, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.props.onExit}>Exit</button>
      </div>
    )
  }
}

//ReactDOM.render(<App/>, document.querySelector('#mount'));