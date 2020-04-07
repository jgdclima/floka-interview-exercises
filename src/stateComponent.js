import React from "react";

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["first", "second", "third"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleSelected(e.target.value);
  }

  render() {
    const title = this.props.title;
    return (
      <form className="dropdown">
        <label for="selector">{this.state.selected}</label>
        <select
          name="selector"
          id="selector"
          value={title}
          onChange={this.handleChange}
        >
          {this.state.options.map(i => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </form>
    );
  }
}
