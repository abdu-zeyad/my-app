import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from 'react-bootstrap/Card';
// import Data from "./data.json";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut", lists: ["1", "2", "3"] };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("number of horns is : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the number of horns:
          <select onChange={this.handleChange}>
            {this.state.lists.map((horn) => (
              <option key={horn} value={horn}>
                {horn}
              </option>
            ))}

            {/* <option value="two">2</option>
            <option value="three">3</option>
            <option value="hundred">100</option> */}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Form;
