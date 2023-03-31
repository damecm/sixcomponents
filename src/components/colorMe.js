import React, { Component } from 'react'

export default class ColorMe extends Component {

    constructor() {
        super()
        this.state = {
            heading: "Color Me!",
            color: "black",
            colorInput: "black",
            headingInput: "Color Me!"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            color: this.state.colorInput,
            heading: this.state.headingInput,
        })
    }

    render() {
        return (
            <div className='color-me-wrap'>

                <p style={{color: this.state.color}}>{this.state.heading}</p>

                <form onSubmit={this.handleSubmit}>

                    <input type="color" name='colorInput' onChange={this.handleChange} />
                    <input type="text" name="headingInput" placeholder='Type to Change Text' onChange={this.handleChange} />

                    <button type="submit">Apply Changes</button>

                </form>

            </div>
        );
    }
}