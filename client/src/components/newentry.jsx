import React, { Component, Fragment } from "react";

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: this.props.lifts
    };
  }

  renderSelect() {
    return (
      <Fragment>
        {this.state.lifts.map(lift => (
          <option value={lift.name}>{lift.name}</option>
        ))}
        ;
      </Fragment>
    );
  }

  render() {
    let formFields = {};
    return (
      <form>
        <select name="Lift">{this.renderSelect()}</select>
        <input
          ref={input => (formFields.name = input)}
          placeHolder="Amount of weight"
        />
        <input
          ref={input => (formFields.name = input)}
          placeHolder="Total Reps"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewEntry;
