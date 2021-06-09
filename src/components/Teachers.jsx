import React, { Component } from "react";

class Teachers extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <p>Profesor de </p>
        <span>{id}</span>
      </div>
    );
  }
}

export default Teachers;
