import React, { Component, Fragment } from "react";

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: this.props.lifts,
      user: this.props.user,
      select: "",
      weight: 0,
      reps: 0
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleRepsChange = this.handleRepsChange.bind(this);
  }

  handleSelectChange(e) {
    this.setState({ select: e.target.value });
  }

  handleWeightChange(e) {
    this.setState({ weight: e.target.value });
  }

  handleRepsChange(e) {
    this.setState({ reps: e.target.value });
  }

  renderSelect() {
    return (
      <Fragment>
        {this.state.lifts.map(lift => (
          <option key={lift.id} value={lift.name}>
            {lift.name}
          </option>
        ))}
        ;
      </Fragment>
    );
  }

  render() {
    return (
      <form>
        <select
          name="Lift"
          onChange={this.handleSelectChange}
          value={this.state.select}
        >
          {this.renderSelect()}
        </select>
        <input
          onChange={this.handleWeightChange}
          value={this.state.weight}
          type="number"
          placeholder="Amount of weight"
        />
        <input
          onChange={this.handleRepsChange}
          value={this.state.reps}
          type="number"
          placeholder="Total Reps"
        />
        <button
          onClick={e => {
            e.preventDefault();
            this.props.handleFormSubmit(this.state.user, {
              lift: this.state.select,
              weight: this.state.weight,
              reps: this.state.reps
            });
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default NewEntry;
