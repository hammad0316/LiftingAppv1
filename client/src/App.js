import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [],
      muscleGroups: []
    };
    this.renderMuscleGroups = this.renderMuscleGroups.bind(this);
    this.renderLifts = this.renderLifts.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/lifts.json")
      .then(response => {
        return response.json();
      })
      .then(lift=> {
        this.setState({
          lifts: lift
        });
      })
      .then(muscleGroup=> {
        this.setState({
          muscleGroups: muscleGroup
        });
      })
  }

  renderMuscleGroups() {
    return (
      <Fragment>
        {this.state.muscleGroups.map(muscleGroup => {
            <div key={muscleGroup.id}>
              <h3>{muscleGroup.name}</h3>
              <h5>{muscleGroup.area}</h5>
            </div>
        })}
      </Fragment>
    )
  };

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
      })};
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
                  <button>Edit</button> <button>Delete</button>{' '}
                </td>
              </tr>
            </tbody>
          );
        })}
      </Fragment>
    );
  }

  render() {
    return(
      <Fragment>
        {<table className="table">
          <thead className="thead-dark">
            <th>Lift Name</th>
            <th>Muscle Groups</th>
            <th>Weight Put Up</th>
            <th>Reps</th>
            <th />
          </thead>
          {this.renderRows()}
        </table>
        }
      </Fragment>);
  }
}

export default App;
