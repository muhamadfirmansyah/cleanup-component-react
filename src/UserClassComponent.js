import React, { Component } from "react";
import { RANDOM_USER_API } from "./Constants";

class UserComponent extends Component {
  state = {
    user: null
  };

  abortController = new AbortController();

  componentDidMount() {
    fetch(RANDOM_USER_API, { signal: this.abortController.signal })
      .then((results) => results.json())
      .then((data) =>
        this.setState({
          user: data
        })
      )
      .catch((err) => {
        console.log("err", err.name);
        if (err.name === "AbortError") return;
        throw error;
      });
  }

  componentWillUnmount() {
    //console.log("unmount");
    this.abortController.abort();
  }

  render() {
    let { user } = this.state;
    return (
      <div>
        <h4>Class</h4>
        {user === null ? (
          <p>Loading Class Data...</p>
        ) : (
          <pre>{JSON.stringify(user, null, 4)}</pre>
        )}
      </div>
    );
  }
}

export default UserComponent;
