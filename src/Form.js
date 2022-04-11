import React, { Component } from "react";
import "./styles.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      comments: "",
      topic: "",
    };
  }

  handleUserNameChange = (event) => {
    this.setState(
      {
        userName: event.target.value,
      },
      () => {
        console.log(this.state.userName);
      }
    );
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState(
      {
        topic: event.target.value,
      },
      () => {
        console.log(this.state.topic);
      }
    );
  };

  handleSubmit = () => {
    alert(
      `Username :${this.state.userName}  Comment:${this.state.comments}  Topic: ${this.state.topic}`
    );
  };

  render() {
    const { userName, comments, topic } = this.state;
    return (
      <div className="outside">
        <form onSubmit={this.handleSubmit}>
          <h1 id="title">Feedback Form</h1>
          <div className="inside">
            <div>
              <label>User Name : </label>
              <input
                type="text"
                value={userName}
                onChange={this.handleUserNameChange}
              ></input>
            </div>
            <div>
              <label>Comments : </label>
              <textarea
                type="text"
                value={comments}
                onChange={this.handleCommentsChange}
              ></textarea>
            </div>
            <div>
              <label>Select Topic : </label>
              <select value={topic} onChange={this.handleTopicChange}>
                <option value="Javascript">Javascript</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
              </select>
            </div>

            <div id="submitbutton">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
