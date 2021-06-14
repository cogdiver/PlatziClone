import React, { Component } from "react";
import Header from "../components/Header/Header";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        {children}
      </>
    );
  }
}

export default Layout;
