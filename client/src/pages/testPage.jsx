import React, { Component, Fragment } from "react";

class testPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userLifts: []
    };
    this.renderRows = this.renderRows.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(id) {
    fetch(`/api/v1/user_lifts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.deleteLift(id);
  }

  renderRows() {
    return (
      <Fragment>
        {this.state.userLifts.map(data => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.lift}</td>
                <td>
                  {data.muscle_groups.map(mg => {
                    return (
                      <li key={mg} className="">
                        {mg}
                      </li>
                    );
                  })}
                </td>
                <td>{data.weight}</td>
                <td>{data.reps}</td>
                <td>
                  <button className="btn btn-outline-primary">Edit</button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(data.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-dark">+</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Fragment>
    );
  }

  renderTable() {
    return (
      <Fragment>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Lift Name</th>
              <th>Muscle Groups</th>
              <th>Weight Lifts</th>
              <th>Reps Done</th>
              <th />
            </tr>
          </thead>
          {this.renderRows()}
        </table>
        <br />
        <br />
      </Fragment>
    );
  }

  render() {
    return <Fragment>{this.renderTable()}</Fragment>;
  }
}

export default testPage;
