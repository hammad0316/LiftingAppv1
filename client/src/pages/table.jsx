import React, { Component, Fragment } from "react";
import NewEntry from "../components/newentry";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lifts: [],
      muscleGroups: []
    };
    this.renderMuscleGroups = this.renderMuscleGroups.bind(this);
    this.renderLifts = this.renderLifts.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetch(`/api/v1/lifts.json`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          lifts: data.lifts,
          muscleGroups: data.muscle_groups,
          loading: false
        });
      });
  }

  handleDelete(id) {
    fetch(`/api/v1/lifts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(id);
  }

  renderMuscleGroups() {
    return (
      <Fragment>
        {this.state.muscleGroups.map(muscleGroup => (
          <div key={muscleGroup.id}>
            <h3>{muscleGroup.name}</h3>
            <h5>{muscleGroup.area}</h5>
          </div>
        ))}
      </Fragment>
    );
  }

  renderLifts() {
    return (
      <Fragment>
        {this.state.lifts.map(lift => {
          return (
            <div key={lift.id}>
              <h3>{lift.name}</h3>
              {lift.muscle_groups.map(mg => (
                <li key={mg}>{mg}</li>
              ))}
            </div>
          );
        })}
        ;
      </Fragment>
    );
  }

  renderRows() {
    return (
      <Fragment>
        {this.state.lifts.map(lift => {
          return (
            <tbody key={lift.id}>
              <tr>
                <td>{lift.name}</td>
                <td>
                  {lift.muscle_groups.map(mg => (
                    <li key={mg}>{mg}</li>
                  ))}
                </td>
                <td>0</td>
                <td>0</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => this.handleDelete(lift.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Lift Name</th>
                  <th>Muscle Groups</th>
                  <th>Weight Put Up</th>
                  <th>Reps</th>
                  <th />
                </tr>
              </thead>
              {this.renderRows()}
            </table>
            <NewEntry lifts={this.state.lifts} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Table;
