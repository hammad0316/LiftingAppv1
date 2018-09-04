import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [],
      muscleGroups: []
    };

  }

  componentDidMount() {
    fetch("/api/v1/lifts.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          lifts: this.props.lifts,
          muscleGroups: this.props.muscle_Groups
        });
      });
  }

  renderMuscleGroups() {
    return {this.state.muscleGroups.map(muscleGroup => {
        <div key={muscleGroup.id}>
          <h3>{muscleGroup.name}</h3>
          <h5>{muscleGroup.area}</h5>
        </div>
    }})
  };
  }

  renderLifts() {
    return ({this.state.lifts.map(lift => {
        <div key={lift.id}>
          <h3>{lift.name}</h3>
          {lift.muscle_groups.map(mg => (
            <li key={mg}>{mg}</li>
          ))}
        </div>
    }});
  )
  }

    renderRows() {
    return (
      <React.fragment>
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
      </React.fragment>
    );
  }


  }

  render() {
    return(
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
    });
    }
  }

export default App;
