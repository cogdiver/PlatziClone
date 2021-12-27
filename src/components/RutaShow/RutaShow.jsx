import React, { Component } from "react";

class RutaShow extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <span>{id}</span>
      </div>
    );
  }
}

export default RutaShow;
