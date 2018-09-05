import React, { Component, Fragment } from "react";
import NewEntry from "../components/newentry";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lifts: [],
      muscleGroups: [],
      users: []
    };
    this.renderMuscleGroups = this.renderMuscleGroups.bind(this);
    this.renderLifts = this.renderLifts.bind(this);
    this.renderRows = this.renderRows.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteLift = this.deleteLift.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewLift = this.addNewLift.bind(this);
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
          users: data.users,
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

    this.deleteLift(id);
  }

  deleteLift(id) {
    const newUsers = this.state.users.map(user => {
      user.lifts.filter(lift => lift.id !== id);
      return user;
    });

    console.log(newUsers);

    // this.setState({
    //   lifts: newLifts
    // });
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

  renderRows(user) {
    return (
      <Fragment>
        {user.lifts.map(lift => {
          return (
            <tbody key={lift.name}>
              <tr>
                <td>{lift.name}</td>
                <td>
                  to do: muscle groups
                  {/* {lift.muscle_groups.map(mg => (
                    <li key={mg}>{mg}</li>
                  ))} */}
                </td>
                <td>{lift.weight}</td>
                <td>{lift.reps}</td>
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

  handleFormSubmit(userId, liftData) {
    let lift = JSON.stringify({ userId, liftData });

    fetch(`/api/v1/lifts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: lift
    })
      .then(response => {
        return response.json();
      })
      .then(lift => {
        this.addNewLift(lift);
      });
  }

  addNewLift() {}

  renderTable(user) {
    const rows =
      user.lifts.length > 0 ? (
        this.renderRows(user)
      ) : (
        <tbody>
          <tr>
            <td>No data</td>
          </tr>
        </tbody>
      );

    return (
      <div key={user.id}>
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
          {rows}
        </table>
        <NewEntry
          lifts={this.state.lifts}
          user={user.id}
          handleFormSubmit={this.handleFormSubmit}
        />
        <br />
        <br />
      </div>
    );
  }

  render() {
    console.log(this.state.users);

    return (
      <Fragment>
        {this.state.loading ? (
          <h3>Loading...</h3>
        ) : (
          <Fragment>
            {this.state.users.map(user => this.renderTable(user))}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Table;
