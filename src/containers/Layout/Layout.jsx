import React, { Component } from "react";
import Header from "../../components/Header/Header";
import StyledLayout from "./style";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledLayout>
        <Header />
        {children}
      </StyledLayout>
    );
  }
}

export default Layout;
