import React, { Component, Fragment } from "react";

class testPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      lifts: [],
      muscleGroups: [],
      users: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/user_lifts/202`)
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

  render() {
    return (
      <Fragment>
        {this.state.lifts.map(lift => {
          return (
            <div key={lift.id}>
              <h3>{lift.name}</h3>
              {lift.muscle_groups.map(mg => {
                return <li key={mg}>{mg}</li>;
              })}
            </div>
          );
        })}
        ;
      </Fragment>
    );
  }
}

export default testPage;
