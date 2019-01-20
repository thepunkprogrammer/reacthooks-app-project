import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times`;
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };

  comp;

  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          I was clicked {this.state.count} time
        </button>
        <h2>Toggle Light</h2>
        <div
          style={{
            height: "50px",
            width: "50px",
            background: this.state.isOn ? "yellow" : "grey"
          }}
          onClick={this.toggleLight}
        />
        <h2>Mouse position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </>
    );
  }
}

export default App;