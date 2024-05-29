import React, { Component } from 'react';

class HelloJsd7 extends Component {
    render() {
        return (
            <div className="flex flex-col">
                <h1>Hello, {this.props.g}</h1>
                <h6>This React component is made by a class, we call it a class component</h6>
            </div>
        );
    }
}

export default HelloJsd7;