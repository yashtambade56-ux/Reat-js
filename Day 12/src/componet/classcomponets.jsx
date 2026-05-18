import React, { Component } from "react";

class ConvertClass extends Component {
    constructor(props) {
    super(props);
    this.state = { count: 0 };
    }

    increment = () => {
    this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
    this.setState({ count: this.state.count - 1 });
    };

    componentDidMount() {
    console.log("componentDidMount");
    }

    componentDidUpdate() {
    console.log("componentDidUpdate");
    }

    componentwillUnmount() {
    console.log("componentwillUnmount");
    }


    render() {
    return (
        <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </div>
    );
    }
}

export default ConvertClass;