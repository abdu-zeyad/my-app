import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from 'react-bootstrap/Card';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut", lists: ["1", "2", "3", "100"] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the number of horns:
          <select>
            {this.state.lists.map((horn) => (
              <option onChange={this.handleChange} key={horn} value={horn}>
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
