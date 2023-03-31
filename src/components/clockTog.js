import React, { Component } from 'react'


export default class ClockTog extends Component {
    constructor() {
        super()
        this.state = {
            time: new Date().toLocaleTimeString(),
            isShown: true,
            display: "block",
        }
        this.toggleClock = this.toggleClock.bind(this);
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            this.setState({
                time:String(new Date().toLocaleTimeString()),
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.liveTime);
    }

    toggleClock() {
        if (this.state.isShown) {
            this.setState({
                time: '',
                isShown: false,
                display: "none"
            });
        } else {
            this.setState({
                time: new Date().toLocaleTimeString(),
                isShown: true,
                display: "block"
            });
        }
    }

  render() {
    return (
      <div className='clock-wrapper'>
        <h1 style={{display: this.state.display }}> 
            {this.state.time}
        </h1>

        <button onClick={this.toggleClock}> Turn Clock On/Off</button>


      </div>
    );
  }
}
