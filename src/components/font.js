import React, { Component } from 'react'

export default class Font extends Component {
    constructor() {
        super()
        this.state = {
            heading: 12,
            increment: 2,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleChange(event) {
        this.setState({
            increment: event.target.value,
        })
    }

    handleIncrease(event) {
        for (let i = this.state.heading; i < 56; i++) {
            this.setState({
                heading: this.state.heading + parseInt(this.state.increment),
            });
        }
    }

    handleDecrease(event) {
        for (let i = this.state.heading; i > 3; i--) {
            this.setState({
                heading: this.state.heading - parseInt(this.state.increment),
            });
        }
    }

    render() {
        return (
            <div className='font-size-wrapper'>
                <div id="font" style={{ fontSize: this.state.heading}}>
                    My Size: {this.state.heading}px
                </div>
                <div className='configuration-wrapper'>
                    <input type="number" placeholder='Change Font by ...' onChange={this.handleChange}/>
                    <button onClick={this.handleIncrease}>SuperSize Me</button>
                    <button onClick={this.handleDecrease}>Shrinkage</button>


                </div>




            </div>
        );
    }
}
