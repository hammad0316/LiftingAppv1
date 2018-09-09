import React, { Component, Fragment } from "react";

class testPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userLifts: [],
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
          //   lifts: data.lifts,
          //   muscleGroups: data.muscle_groups,
          userLifts: data.userLifts,
          loading: false
        });
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.userLifts.map(data => {
          return (
            <div key={data.id}>
              <h3>{data.lift}</h3>
              <p>{data.weight}</p>
              <p>{data.reps}</p>
              {data.muscle_groups.map(mg => {
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
