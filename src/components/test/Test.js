import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  // componentWillMount() {
  //   console.log("ComponentWillMount...");
  // }
  // componentDidUpdate() {
  //   console.log("ComponentDidUpdate...");
  // }
  // componentWillUpdate() {
  //   console.log("ComponentWillUpdate...");
  // }
  // componentWillReceiveProps(nextProps, nextState) {
  //     console.log('componentWillRecieveProps');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
